import React from 'react'
import './styles.scss'
import DressImg from '../../media/images/zara-dress.jpg'
import NavigationLayout from '../../components/NavigationLayout'

const Home = () => {
  
  return (
    <>
    <div className='cover'>
        <img className='abs-image' src={DressImg} alt='cover-img'></img>
        <NavigationLayout/>
    </div>
    </>
  )
}

export default Home

/*
  <div className='container'>
            <span className='text-blue-light-2 text-hover-yellow'>
              hi
            </span>
            <button className='btn-outlined-purple text-hover-white'>button1</button>
            <button className='btn-outlined-orange text-orange text-hover-white'>button2</button>
            <button className='btn'>button2</button>
            <button className='btn-complement-purple '>click me</button>
            <h2 className='mb-2'>Grid system</h2>
            <div className='row gap-2 justify-center'>
                <div className='col-12-xs col-5-sm col-3-xl'>
                  <div className='card'>
                    <div className='card-title'>Hello</div>
                    <p className='card-body'>dfbbf fdvdf dfgv dfvdgv</p>
                  </div>
                </div>
                <div className='col-12-xs col-5-sm col-3-xl'>
                  <div className='card'>
                    <div className='card-title'>Hello</div>
                    <p className='card-body'>dfbbf fdvdf dfgv dfvdgv</p>
                  </div>
                </div>
                <div className='col-12-xs col-5-sm col-3-xl'>
                  <div className='card'>
                    <div className='card-title'>Hello</div>
                    <p className='card-body'>dfbbf fdvdf dfgv dfvdgv</p>
                  </div>
                </div>
                <div className='col-12-xs col-5-sm col-3-xl'>
                  <div className='card'>
                    <div className='card-title'>Hello</div>
                    <p className='card-body'>dfbbf fdvdf dfgv dfvdgv</p>
                  </div>
                </div>
                
            </div>
          </div>

*/