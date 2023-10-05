import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ZaraImage from '../../media/images/zaraBlack.png'
import { useStateValue } from '../../StateProvider';

const CheckOut = () => {
    const [{basket}] =useStateValue() ; //eslint-disable-line no-unused-vars
    const [deliveryMethod, setDeliveryMethod]=useState('home-delivery');
    const [showLateralBar, setShowLateralBar]=useState(false);

    const [formData, setFormData]=React.useState({
        email:"",
        deliveryPlace:'home-delivery',
        address:'',
        numberOfArticles:basket.length,
        totalSum:'',
        productsDetails:{basket},
        shippingMethod: 'normal-delivery'
    })

    function handleChange(event){
        const {name,value}=event.target
            setFormData(prevData=>{
                return{
                    ...prevData,
                    [name]: value  //event.target.name:event.target.value ; pun in setUseState valoarea(textul)
                }
            })
            console.log(formData)
      }

    const product=basket.map(cartProduct=>(
        <div className='checkout-form__carousel-item'
             key={cartProduct.key}
        >
                <div className='checkout-form__media'>
                    <img className="checkout-form__media-image"  src={cartProduct.image} alt={`${cartProduct.title}`} />
                </div>
        </div>
    ))

  return (
    <>
        <div className='layout'>
            <header className='layout-header'>
                <div className='layout-header-main'>
                    <div className='layout-header__left'>
                        <div className='layout-header__logo-container'>
                            <div className='layout-header-checkout__logo-image__container'>
                                <a href='/'>
                                    <img src={ZaraImage} alt='ZARA' className='layout-header__logo-icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='layout-header__right'>
                        <div className='layout-header__links'>
                            <Link className='layout-header__link' to="/cart">back to Cart</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className='checkout-content layout-checkout-margins_left-right'>
                <div className='checkout-content-header__info'>Where would you like to receive the order ?</div>

                <div className='checkout-content-delivery-group'>
                    <div className='checkout-content-delivery-group__options'>
                        <div className='checkout-content-delivery-group__option'
                             onClick={()=>setDeliveryMethod('home-delivery')}
                             style={{fontWeight: deliveryMethod ==='home-delivery'? 600: 'lighter'}}
                        >
                            <img className="selection-box__icon" 
                                 src={ deliveryMethod ==='home-delivery' ? "https://static.zara.net/static/images/deliverymethods/24-box-active.svg" : "https://static.zara.net/static/images/deliverymethods/box.svg"} alt="Domiciliu"
                            />
                            <div id='home-delivery'>home delivery</div>
                        </div>
                        <div className='checkout-content-delivery-group__option'
                             id='zara-store'
                             onClick={()=>setDeliveryMethod('zara-store')}
                        >
                            <img className="selection-box__icon" 
                                 src={deliveryMethod ==='zara-store' ? "https://static.zara.net/static/images/deliverymethods/24-building-active.svg" : "https://static.zara.net/static/images/deliverymethods/Icon-Shop.svg"} alt="Colectare"
                            />
                            <div style={{fontWeight: deliveryMethod ==='zara-store'? 600: 'lighter'}}>zara store</div>
                        </div>

                        <div className='checkout-content-delivery-group__option'
                             onClick={()=>setDeliveryMethod('delivery-point')}
                             style={{fontWeight: deliveryMethod ==='delivery-point'? 600: 'lighter'}}
                        >
                            <img className="selection-box__icon" 
                                 src={deliveryMethod === 'delivery-point' ? "https://static.zara.net/static/images/deliverymethods/24-location-active.svg" : "https://static.zara.net/static/images/deliverymethods/Icon-Drop.svg"} alt="punct de livrare"
                            />
                            <div id='delivery-point'>delivery point </div>
                        </div>
                    </div>

                    <div className='checkout-content-delivery-group__address'>
                           <div>Strada Calea Principala 232</div> 
                           <div className='checkout-content-delivery-group__address-modify'
                                onClick={()=>setShowLateralBar(true)}
                           >Modify</div>
                           <div className='full-area' style={{display: showLateralBar ? 'flex' : 'none'}}>
                                <div className='full-area-hidden'/>
                                <div className='lateral-box'>
                                    <div onClick={()=>setShowLateralBar(false)} className='lateral-box__close-button'>X</div>
                                    <div className='lateral-box__title'>selectati locul livrarii</div>
                                    <div className='lateral-box__address-container'>

                                    </div>
                                    <div className='lateral-box__add-address'>
                                        add a new address
                                    </div>
                                </div>
                           </div>
                           
                    </div>

                    <div className='checkout-form'>
                        <div className='checkout-form__title'>Articles</div>
                        <div className='checkout-form__carousel'>
                            <div className='checkout-form__carousel-items'>
                               {product}
                            </div>
                        </div>
                        <div className='checkout-form__progress-bar'>
                            <div className='checkout-form__progress-bar-completed'>

                            </div>
                        </div>
                        <div className='checkout-form__options'>
                                <div className='checkout-form__option'>
                                    <div className='checkout-form__option-delivery-details'>
                                        <label className='radius-button__container'>
                                            Thursday 05, OCTOBER
                                            <input type="checkbox"
                                                   checked={formData.checked}
                                                   onChange={handleChange}
                                                   name="shippingMethod"
                                                   value='standard-delivery'

                                            />
                                            <span className='checkmark'></span>
                                        </label>
                                        <div>free</div>
                                    </div>
                                    <div className='checkout-form__option-delivery-text'>
                                        Expediere gratuită începând cu 230 LEI pentru articolele fără reducere
                                    </div>
                                </div>
                                <div className='checkout-form__option'>
                                    <div className='checkout-form__option-delivery-details'>
                                            <label className='radius-button__container'>
                                                Friday 06, OCTOBER
                                                <input type="checkbox" 
                                                       checked={formData.checked}
                                                       onChange={handleChange}
                                                       value='urgent-delivery'
                                                       name="shippingMethod"
                                                />
                                                <span className='checkmark'></span>
                                            </label>
                                            <div>9,99 eur</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>              
        </div> 
    </>
  )
}

export default CheckOut