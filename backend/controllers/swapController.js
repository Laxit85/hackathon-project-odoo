const Swap = require('../models/Swap');
const User = require('../models/User');

exports.createSwap = async (req, res) => {
  try {
    const { receiverId, skillRequested, skillOffered } = req.body;
    const newSwap = await Swap.create({
      requesterId: req.user.id,
      receiverId,
      skillRequested,
      skillOffered
    });
    res.json(newSwap);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updateSwapStatus = async (req, res, status) => {
  try {
    const swap = await Swap.findByPk(req.params.id);
    if (!swap) return res.status(404).json("Swap not found");

    if (swap.receiverId !== req.user.id) return res.status(403).json("Not allowed");

    swap.status = status;
    await swap.save();
    res.json(swap);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteSwap = async (req, res) => {
  try {
    const swap = await Swap.findByPk(req.params.id);
    if (!swap) return res.status(404).json("Not found");
    if (swap.requesterId !== req.user.id) return res.status(403).json("Unauthorized");
    await swap.destroy();
    res.json("Swap deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.userSwaps = async (req, res) => {
  try {
    const swaps = await Swap.findAll({
      where: {
        [require('sequelize').Op.or]: [
          { requesterId: req.params.id },
          { receiverId: req.params.id }
        ]
      },
      include: [
        { model: User, as: 'requester', attributes: ['name', 'skillsOffered'] },
        { model: User, as: 'receiver', attributes: ['name', 'skillsOffered'] }
      ]
    });
    res.json(swaps);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.addFeedback = async (req, res) => {
  try {
    const swap = await Swap.findByPk(req.params.id);
    if (!swap) return res.status(404).json("Swap not found");
    if (swap.requesterId !== req.user.id && swap.receiverId !== req.user.id)
      return res.status(403).json("Not authorized");

    swap.feedback = req.body;
    await swap.save();
    res.json("Feedback added");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
