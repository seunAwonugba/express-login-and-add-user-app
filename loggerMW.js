const logger = (req, res, next) => {
    const method = req.method;
    const path = req.path;
    const time = new Date().getMonth();

    console.log(`${method} ${path} ${time}`);

    next();
};

module.exports = { logger };
