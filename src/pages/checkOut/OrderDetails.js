import React from 'react'

const OrderDetails = (props) => {

    const product=props.formData.productsDetails.map(product=>(
        <ul className='order-details__grid-products order-details__grid-products__product-design'>
            <li>
                <img className="checkout-form__media-image"  src={product.image} alt={`${product.title}`} />
            </li>
            <li>{product.title}</li>
            <li>{product.size}</li>
            <li>{product.quantity}</li>
            <li>{product.price} eur</li>
        </ul>
    ))
  return (
    <>
        <div className='layout-checkout-margins_left-right order-details' >
        <div className='order-details__title'>Order processed</div>
        <div>Thank you for your order. If you want to receive an electronic ticket, please press the button.</div>
        <div className='checkout-content-delivery-group'>
            <ul> 
                <li>Delivery method: <b> {props.deliveryMethod}</b></li>
                <li>Shipping method: <b> {props.formData.shippingMethod}</b></li>
            </ul>
            <ul className='mb-3'> 
                <li>State: <b> {props.actualAddress.state}</b></li>
                <li>City: <b> {props.actualAddress.city}</b></li>
                <li>Address: <b> {props.actualAddress.address}</b></li>
            </ul>
            <div className='order-details-products'>
                <ul className='order-details__grid-products'>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Size</li>
                    <li>Quantity</li>
                    <li>Amount</li>
                </ul>
                <div className='order-details-products__table'>
                    {product}
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default OrderDetails