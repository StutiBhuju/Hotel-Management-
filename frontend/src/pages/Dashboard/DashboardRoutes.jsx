import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Explore from './Explore'
import DashBoardLayout from './DashboardLayout'
import MyBookings from '../MyBookings'


const DashBoardRoutes = ({user,setUser}) => {
  return (
    <>
    <Routes>
        <Route element={<DashBoardLayout user={user} setUser={setUser} />}>
           <Route index element={<Explore />}/>
           <Route path='/bookings' element={<MyBookings />} />
           <Route path='/request' element={<h3>Requesting Blood</h3>}/>

          
        </Route>
    </Routes>
    
    </>
  )
}

export default DashBoardRoutes