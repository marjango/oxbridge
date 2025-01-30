import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Homepage from './pages/Homepage/homepage'
import Catalog from './pages/Catalog/catalog'
import Seasonal from './pages/Seasonal/Seasonal'
import Feedback from './pages/Feedback/Feedback'
import ProductPage from './pages/Catalog/ProductPage';
export default function Routers() {
  return (
        <Routes>
            <Route element={<Navigate to="/home" replace />}/>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Catalog' element={<Catalog/>} />
            <Route path='/Feedback' element={<Feedback/>} />
            <Route path='/Seasonal' element={<Seasonal/>} />
            <Route path="/product/:id" element={<ProductPage />} />
            {/* <Route path='/Order' element={<Order/>} /> */}
        </Routes>
)
}