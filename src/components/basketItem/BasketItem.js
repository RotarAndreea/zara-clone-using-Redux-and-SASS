import React from 'react'
import { useStateValue } from '../../StateProvider';

const BasketItem = ({id, title, image, price, rating,quantity ,stock}) => {
    const [_, dispatch] =useStateValue() ; //eslint-disable-line no-unused-vars

    const removeFromBasket=()=>{
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    const changeProductQuantity=(event)=>{
        //update the quantity of a product
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTITY',
            item:{
                id:id,
                quantity:parseInt(event.target.value)
            }
        })
    }
  return (
    <div className='shop-cart-item'>
        <div className='shop-cart-item__container'>
            <div className='shop-cart-item__image-container'>
                <img className='shop-cart-item__image' src={image} alt='Dress'/>
            </div>
            <div className='shop-cart-item__details-content'>
                <div className='shop-cart-item__details'>
                    <div className='shop-cart-item__name'>{title}</div>
                    <div className='shop-cart-item__information'>
                        <div className='shop-cart-item__price'>${price}</div>
                        <div className='shop-cart-item-base'>
                            <span className='shop-cart-item-base__size' >S</span>
                            <span className='shop-cart-item-base__color' >BLACK</span>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='shop-cart-item-actions row justify-space-between'>
                    <div >
                            <select 
                                className='shop-cart-item-actions__quantity'
                                defaultValue={quantity} 
                                name="quantity" 
                                id="quantity"
                                onChange={changeProductQuantity}
                            >
                                {Array(stock)
                                    .fill()
                                    .map((_, i) =>(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                    ))}
                            </select>
                    </div>
                    <div className='shop-cart-item-actions__delete' onClick={removeFromBasket}>DELETE</div>
                </div>
            </div>
            
        </div>
        
        
        
    </div>

  )
}

export default BasketItem