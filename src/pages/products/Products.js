import React from 'react'
import Product from '../../components/Product'
import NavigationLayout from '../../components/NavigationLayout'
import {dress} from '../../DataProducts/WomanProducts/dress/Dress'

const Products = () => {

  const product=dress.map(product=>(
    <Product
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        stock={product.stock}
        isFavorite={product.isFavorite}
    />
  ))

  return (
    <>
        <NavigationLayout />
        <div className='layout-catalog'>
          <div className='layout-catalog-content'>
                  <ul className='grid-system'>
                    {product}
                  </ul>
          </div>
        </div>
    </>
  )
}

export default Products