import Token from "../models/Token.js";
import Service from "../models/Service.js";

// @desc    Book a new service token
// @route   POST /api/token/book
// @access  Private
const bookToken = async (req, res) => {
  const { serviceId } = req.body;

  try {
    // Check if service exists
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Get the latest token number for this service
    const lastToken = await Token.findOne({ serviceId }).sort({ createdAt: -1 });
    let tokenNumber = 1;
    if (lastToken) {
      tokenNumber = lastToken.tokenNumber + 1;
    }

    const token = await Token.create({
      userId: req.user._id,
      serviceId,
      tokenNumber,
      status: "waiting",
    });

    res.status(201).json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user's tokens
// @route   GET /api/token
// @access  Private
const getUserTokens = async (req, res) => {
  try {
    const tokens = await Token.find({ userId: req.user._id }).populate(
      "serviceId",
      "serviceName"
    ).sort({ createdAt: -1 });
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Cancel a token
// @route   PUT /api/token/cancel/:id
// @access  Private
const cancelToken = async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);

    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }

    if (token.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "User not authorized" });
    }

    token.status = "cancelled";
    await token.save();

    res.json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { bookToken, getUserTokens, cancelToken };
