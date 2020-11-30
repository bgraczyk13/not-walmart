import React from 'react'
import Product from './Product'

const Products = (props) => {
  const productMap = props.products.map((element) => {
    return (
      <Product addToCart={props.addToCart} key={element.id} product={element} />
    )
  })

  return <div className="products">{productMap}</div>
}
export default Products
