import React from 'react'
import { useStateValue } from '../../StateProvider';

const FavoriteItem = ({id, title, image, price, rating,quantity ,stock,isFavorite}) => {
    const [_, dispatch] =useStateValue() ; //eslint-disable-line no-unused-vars

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

    const updateFavoriteList=()=>{
        addToBasket();
        removeFromFavorite();
    }

  return (
    <div className='favorite-item'>
        <div className='favorite-item__container'>
            <div className='favorite-item__image-container'>
                <img className='favorite-item__image' src={image} alt='Dress'/>
            </div>
            <div className='favorite-item__details-content'>
                <div className='favorite-item__details'>
                    <div className='favorite-item__main-details'>
                        <div className='favorite-item__name'>{title}</div>
                        <div className='favorite-item__save-button'>
                            <svg onClick={removeFromFavorite} className="product-info__wishlist-icon" preserveAspectRatio="xMidYMid slice" width="24" heigth="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path fillRule="evenodd" clipRule="evenodd" d={ "M12 15.238L17 20V4H7v16l5-4.762z"}></path></svg>
                        </div>
                    </div>
                    <div className='favorite-item__information'>
                        <div className='favorite-item__price'>${price}</div>                        
                    </div>
                    
                </div>
                <div className='favorite-item-actions row justify-center'
                     onClick={updateFavoriteList}
                >
                        <div> add </div>
                </div>
            </div>
            
        </div>
        
        
        
    </div>

  )
}

export default FavoriteItem