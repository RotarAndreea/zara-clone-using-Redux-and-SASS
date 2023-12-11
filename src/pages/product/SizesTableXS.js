import React from 'react'

const SizesTableXS = (props) => {

    const sizes=props.product.sizes.map((size,index)=>(
        <li className='reusable-product_details-container_size-table-cell'
             style={{color: !size.quantity ? 'grey' :  'black', 
                    pointerEvents: !size.quantity && 'none',
                    fontWeight: !size.quantity && 300,
                    borderTop: index ===0 || (index ===1) ? '1px solid black' : 'none',
                    borderBottom: props.product.sizes.length %2 ===1 ? //verify if we have one or two cells at the bottom of the table
                      index === props.product.sizes.length-1 && 'none' //if the table has an odd number of cells, remove the border from the last cell
                      :
                      index === props.product.sizes.length-1 || (index === props.product.sizes.length-2) ? 'none' : '1px solid black' //if the table has an even number of cells, remove the border from the last two cells
                   }}
             key={size.size}
             onClick={()=>props.handleAddProductFromSizesTableUnderXs(size.size)}
        >{size.size}
        </li>
      ))
  return (
    <ul className='size-table_container'>
       {sizes}
    </ul>
  )
}

export default SizesTableXS