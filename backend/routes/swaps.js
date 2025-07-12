const router = require('express').Router();
const verify = require('../middleware/verifyToken');
const {
  createSwap, updateSwapStatus, deleteSwap, userSwaps, addFeedback
} = require('../controllers/swapController');

router.post('/request', verify, createSwap);
router.put('/:id/accept', verify, (req, res) => updateSwapStatus(req, res, 'accepted'));
router.put('/:id/reject', verify, (req, res) => updateSwapStatus(req, res, 'rejected'));
router.delete('/:id', verify, deleteSwap);
router.get('/user/:id', verify, userSwaps);
router.post('/:id/feedback', verify, addFeedback);

module.exports = router;
