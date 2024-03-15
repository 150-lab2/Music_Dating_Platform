import dbConnect from '../../../config/dbConnect'; 
import bcryptjs from 'bcryptjs';
import User from '../../../models/User'; 
import jwt from 'jsonwebtoken';

export async function POST(request) {
    await dbConnect();
    const data = await request.json;
    return Response.json({
        hello: "world",
    });
}

// pages/api/signup.js
/*
import dbConnect from '../../config/dbConnect';
import bcrypt from 'bcrypt';
import User from '../../models/User'; 
import jwt from 'jsonwebtoken';

export default async function registerUser(req, res) {
    await dbConnect();
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ message: "Username, password, and email are required." });
    }

    try {
        const checkForDuplicate = await User.findOne({ username }).exec();
        if (checkForDuplicate) {
            return res.status(409).json({ message: "An account has already been created using this username." });
        }

        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            password: hash,
            email
        });

        const token = jwt.sign({ username, email }, process.env.SECRET_STR, { expiresIn: '1h' });
        res.cookie("token", token, { httpOnly: true });

        res.status(201).json({ message: "New user created!", user: newUser, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
*/
