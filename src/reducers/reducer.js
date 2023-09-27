//the data layout

//create the initial state
export const initialState={
    basket:localStorage.getItem('basket')
    ?
    JSON.parse(localStorage.getItem('basket'))
    :
    [],
    favoriteItems:localStorage.getItem('favoriteItems')
    ?
    JSON.parse(localStorage.getItem('favoriteItems'))
    :
    []
}

//a reducer is how we are able to dispatch this action(add to basket) into the data layout
export const reducer=(state, action) =>{
    switch(action.type){
        case "ADD_TO_BASKET":
            const quantityNumber=state.basket.findIndex( //will find just the first element that has the same id as the other products
                (BasketItem)=>BasketItem.id===action.item.id
            )
            if(quantityNumber>=0){
                const updatedBasket= state.basket.map((product)=>{
                    return product.id === action.item.id ?
                    {
                        ...product,
                        quantity:product.quantity+1
                    } 
                    :
                    product
                })
                localStorage.setItem('basket',JSON.stringify(updatedBasket))
                return {...state,basket:updatedBasket}
                
            }else {
                const newBasket=[...state.basket, action.item];
                localStorage.setItem('basket',JSON.stringify(newBasket))
                return {
                    ...state,
                    basket: [...state.basket, action.item] //the basket will be the initial value plus the new values returned from action.item
                }
            }
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex( //will find just the first element that has the same id as the other products
                (BasketItem)=>BasketItem.id===action.id
            )
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
                localStorage.setItem('basket',JSON.stringify(newBasket));
            }else
            {
                console.warn(`Can't remove product (id: ${action.id}) as it is not in basket!`)
            }
            return {
                ...state,
                basket:newBasket
            }
        case "CHANGE_PRODUCT_QUANTITY":
            const updatedQuantity= state.basket.map((product)=>{
                return product.id === action.item.id ?
                {
                    ...product,
                    quantity:action.item.quantity
                }
                :
                product
            })
            localStorage.setItem('basket',JSON.stringify(updatedQuantity))
            return {...state,basket:updatedQuantity}

        case "ADD_TO_FAVORITE":
        //    let existsFavoriteItem=state.favoriteItems.findIndex( //will find just the first element that has the same id as the other products
          //          (favoriteItem)=>favoriteItem.id===action.item.id
          //      )
         //   if(existsFavoriteItem<0){
            const updatedFavorite=[...state.favoriteItems, action.item];
            localStorage.setItem('favoriteItems',JSON.stringify(updatedFavorite))
            
            return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, action.item] //the basket will be the initial value plus the new values returned from action.item
            }
        //    }
         //   else return state

        case "REMOVE_FROM_FAVORITE":
                let favoriteItemIndex=state.favoriteItems.findIndex( //will find just the first element that has the same id as the other products
                    (FavoriteItem)=>FavoriteItem.id===action.item.id
                )
                let newFavorites=[...state.favoriteItems];
                if(favoriteItemIndex>=0){
                    newFavorites.splice(favoriteItemIndex,1);
                    localStorage.setItem('favoriteItems',JSON.stringify(newFavorites))

                }else
                {
                    console.warn(`Can't remove product (id: ${action.id}) as it is not in basket!`)
                }
                return {
                    ...state,
                    favoriteItems:newFavorites
                }
        default:
            return state;
    }
}

export default reducer;