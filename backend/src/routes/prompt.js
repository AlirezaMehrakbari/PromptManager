const express = require('express');
const promptController = require('../controllers/promptController');

const router = express.Router();

router.post('/', promptController.createPrompt);
router.get('/', promptController.getPrompts);
router.get('/favorites', promptController.getFavorites);
router.put('/:id', promptController.updatePrompt);
router.delete('/:id', promptController.deletePrompt);

// Favorite
router.post('/:id/favorite', promptController.toggleFavorite);

module.exports = router;
