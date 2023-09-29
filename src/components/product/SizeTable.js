import React from 'react'
import { useStateValue } from '../../StateProvider';

const SizeTable = ({id, title, image, price, rating, stock,isFavorite,quantity,sizes,showSizes, hideSizeTable}) => {
  const [state, dispatch] = useStateValue(); //state will be the array with all the products(equal to {basket})

  const currentSize=sizes.map(size=>(
    <div  
        className='product-size-box' 
        onClick={()=>addToBasket(size.size,size.quantity)}
        style={{opacity: size.quantity ? 'none' : 0.2}}
        key={size.size}
    >
        {size.size}
    </div>

  ));

  const addToBasket=(size,quantity)=>{ //arguments that will get the values from currentSize
      //dispatch the item into the data layer
      const element=state.basket.find(obj=>obj.key === id+size)//find in the basket the object with the same id as the product clicked
      let quantityAddedToCart=1;
      if(element){
        quantityAddedToCart=element.quantity //i save in this variable the updated quantity of the product added to cart
      }
      if(quantity>0  && quantityAddedToCart<quantity){ //the quantity of the choosed size should be >0 and the maximum quantity that can be added to cart, of this product, should be < size quantity
        dispatch({
          type: 'ADD_TO_BASKET',
          item:{
              key:id+size, //every product should have a unique identifier
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating,
              stock:stock,
              isFavorite:isFavorite,
              quantity:1, // the quantity that should be added to cart
              size:size,
              totalQuantity:quantity //total quantity for a product depending on the size
          },
        })
      }
        
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