import { Outlet } from 'react-router-dom'
import Header from './Header'
import React  from 'react';

function Home() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    </>
  )
}

export default Home