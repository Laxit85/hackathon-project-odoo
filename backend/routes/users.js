const router = require('express').Router();
const { getUser, updateUser, searchUsers } = require('../controllers/userController');
const verify = require('../middleware/verifyToken');

router.get('/:id', getUser);
router.put('/:id', verify, updateUser);
router.get('/', searchUsers); // ?skill=React

module.exports = router;
