const prisma = require('../models/prisma-client');

exports.createPrompt = async (req, res) => {
    const {title, description} = req.body;
    try {
        const prompt = await prisma.prompt.create({
            data: {title, description, favorite: false, userId: req.user.id}
        });
        res.status(201).json(prompt);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.getPrompts = async (req, res) => {
    try {
        const { favorite, search } = req.query;

        const whereClause = {
            userId: req.user.id
        };

        if (favorite !== undefined) {
            whereClause.favorite = favorite === 'true';
        }

        if (search) {
            whereClause.title = {
                contains: search,
                mode: 'insensitive'
            };
        }

        const prompts = await prisma.prompt.findMany({
            where: whereClause,
            orderBy: { createdAt: 'desc' }
        });

        res.json(prompts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.getFavorites = async (req, res) => {
    try {
        const favorites = await prisma.prompt.findMany({
            where: { userId: req.user.id, favorite: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json(favorites);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};


exports.updatePrompt = async (req, res) => {
    const {id} = req.params;
    const {title, description, favorite} = req.body;
    try {
        const updated = await prisma.prompt.update({
            where: {id: Number(id)},
            data: {title, description, favorite}
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.deletePrompt = async (req, res) => {
    try {
        await prisma.prompt.delete({where: {id: Number(req.params.id)}});
        res.json({message: 'Prompt deleted'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.toggleFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        const prompt = await prisma.prompt.findFirst({
            where: { id: Number(id), userId: req.user.id }
        });

        if (!prompt) {
            return res.status(404).json({ message: 'Prompt not found or not yours' });
        }

        const updated = await prisma.prompt.update({
            where: { id: prompt.id },
            data: { favorite: !prompt.favorite }
        });

        res.json({
            message: updated.favorite
                ? 'Prompt added to favorites'
                : 'Prompt removed from favorites',
            prompt: updated
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
