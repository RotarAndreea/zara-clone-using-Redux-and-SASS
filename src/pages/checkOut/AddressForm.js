import React from 'react'
import { useStateValue } from '../../StateProvider';
import { nanoid } from 'nanoid';

export const AddressForm = (props) => {
    const [_, dispatch] = useStateValue(); //eslint-disable-line no-unused-vars
    const [formData, setFormData]=React.useState({
        id: nanoid(),
        state:"",
        city:"",
        address:"",
    })

    function handleChange(event){
        const {name,value}=event.target
            setFormData(prevData=>{
                return{
                    ...prevData,
                    [name]: value
                }
            })
      }

      const addAddress=(event)=>{
        event.preventDefault();
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_ADDRESS',
            item:{
                id:formData.id,
                state:formData.state,
                city:formData.city,
                address:formData.address,
            },
        })
        props.handleShowForum(false);
    }

  return (
    <form   className='address-form' 
            onSubmit={(e)=>addAddress(e)}
    >
        <label className='address-form__title'>State/Province</label>
        <input
            type="text"
            placeholder='State/Province'
            className='form--input'
            onChange={handleChange}
            name="state" //numele trebuie sa fie ca cel din state
            value={formData.state} //trebuie sa ii punem valoarea ca cea din state
            required
        />

        <label className='address-form__title'>City</label>
        <input
            type="text"
            placeholder='City'
            className='form--input'
            onChange={handleChange}
            name="city"
            value={formData.city}
            required

        />
        <label className='address-form__title'>Address</label>
        <input
            type="text"
            placeholder='Address'
            className='form--input'
            onChange={handleChange}
            name="address"
            value={formData.address}
            required
        />
        <button type='submit'>save address</button>
    </form>
  )
}
