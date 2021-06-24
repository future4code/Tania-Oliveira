import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import Feed from '../pages/FeedPage/Feed'
import Post from '../pages/PostPage/Post'
import Error from '../pages/ErrorPage/Error'


const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login setRightButtonText={setRightButtonText}/>

            </Route>
            <Route exact path='/register'>
                <Register setRightButtonText={setRightButtonText}/>

            </Route>
            <Route exact path='/feed'>
                <Feed />

            </Route>
            <Route exact path='/posts/:id'>
                <Post />

            </Route>
            <Route exact path=''>
                <Error />

            </Route>
        </Switch>
    )
}

export default Router
