import React from 'react'

import CardHome from '../components/HomeCard'

function Home() {
  return (
    <div className='home'>
        <h2>Shop</h2>

        <div className="container-cards">
            <CardHome />
            <CardHome />
            <CardHome />
        </div>
    </div>
  )
}

export default Home