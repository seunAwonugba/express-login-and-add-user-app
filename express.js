const express = require("express");
const app = express();
const port = 8000;
const host = "localhost";

const { products, people } = require("./data");

app.get("/", (req, res) => {
    res.status(200);
    res.send(`<h1>Home page</h1><a href ="api/products">Products</a> `);
});

app.get("/api/products", (req, res) => {
    var data = products.map((item) => {
        //the map statement automatically creates a variable a,b,c for u, if u return it directly like this
        // return { a: item.id, b: item.name, c: item.image };
        return {
            id: item.id,
            name: item.name,
            image: item.image,
        };
    });
    // console.log(data);
    res.status(200);
    res.json(data);
});

app.get("/api/products/:productId", (req, res) => {
    var { productId } = req.params;

    var data = products.find((item) => {
        return item.id === Number(productId);
    });

    if (!data) {
        return res.status(404).json("Resource not found");
    } else {
        return res.status(200).json(data);
    }
});

app.get("/api/v1/search", (req, res) => {
    const { name, limit } = req.query;
    //for query first of all copy the data into a new variable first,
    //u query the new variable and also return the new variable
    let productsToFilter = [...products];

    //if in the request i pass query parameter name, do this

    if (name) {
        productsToFilter = productsToFilter.filter((item) => {
            return item.name.includes(name) || item.desc.includes(name);
        });
    }

    if (limit) {
        productsToFilter = productsToFilter.slice(0, Number(limit));
    }

    if (productsToFilter.length < 1) {
        return res.status(200).json({
            success: true,
            data: [],
        });
    }
    res.status(200).json(productsToFilter);
});

app.all("*", (req, res) => {
    res.status(404);
    res.send("resource not found");
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
