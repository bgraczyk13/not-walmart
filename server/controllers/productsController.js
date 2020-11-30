const products = require('../data.json')

// @product
/*
  {
    id: number,
    name: string,
    image: string,
    price: number
  }
*/

module.exports = {
  getAllProducts: (req, res) => {
    res.status(200).send(products)
  },
}
