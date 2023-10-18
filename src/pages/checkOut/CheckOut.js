import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ZaraImage from '../../media/images/zaraBlack.png'
import { useStateValue } from '../../StateProvider';
import LateralBox from './LateralBox';
import OrderDetails from './OrderDetails';

const CheckOut = () => {
    const [state,dispatch] =useStateValue() ; 
    const [deliveryMethod, setDeliveryMethod]=useState('home-delivery');
    const [showLateralBar, setShowLateralBar]=useState(false);
    const [showOrderDetails, setShowOrderDetails]=useState(false);
    const [actualAddressId, setActualAddressId]=useState(state.addressInfo.length >0 ? state.addressInfo[0].id : 0);
    const addressObject=[...state.addressInfo];
    const actualAddress=actualAddressId !==0 && findCurrentAddress(actualAddressId);

    const totalSum=state.basket?.reduce((total,product)=>{
        return total+product.price*product.quantity;
      },0) // 0 is for the initial value of "total" variable

    const totalProducts=state.basket?.reduce((total,product)=>{
        return total+product.quantity;
      },0)

    const [formData, setFormData]=React.useState({
        numberOfArticles:totalProducts,
        totalSum:totalSum.toFixed(2),
        productsDetails:state.basket,
        shippingMethod: 'standard-delivery'
    })

    const finalSum=()=>{
        if(formData.shippingMethod === 'urgent-delivery')
            return totalSum+9.99;
        else if (formData.shippingMethod === 'standard-delivery' && totalSum > 40)
            return totalSum;
        else 
            return totalSum + 4.99;
    }

    function findCurrentAddress(id){ //return the current address as an object
        let currentAddressIndex=addressObject.findIndex( //will find just the first element that has the same id as the other products
                    (address)=>address.id===id
        );
        return {
            state:addressObject[currentAddressIndex].state,
            city:addressObject[currentAddressIndex].city,
            address:addressObject[currentAddressIndex].address
        }
    }   
    

    function handleCurrentAddressId(id){
        setActualAddressId(id);
        setShowLateralBar(false);
      }

    const product=state.basket.map(cartProduct=>(
        <div className='checkout-form__carousel-item'
             key={cartProduct.key}
        >
                <div className='checkout-form__media'>
                    <img className="checkout-form__media-image"  src={cartProduct.image} alt={`${cartProduct.title}`} />
                </div>
        </div>
    ))

    function sendOrder(){
        setShowOrderDetails(true);
        dispatch({
            type: 'CLEAN_BASKET'         
        })
    }

    const onChangeChecked=(event) =>{
        const {name,value}=event.target
            setFormData(prevData=>{
                return{
                    ...prevData,
                    [name]: value  //event.target.name:event.target.value ; pun in setUseState valoarea(textul)
                }
            })
    }

  return (
    <>
        <div className='layout layout-cart__content'>
            <header className='layout-header' style={{backgroundColor:'white'}}>
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

            {!showOrderDetails ? 
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
                            { actualAddressId !==0 ? 
                                <>
                                    <div>{actualAddress.state}</div> 
                                    <div>{actualAddress.city}</div> 
                                    <div>{actualAddress.address}</div> 
                                </>
                                : 
                                <div>'Please enter an address'</div>
                            } 
                           <div className='checkout-content-delivery-group__address-modify'
                                onClick={()=>setShowLateralBar(true)}
                           >Modify</div>
                           <LateralBox showLateralBar={showLateralBar} 
                                       handleShowLateralBar={setShowLateralBar} 
                                       handleCurrentAddressId={handleCurrentAddressId}
                                       actualAddressId={actualAddressId}
                                       changeActualAddressId={setActualAddressId}
                           />
                           
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
                                                   checked={formData.shippingMethod === 'standard-delivery'}
                                                   onChange={(event)=>onChangeChecked(event)}
                                                   name="shippingMethod"
                                                   value='standard-delivery'

                                            />
                                            <span className='checkmark'></span>
                                        </label>
                                        <div>{formData.totalSum > 40 ? 'free':'4.99 eur'}</div>
                                    </div>
                                    <div className='checkout-form__option-delivery-text'>
                                        Free shipping starting from 40 euros for items without discounts
                                    </div>
                                </div>

                                <div className='checkout-form__option'>
                                    <div className='checkout-form__option-delivery-details'>
                                            <label className='radius-button__container'>
                                                Friday 06, OCTOBER
                                                <input type="checkbox" 
                                                       checked={formData.shippingMethod === 'urgent-delivery'}
                                                       onChange={(event)=>onChangeChecked(event)}
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
            :
            <OrderDetails formData={formData} actualAddress={actualAddress} deliveryMethod={deliveryMethod} finalSum={()=>finalSum()}/>
            }
        </div> 
        {!showOrderDetails &&
            <div className='layout-cart__checkout'>
                <div className='layout-cart__checkout-order-total-tables__total'>
                    <span className='layout-cart__checkout-order-total-tables__total-name'>
                        Total 
                    </span>
                    <span className='layout-cart__checkout-order-total-tables__total-amount'>
                       {finalSum().toFixed(2)} eur
                    </span>
                </div>
                
                <div className='layout-cart__checkout-order-total-tables__continue-container'
                     onClick={()=>sendOrder()}
                > 
                    <div className='layout-cart__checkout-order-total-tables__continue'>
                        Send 
                    </div>
                </div>
            </div> 
        }
    </>
  )
}

export default CheckOut