import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider';
import BasketItem from '../../components/basketItem/BasketItem';
import FavoriteItem from '../../components/favoriteItem/FavoriteItem';
import NavigationLayout from '../../components/NavigationLayout';
 
const Cart = () => {
  const [state]=useStateValue();
  const [showCartItems, setShowCartItems]=useState(true);
  const whiteBackground=true;

  const sum=state.basket?.reduce((total,product)=>{
    return total+product.price*product.quantity;
  },0) // 0 is for the initial value of "total" variable

  const totalProducts=state.basket?.reduce((total,product)=>{
    return total+product.quantity;
  },0)

  const basketProduct=state.basket.map(product=>(
    <BasketItem
        key={product.id}
        id={product.id}
        {...product}
    />
  ))
  const favoriteProduct=state.favoriteItems?.map(product=>(
    <FavoriteItem
        key={product.id}
        id={product.id}
        {...product}

    />
  )) 

  return (
    <div className='layout'>
        <NavigationLayout whiteBackground={whiteBackground} />
        <div className='layout-cart__content'>
          <div className='layout-cart__content-header-buttons-container'>

            <div className='layout-cart__content-header-buttons'>
                <div className='layout-cart__content-grouped-buttons'>
                  <div  className='layout-cart__content-cart_button' 
                        onClick={()=>setShowCartItems(true)}
                        style={{fontWeight: showCartItems ? '600' : '100'}}
                  >
                    Cart ({totalProducts})
                  </div>
                  <div className='layout-cart__content-favorite_button' 
                        onClick={()=>setShowCartItems(false)}
                        style={{fontWeight: showCartItems ? '100' : '600'}}
                  >
                    Favorites
                  </div>
                </div>
            </div>
          </div>
          <div className='layout-shop__content'>
            <div className='layout-shop-article col-9-xs col-8-sm col-9-xl'>
                <div className='layout-shop-items '>
                  {
                    showCartItems ?
                    <div className='row'>
                      { state.basket.length !== 0 ? 
                        basketProduct
                        :
                        <div className='layout-shop__no-items'>You don't have any item in the cart </div>
                      }
                    </div>
                    :
                    <div className='row'>
                      { state.favoriteItems.length !== 0 ? 
                        favoriteProduct
                        :
                        <div className='layout-shop__no-items'>You don't have any item saved. </div>
                      }
                    </div>
                  }
                  
                </div>
                  
            </div>
            
           {showCartItems && <aside className='pl-1 col-3-xs col-4-sm col-3-xl'>
                  <h2>Suggestions</h2>
                  <div className='card'>
                    <h1 className='card-title'>This is a card title</h1>
                    <p className='card-body'>Press on the link to go to <a href='/'> Home </a> page </p>
                  </div>
            </aside>}
          </div>

        </div>
        {showCartItems &&
          <div className='layout-cart__checkout'>
            <div className='layout-cart__checkout-order-total-tables__total'>
                <span className='layout-cart__checkout-order-total-tables__total-name'>
                      Total 
                </span>
                <span className='layout-cart__checkout-order-total-tables__total-amount'>
                      {sum} eur
                </span>
            </div>
            
            <div className='layout-cart__checkout-order-total-tables__continue-container'>
                      <div className='layout-cart__checkout-order-total-tables__continue'>
                        Continue
                      </div>
            </div>
          
          </div>
        }
    </div>
  )
}

export default Cart