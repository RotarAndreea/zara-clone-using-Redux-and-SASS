import React, { useState } from 'react'
import { AddressForm } from './AddressForm';
import { useStateValue } from '../../StateProvider';

const LateralBox = (props) => {
    const [showPersonalInfoForum, setShowPersonalInfoForum]=useState(false);
    const [state,dispatch] = useStateValue(); //state will be the array with all the products(equal to {basket})

    function deleteAddress(event, id){
        event.stopPropagation();
        if(props.actualAddressId === id) //if current selected address is deleted, the actual address will be empty.
            props.changeActualAddressId(0);
        dispatch({
            type: 'DELETE_ADDRESS',
            id:id,
           
        })
    }

    const addresses=state.addressInfo.map(address=>(
        <div className='lateral-box__address-container'
             key={address.id}
             city={address.city}
             onClick={()=>props.handleCurrentAddressId(address.id)}
        >
            <div>{address.state}</div>
            <div>{address.city}</div>
            <div>{address.address}</div>
            <div className='lateral-box__address-container__close-button'
                 onClick={(event)=>deleteAddress(event,address.id)}
            >X</div>
        </div>

    ))

  return (
    <div className='full-area' style={{display: props.showLateralBar ? 'flex' : 'none'}}>
        <div className='full-area-hidden'/>
        <div className='lateral-box'>
            <div onClick={()=>props.handleShowLateralBar(false)} className='lateral-box__close-button'>X</div>
            <div className='lateral-box__title'>selectati locul livrarii</div>
            {
                !showPersonalInfoForum ? 
                <>
                    {addresses}
                    <div className='lateral-box__add-address'
                        onClick={()=>setShowPersonalInfoForum(true)}
                    >
                            add a new address
                    </div>
                </>
                :
                <>
                    <div className='lateral-box__address-forum'>
                        <AddressForm handleShowForum={()=>setShowPersonalInfoForum}/>
                    </div>
                    <div className='lateral-box__add-address'
                            onClick={()=>setShowPersonalInfoForum(false)}
                    >
                            close
                    </div>
                </>
            }
        
        </div>
    </div>
  )
}

export default LateralBox