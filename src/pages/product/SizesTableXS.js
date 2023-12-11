import React from 'react'

const SizesTableXS = (props) => {

    const sizes=props.product.sizes.map(size=>(
        <li className='reusable-product_details-container_size-table-cell'
             style={{color: !size.quantity ? 'grey' :  'black', 
                    pointerEvents: !size.quantity && 'none',
                    borderColor: !size.quantity && 'grey',
                   }}
             key={size.size}
             onClick={()=>props.handleAddProductFromSizesTableUnderXs(size.size)}
        >{size.size}
        </li>
      ))
  return (
    <div className='size-table_container'>
                {sizes}
    </div>
  )
}

export default SizesTableXS