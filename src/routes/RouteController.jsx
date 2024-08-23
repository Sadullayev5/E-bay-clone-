import React  from 'react'
import { lazy , Suspense } from 'react'
const Home = lazy(() => import('./Home/Home'))
const Login = lazy(() => import('./login/Login'))
const All = lazy(() => import('./Allproducts/All'))
const SinglePage = lazy(() => import('./singlepage/SinglePage'))
import { Route , Routes } from 'react-router-dom'


const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={<Suspense fallback={<div>Loading...</div>}><Home/></Suspense>} />
        <Route path="login" element={<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>} />
        <Route path="all" element={<Suspense fallback={<div>Loading...</div>}><All/></Suspense>} />
        <Route path="singlepage/:id" element={<Suspense fallback={<div>Loading...</div>}><SinglePage/></Suspense>} />
    </Routes>
  )
}

export default RouteController