import Token from "../models/Token.js";
import Service from "../models/Service.js";

// @desc    Get queue status for a service
// @route   GET /api/queue/status?serviceId=xxx
// @access  Public or Private
const getQueueStatus = async (req, res) => {
  const { serviceId } = req.query;

  try {
    const queueTokens = await Token.find({
      serviceId,
      status: "waiting",
    }).sort({ createdAt: 1 });

    const currentToken = await Token.findOne({
      serviceId,
      status: "serving",
    });

    res.json({
      waitingCount: queueTokens.length,
      currentToken: currentToken ? currentToken.tokenNumber : null,
      queue: queueTokens,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get current token being served
// @route   GET /api/queue/current?serviceId=xxx
// @access  Public or Private
const getCurrentToken = async (req, res) => {
  const { serviceId } = req.query;
  try {
    const current = await Token.findOne({
      serviceId,
      status: "serving",
    });
    res.json(current || { message: "No token being served currently." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all tokens (Admin)
// @route   GET /api/admin/tokens
// @access  Private/Admin
const getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.find({})
      .populate("userId", "name email")
      .populate("serviceId", "serviceName")
      .sort({ createdAt: -1 });
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update next token status (Admin)
// @route   PUT /api/admin/next-token
// @access  Private/Admin
const nextToken = async (req, res) => {
  const { serviceId } = req.body;
  try {
    // Complete the current serving token
    const servingToken = await Token.findOne({
      serviceId,
      status: "serving",
    });

    if (servingToken) {
      servingToken.status = "completed";
      await servingToken.save();
    }

    // Get the next waiting token
    const nextWaitingToken = await Token.findOne({
      serviceId,
      status: "waiting",
    }).sort({ createdAt: 1 });

    if (nextWaitingToken) {
      nextWaitingToken.status = "serving";
      await nextWaitingToken.save();
      res.json({ message: "Serving next token", token: nextWaitingToken });
    } else {
      res.json({ message: "Queue is empty" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a Service (Admin)
// @route   POST /api/admin/service
// @access  Private/Admin
const createService = async (req, res) => {
  const { serviceName, description } = req.body;
  try {
    const service = await Service.create({ serviceName, description });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all Services
// @route   GET /api/queue/services
// @access  Public
const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getQueueStatus,
  getCurrentToken,
  getAllTokens,
  nextToken,
  createService,
  getServices,
};
