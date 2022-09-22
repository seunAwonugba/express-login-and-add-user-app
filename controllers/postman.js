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
            data: [...people, name],
        });
    } else {
        res.status(401).json({
            success: true,
            data: "nae cannot be empty",
        });
    }
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    //check via the existing data if any one with this id exist,
    const person = people.find((item) => {
        return item.id === Number(id);
    });

    //if does, i.e person returns a value
    if (person) {
        //try to update the entire array, map loops via and array updates and return a new aray
        const updatePerson = people.map((item) => {
            if (item.id === Number(id)) {
                //if the id matches, change the name to the name in the body
                item.name = name;
            }
            //if not, return back the original array
            return item;
        });

        res.status(200).json({
            success: true,
            data: updatePerson,
        });
    } else {
        res.status(404).json({
            success: false,
            data: "User not found",
        });
    }
};

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((item) => {
        return item.id === Number(id);
    });

    if (person) {
        const deletePerson = people.filter((item) => {
            return item.id !== Number(id);
        });

        res.status(200).json({
            success: true,
            data: deletePerson,
        });
    } else {
        res.status(404).json({
            success: false,
            data: "User not found",
        });
    }
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson };
