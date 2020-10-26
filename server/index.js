const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

const port = 3500;
// axios.get('/api/products?name=ps5')
app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct)

// This is the same as above because getProducts is being imported as the rest of the .get function
// app.get('/api/products', (req, res) => {
//     res.status(200).send(products)
// });
// app.get('/api/products', (req,res) =>{
//     const item = products.find(val => val.id === parseInt(req.params.id))
//     if (!item) {
//         return res.status(500).send("Item not in list")
//     }
//      res.status(200).send(item)
// } )


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});