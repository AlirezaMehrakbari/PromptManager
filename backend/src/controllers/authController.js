const prisma = require('../models/prisma-client');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const existingUser = await prisma.user.findUnique({where: {username}});
        if (existingUser) {
            return res.status(400).json({message: "Username already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        const token = generateToken(user.id);
        res.status(201).json({
            user: {
                id: user.id,
                username: user.username,
                token: token
            }
        });
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await prisma.user.findUnique({where: {username}});
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({message: 'username or password is incorrect!'});
        }
        const token = generateToken(user.id);
        res.json({token});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};
