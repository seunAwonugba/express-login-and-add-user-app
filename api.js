const express = require("express");
const app = express();
const port = 8000;
const host = "localhost";
let { people } = require("./data");

app.use(express.static("./methods-public"));

//in express to get form data, use a middle ware called url encoded
app.use(express.urlencoded({ extended: false }));
//to get form data also in express USE THIS
// if the form data request, i.e u are sending a form data using JS codes as against using form actions, use this express.json()
app.use(express.json());
app.get("/api/v1/people", (req, res) => {
    res.status(200).json({
        success: true,
        data: people,
    });
});

app.post("/api/v1/people", (req, res) => {
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
});

app.post("/api/v1/login", (req, res) => {
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

app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        data: "Resource not found",
    });
});

app.listen(port, host, () => {
    console.log(`server is listening on http://${host}:${port}`);
});
