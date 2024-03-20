import React from 'react'
import Products from '../components/Products'
import Banner from '../components/Banner'
import { useAuthContext } from '../components/context/AuthContext'
import SmallBox from '../components/SmallBox'



export default function Home() {
  const {user} = useAuthContext()

  return (
    <>
    <Banner />
    <Products />
    {user && (<SmallBox />)}
    </>
  )
}
