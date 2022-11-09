import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Auth from './pages/Auth/Auth'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Home from './pages/Home/Home'
import Questions from './components/HomeMainbar/Questions'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestions />}/>
            <Route path='/Tags' element ={<Tags/>}/>
            <Route path='/User' element ={<Users/>}/>
            <Route path='/Users/:id' element ={<UserProfile/>}/>
        </Routes>
    )
}

export default AllRoutes