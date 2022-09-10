const express = require("express");
const app = express();
const port = 8080;
const host = "localhost";
const { logger } = require("./loggerMW");
const { authorize } = require("./autorizeMW");

//for multiple middleware place them in an array
app.use("/api/v1", [authorize, logger]);

app.get("/api/v1", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Home page",
    });
});

app.get("/api/v1/users", (req, res) => {
    console.log(req.query);
    //req.user here from middleware

    console.log(req.user);
    res.status(200).json({
        success: true,
        data: "admin page",
    });
});

app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        data: "resource not found",
    });
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
