const jwt = require('jsonwebtoken');
const prisma = require('../models/prisma-client');

const authenticateJWT = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Authentication token missing' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user) return res.status(401).json({ message: 'User not found' });

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authenticateJWT };
