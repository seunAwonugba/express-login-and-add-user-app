const express = require("express");
const { peopleRouter } = require("./routes/people");
const { postmanRouter } = require("./routes/postman");
const { authRouter } = require("./routes/auth");
const app = express();
const port = 3000;
const host = "localhost";

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/postman", postmanRouter);
app.use("/api/v1/login", authRouter);

app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        data: "Resource not found",
    });
});

app.listen(port, host, () => {
    console.log(`server is listening on http://${host}:${port}`);
});
