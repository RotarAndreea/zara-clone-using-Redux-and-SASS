import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider';
import SizeTable from '../product/SizeTable';

const FavoriteItem = ({id, title, image, price, rating,stock,isFavorite,quantity,sizes}) => {
    const [_, dispatch] =useStateValue() ; //eslint-disable-line no-unused-vars
    const [showSizes, setShowSizes]=useState(false);

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
                     onClick={()=>setShowSizes(true)}
                     style={{display: showSizes ? 'none' : 'flex'}}
                >
                        <div> add  </div>
                </div>
                <SizeTable id={id} title={title} image={image} price={price} rating={rating} stock={stock} isFavorite={isFavorite} quantity={quantity} sizes={sizes}
                           showSizes={showSizes}
                           hideSizeTable={hideSizeTable}
                />
            </div>
            
        </div>
        
        
        
    </div>

  )
}

export default FavoriteItem