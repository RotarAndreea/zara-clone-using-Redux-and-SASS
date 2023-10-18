import React, { useState } from 'react'
import Product from '../../components/product/Product'
import NavigationLayout from '../../components/NavigationLayout'
import {dress} from '../../DataProducts/WomanProducts/dress/Dress'

const Products = () => {
  const [showWarning, setShowWarning]=useState(false);
  const product=dress.map(product=>(
    <Product
        key={product.id}
        id={product.id} //to make the id different for each product that has different size
        title={product.title}
        price={product.price}
        image={product.image}
        stock={product.stock}
        isFavorite={product.isFavorite}
        sizes={product.sizes}
        handleShowWarning={setShowWarning}
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
          {showWarning &&
            <div className='waringMessage'>
              {showWarning}
            </div>
          }
        </div>
    </>
  )
}

export default Products