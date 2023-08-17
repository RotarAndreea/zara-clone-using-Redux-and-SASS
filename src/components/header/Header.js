import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import ZaraImage from '../../media/images/zaraBlack.png'

const Header = (props) => {
    const [{basket}]=useStateValue();

    const totalProducts=basket?.reduce((total,product)=>{
        return total+product.quantity;
      },0)

  return (
    <header className='layout-header ' style={{backgroundColor: props.whiteBackground ? 'white' : 'none'}}>
        <div className='layout-header-main'>
            <div className='layout-header__left'>
                <div className='layout-header__logo-container'>
                    <div className='layout-header__icon' onClick={props.changeVisibility}>|||</div>
                    <div className='layout-header__logo-image__container'>
                        <a href='/'>
                            <img src={ZaraImage} alt='ZARA' className='layout-header__logo-icon'/>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className='layout-header__right'>
                <div className='layout-header__links'>
                    <Link className='layout-header__link' to="/products">Products</Link>
                    <Link className='layout-header__link' to="/cart">Cart ({totalProducts})</Link>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header