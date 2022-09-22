const { people } = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({
        success: true,
        data: people,
    });
};

const createPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).json({
            success: true,
            data: name,
        });
    } else {
        res.status(401).json({
            success: false,
            data: "name cannot be empty",
        });
    }
};

module.exports = { getPeople, createPerson };
