import React from 'react'
import { useStateValue } from '../../StateProvider';

const SizeTable = ({id, title, image, price, rating, stock,isFavorite,quantity,sizes,showSizes, hideSizeTable}) => {
  const [state, dispatch] = useStateValue(); //state will be the array with all the products(equal to {basket})

  const currentSize=sizes.map(size=>(
    <div  
        className='product-size-box' 
        onClick={()=>addToBasket(size.size)}
        key={size.size}
    >
        {size.size}
    </div>

  ));

  const addToBasket=(size)=>{
      //dispatch the item into the data layer
      dispatch({
          type: 'ADD_TO_BASKET',
          item:{
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating,
              stock:stock,
              isFavorite:isFavorite,
              quantity:1,
              size:size
          },
      })
  }
    
  
  return (
    <div className='product-size' 
         style={{display: showSizes ? 'block' : 'none'}}
         onMouseLeave={()=>hideSizeTable()}
    >
        <div className='product-size-grid'>
            {currentSize}
        </div>
    </div>
  )
}

export default SizeTable