const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === "john") {
        //req.user here
        req.user = {
            name: "john",
            id: 5,
        };
        next();
    } else {
        res.status(401).json({
            success: false,
            data: "unauthorised",
        });
    }
};

module.exports = { authorize };
