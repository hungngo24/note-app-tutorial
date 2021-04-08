const UserModel = require("../models/UserModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

class AuthController {
    /// GET - home page
    index(req, res) {
        res.send(" Authe Index");
    }

    // POST -- api/auth/register
    // Register User
    // Public
    async store(req, res) {
        const { username, password } = req.body;
        if (!username || !password)
            return res.status(400).json({
                success: false,
                message: "Missing userame or password",
            });
        try {
            const user = await UserModel.findOne({ username });
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: "UserName already taken !",
                });
            }
            //
            const hashPassword = await argon2.hash(password);
            let newUser = new UserModel({
                username,
                password: hashPassword,
            });
            await newUser.save();
            // token
            const Token = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.json({
                success: true,
                message: "User created successfully",
                Token,
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false, message: "Server error" });
        }
    }

    // POST -- api/auth/login
    // Login User
    // Public
    async login(req, res) {
        const { username, password } = req.body;
        if (!username || !password)
            return res.status(400).json({
                success: false,
                message: "Missing userame or password",
            });
        try {
            //check for existing user login
            const user = await UserModel.findOne({ username });
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "Incorrect username or password",
                });
            }
            //
            const passwordValid = await argon2.verify(user.password, password);
            if (!passwordValid)
                return res.status(400).json({
                    success: false,
                    message: "Incorrect username or password",
                });

            // token
            const token = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.json({
                success: true,
                message: "User logged in successfully",
                token,
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ success: false, message: "Server error" });
        }
    }

    //// PUT/PATCH --req update
    update(req, res) {
        res.render("Method update");
    }

    //// DELETE --req DELETE
    destroy(req, res) {
        res.render(" Method destroy");
    }
}

module.exports = new AuthController();
