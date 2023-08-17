import React from 'react'

const SaveButton = (props) => {

  return (
    <svg onClick={props.handleClick} className="product-info__wishlist-icon" preserveAspectRatio="xMidYMid slice" width="24" heigth="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path fillRule="evenodd" clipRule="evenodd" d={props.isProductFavorite >=0 ? "M12 15.238L17 20V4H7v16l5-4.762z":  "M12 15.238L17 20V4H7v16l5-4.762zm-4 2.429l4-3.81 4 3.81V5H8v12.667z"}></path></svg>
  )
}

export default SaveButton