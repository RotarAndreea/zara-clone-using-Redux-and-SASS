import React from 'react'
 
const SideBar = (props) => {
  return (
      <div className='layout-categories'>
          <div className='row mt-2 mb-2 ml-2' onClick={props.hideSideBar}>
            X
          </div>
          <ul className='layout-categories__container row ml-2'>
              <li >WOMAN</li>
              <li className='pl-1'>MAN</li>
              <li className='pl-1'>KIDS</li>
              <li className='pl-1'>HOME</li>
              <li className='pl-1'>BEAUTY</li>
          </ul>
          <ul className='layout-categories-category__subcategory'>
            <div>SALE</div>
            <ul className='layout-categories-category__subcategory'>
              <li>BEST OF SALES</li>
              <li>BLAZERS</li>
              <li>DRESS</li>
              <li>SHIRTS</li>
              <li>BEST OF SALES</li>
              <li>BLAZERS</li>
              <li>DRESS</li>
              <li>SHIRTS</li>
              <li>BEST OF SALES</li>
              <li>BLAZERS</li>
              <li>DRESS</li>
              <li>SHIRTS</li>
              <li>BEST OF SALES</li>
              <li>BLAZERS</li>
              <li>DRESS</li>
              <li>SHIRTS</li>
            </ul>
          </ul>
      </div>
  )
}

export default SideBar