import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/dashboard/productdetails/:id' element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        } />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/registration' element={<Registration />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App