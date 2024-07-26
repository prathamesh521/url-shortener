const express = require('express');
const { fetchUrlController, addUrlController, updateUrlController, removeUrlController } = require('../controllers/urlControllers');
const router = express.Router();

router.route('/').get(fetchUrlController).post(addUrlController);
router.route('/:id').patch(updateUrlController).delete(removeUrlController);

module.exports = router;