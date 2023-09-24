import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'

import {Home , About, Contact,User,Product } from './Components/index.js'
import { GetProductDetails } from './Components/Product/Product.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//     {
//       path: '',
//       element : <Home/>
//     },
//     {
//       path : 'about',
//       element: <About/>
//     },
//     {
//       path : 'contact',
//       element : <Contact/>
//     }
//   ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:userId' element={<User/>} />
      <Route path='/product' loader={GetProductDetails} element={<Product/>} />
  </Route>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
