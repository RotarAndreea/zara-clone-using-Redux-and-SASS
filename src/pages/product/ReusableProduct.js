import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { dress } from '../../DataProducts/WomanProducts/dress/Dress'
import NavigationLayout from '../../components/NavigationLayout';
import { useStateValue } from '../../StateProvider';
import SizesTableXS from './SizesTableXS';

const ReusableProduct = () => {
  const {id}=useParams(); // using the useParams hook from React Router to access the product id from the URL parameters and retreive the corresponding product data
  const product=dress.find((dress)=> dress.id === parseFloat(id));
  const [selectedSize,setSelectedSize]=useState('');
  const [state, dispatch] = useStateValue() //state will be the array with all the products(equal to {basket})
  const [showWarning, setShowWarning]=useState(false);
  const [showSizeTable, setShowSizeTable]=useState(false);

  const sizes=product.sizes.map(size=>(
    <li className='reusable-product_details-container_size-table-cell'
         style={{color: !size.quantity ? 'grey' : selectedSize === size.size ? 'white' : 'black', //if the quantity=0, color will be grey. If the quanity>0, verify if the button is choosed or not
                pointerEvents: !size.quantity && 'none',
                borderColor: !size.quantity && 'grey',
                backgroundColor: selectedSize === size.size && 'black',
                fontWeight: !size.quantity && 300
              }}
         key={size.size}
         onClick={()=>setSelectedSize(size.size)}
    >{size.size}
    </li>
  ))

  const addToBasket=(size)=>{ 
    const quantity=getQuantityBySize(size);
    const element=state.basket.find(obj=>obj.key === id+size)//find in the basket the object with the same id as the product clicked
    let quantityAddedToCart=1;
    if(element){
      quantityAddedToCart=element.quantity //i save in this variable the updated quantity of the product added to cart
    }
    if(quantity>0  && quantityAddedToCart<quantity){ //the quantity of the choosed size should be >0 and the maximum quantity that can be added to cart, of this product, should be < size quantity
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            key:id+size, //every product should have a unique identifier
            id:product.id,
            title:product.title,
            image:product.image,
            price:product.price,
            rating:product.rating,
            isFavorite:product.isFavorite,
            quantity:1, // the quantity that should be added to cart
            size:size,
            totalQuantity:getQuantityBySize(size) //total quantity for a product depending on the size
        },
      })
        setShowWarning('Product added to cart');
        setTimeout(() => {
            setShowWarning(false);
        }, 1000);
    }
    else
      if(quantityAddedToCart>=quantity){
        setShowWarning('Not enought quantity');
        setTimeout(() => {
          setShowWarning(false);
      }, 1000);
    }
  }

  function getQuantityBySize(size){
    const sizeObj=product.sizes.find(obj=>obj.size === size);
    if (sizeObj){
      return sizeObj.quantity;
    }
    return 0;
  }

  const addProductFromSizesTableUnderXs=(size)=>{
    setSelectedSize(size);
    addToBasket(size);
    setShowSizeTable(false);
  }
  const addProductFromSizesTableOverXs=(size)=>{
    if(!selectedSize){ //if no size is chosen, do nothing but return a warning
      setShowWarning('YOU MUST CHOOSE A SIZE');
      setTimeout(() => {
          setShowWarning(false);
      }, 1000);
      return
    }
    addToBasket(size);
  }

  return (
    <div className='fullHeight-column-container'>
      <NavigationLayout/>
      <div className='reusable-product-container'>
      {showWarning &&
            <div className='warningMessage'>
              {showWarning}
            </div>
      }
        <div className='reusable-product-container-grid'>
          <div className='display-none__md-width extra-detail'>
           <div className='extra-detail_box'>
              <div className='extra-detail_title'>COMPOSITION, CARE & PACKAGING</div>
              <div className='extra-detail_title'>COMPOSITION</div>
              <div className='extra-detail_long-text'>We work through monitoring programs to ensure our products are manufactured in compliance with our social, environmental, safety and health standards. To evaluate compliance, we have developed an audit program and continuous improvement plans.</div>
           </div> 
          </div>
          <div className='reusable-product-container_image-container'>
            <img src={product.image} alt='product' className='reusable-product-container_product-image'/>
          </div>
          <div className='reusable-product_details-container'>
            <div className='reusable-product_details-container_sections'>
              <section className='reusable-product_details-container_section'>
                <div>{product.title}</div>
                <div>{product.price} EUR</div>
                <div className='reusable-product_details-container_tax-message'>TVA included / delivery excluded</div>
              </section>
              <section className='hide-under-720px reusable-product_details-container_section'>
                <div>Choose a size</div>
                <ul className='reusable-product_details-container_size-table-grid'>
                  {sizes}
                </ul>
              </section>
              <button className='hide-under-720px reusable-product_details-container_button'
                      onClick={()=>addProductFromSizesTableOverXs(selectedSize)}
              >ADD</button>

              <button className='hide-over-720px reusable-product_details-container_button'
                      onClick={()=>setShowSizeTable(true)}
              >ADD</button>

              { showSizeTable &&
                    <SizesTableXS product={product}
                                  handleAddProductFromSizesTableUnderXs={addProductFromSizesTableUnderXs}
                    />
                    
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReusableProduct