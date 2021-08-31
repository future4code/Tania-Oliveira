import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import Feed from '../pages/FeedPage/Feed'
import Post from '../pages/PostPage/Post'
import Error from '../pages/ErrorPage/Error'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/'>
                <Login/>

            </Route>
            <Route exact path='/register'>
                <Register/>

            </Route>
            <Route exact path='/feed'>
                <Feed/>

            </Route>
            <Route exact path='/post/:id'>
                <Post/>

            </Route>
            <Route exact path=''>
                <Error/>

            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router
