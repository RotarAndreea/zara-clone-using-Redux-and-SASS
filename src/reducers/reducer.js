//the data layout

//create the initial state
export const initialState={
    basket:[],
    favoriteItems:[]
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
                return {...state,basket:updatedBasket}
                
            }else {
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
            return {...state,basket:updatedQuantity}
        case "ADD_TO_FAVORITE":
        //    let existsFavoriteItem=state.favoriteItems.findIndex( //will find just the first element that has the same id as the other products
          //          (favoriteItem)=>favoriteItem.id===action.item.id
          //      )
         //   if(existsFavoriteItem<0){
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