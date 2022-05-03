import React from 'react'

import { useSelector } from 'react-redux';

import CardHome from '../components/HomeCard'



function Home() {

  const store = useSelector(store => { return store })
  
  const products = Object.keys(store.products).map(key => 
    <CardHome product={store.products[key]} productKey={key}  key={key} />
  )


  return (
    <div className='home'>
        <h2>Shop</h2>

        <div className="container-cards">
          {products}
        </div>
    </div>
  )
}

export default Home