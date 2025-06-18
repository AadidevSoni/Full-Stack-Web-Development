import React from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recomended from './Recomended/Recomended'
import './index.css'
import Sidebar from './Sidebar/Sidebar'

const ECommerceWebsite = () => {
  return <>
    <Sidebar />
    <Navigation />
    <Recomended />
    <Products />
  </>
}

export default ECommerceWebsite