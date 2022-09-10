const express = require("express");
const app = express();
const port = 8000;
const host = "localhost";
const morgan = require("morgan");

app.use("/api/v1/", morgan("tiny"));

app.get("/api/v1/home", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Home page",
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
