import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider'
import SaveButton from './SaveButton';
import SizeTable from './SizeTable';

const Product = ({id, title, image, price, rating, stock,isFavorite,quantity,sizes}) => {
    const [state, dispatch] = useStateValue(); //state will be the array with all the products(equal to {basket})
    const [showSizes, setShowSizes]=useState(false);
    const isProductFavorite=state.favoriteItems.findIndex( //will find just the first element that has the same id as the other products
            (searchedFavoriteItem)=>searchedFavoriteItem.id===id)

    function handleClick(){
        isProductFavorite >=0 ?
            removeFromFavorite()
            :
            addToFavorite();   
    }

    const addToFavorite=()=>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_FAVORITE',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
                stock:stock,
                isFavorite:true,
                quantity:quantity,
                sizes:sizes
            },
        }) 
    }
    const removeFromFavorite=()=>{
        //dispatch the item into the data layer
        dispatch({
            type: 'REMOVE_FROM_FAVORITE',
            item:{
                id:id,
                isFavorite:false,
            },
        })
    }
    const hideSizeTable=()=>{
        setShowSizes(false);
    }
    

  return (
    <div className='product'>
        <div className='product-image-container'>
            <img className='product-image' src={image} alt="product-img" />
            <div className='product-grid-product__add-to-cart'>
                <button className='product-add-to-cart__button' 
                        onClick={()=>setShowSizes(true)}
                        style={{display: showSizes ? 'none' : 'block'}}
                >
                    <div className='product-add-to-cart__button-shade'>
                        <svg className="product-add-to-cart__button-icon" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.505V.255h-.5v3.25H.25v.5H3.5v3.25H4v-3.25h3.25v-.5H4z"></path></svg>                    
                    </div>
                </button>
                <SizeTable id={id} title={title} image={image} price={price} rating={rating} stock={stock} isFavorite={isFavorite} quantity={quantity} sizes={sizes}
                           showSizes={showSizes}
                           hideSizeTable={hideSizeTable}  
                />
            </div>
        </div>
        
        <div className='product-info'>

            <div className='product-info__main-info'>
                <div className='product-info__name'>{title}</div>
                <div className='product-info__wishlist'>
                    <SaveButton handleClick={handleClick} isProductFavorite={isProductFavorite}/>
                </div>
            </div>
            <p className='product-info-price'>
                <span className='price-amount'>
                    <span className='price-current__amount'>
                        <span>€{price}</span>
                    </span>
                </span>
            </p>
            
        </div>
        
    </div>
  )
}

export default Product

/*

<div className='product__rating row'>
                {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p key={i}>*</p>
                    ))
                }
            </div>

*/

//                    <svg onClick={addToFavorite} className="product-info__wishlist-icon" preserveAspectRatio="xMidYMid slice" width="24" heigth="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path fillRule="evenodd" clipRule="evenodd" d={state.favoriteItems.isFavorite ? "M12 15.238L17 20V4H7v16l5-4.762z":  "M12 15.238L17 20V4H7v16l5-4.762zm-4 2.429l4-3.81 4 3.81V5H8v12.667z"}></path></svg>





/* merge perfect dar am warning ca trebuie sa adaug niste dependinte


import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from '../StateProvider'
import SaveButton from './SaveButton';

const Product = ({id, title, image, price, rating, stock,isFavorite}) => {
    const [state, dispatch] = useStateValue(); //state will be the array with all the products(equal to {basket})
    const [isClicked, setIsClicked]=useState(false); // isClicked=true => add the product to favorite list; isClicked=false => remove the product from the list
    const isClickedRef=useRef(isClicked); // to determine if the isClicked state has changed from its initial value
    
    const isProductFavorite=state.favoriteItems.findIndex( //will find just the first element that has the same id as the other products
(searchedFavoriteItem)=>searchedFavoriteItem.id===id
)

    function handleClick(){
        setIsClicked(prevValue=>!prevValue);
    }

    const addToBasket=()=>{
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
                quantity:1
            },
        })
    }

    const addToFavorite=()=>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_FAVORITE',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                isFavorite:true,
            },
        })
        console.log(state.favoriteItems)
    }
    const removeFromFavorite=()=>{
        //dispatch the item into the data layer
        dispatch({
            type: 'REMOVE_FROM_FAVORITE',
            item:{
                id:id,
                isFavorite:false,
            },
        })
    }

    React.useEffect(()=>{ //the product will be added or removed from favoriteList only when i press the save button
        if(isClickedRef.current !== isClicked){ //(without this condition, useEffect will run for the first time even if i don't press the save button and will try to remove the items from the list, because the initial value of isClicked is false.)
            isProductFavorite >=0 ?
            removeFromFavorite()
            :
            addToFavorite();
        }
        isClickedRef.current=isClicked;
      }, [isClicked])

  return (
    <div className='product'>
        <div className='product-image-container'>
            <img className='product-image' src={image} alt="product-img" />
            <div className='product-grid-product__add-to-cart'>
                <button className='product-add-to-cart__button' onClick={addToBasket}>
                    <div className='product-add-to-cart__button-shade'>
                        <svg className="product-add-to-cart__button-icon" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.505V.255h-.5v3.25H.25v.5H3.5v3.25H4v-3.25h3.25v-.5H4z"></path></svg>                    
                    </div>
                </button>
            </div>
        </div>
        
        <div className='product-info'>

            <div className='product-info__main-info'>
                <div className='product-info__name'>{title}</div>
                <div className='product-info__wishlist'>
                    <SaveButton handleClick={handleClick} productId={id} isFavorite={isFavorite} isClicked={isClicked}/>
                </div>
            </div>
            <p className='product-info-price'>
                <span className='price-amount'>
                    <span className='price-current__amount'>
                        <span>${price}</span>
                    </span>
                </span>
            </p>
            
        </div>
        
    </div>
  )
}

export default Product


//                    <svg onClick={addToFavorite} className="product-info__wishlist-icon" preserveAspectRatio="xMidYMid slice" width="24" heigth="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path fillRule="evenodd" clipRule="evenodd" d={state.favoriteItems.isFavorite ? "M12 15.238L17 20V4H7v16l5-4.762z":  "M12 15.238L17 20V4H7v16l5-4.762zm-4 2.429l4-3.81 4 3.81V5H8v12.667z"}></path></svg>




*/