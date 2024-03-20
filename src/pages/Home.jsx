import React from 'react'
import Products from '../components/Products'
import Banner from '../components/Banner'
import SmallBox from '../components/SmallBox'

export default function Home() {
  return (
    <div className='relative'>
    <Banner />
    <Products />
    <SmallBox />
    </div>
  )
}
