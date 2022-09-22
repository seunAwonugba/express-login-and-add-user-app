const express = require("express");
const authRouter = express.Router();

authRouter.post("/", (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        res.status(200).json({
            success: true,
            data: "user login successful",
        });
    } else {
        res.status(401).json({
            success: false,
            data: "email and password cannot be empty",
        });
    }
});

module.exports = { authRouter };
