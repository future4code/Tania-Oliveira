import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/CreateTripListPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import TripDetailsPage from '../pages/TripDetailsPage'
import CreateTripPage from '../pages/ApplicationFormPage'
import ErrorPage from '../pages/ErrorPage'
import { AppContainer } from './routesStyled'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';


const RoutesManager = () => {
    return (
      <AppContainer>
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/trips/list'}>
          <ListTripsPage />
        </Route>
        <Route exact path={'/trips/application'}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={'/login'}>
          <LoginPage />
        </Route>
        <Route exact path={'/admin/trips/list'}>
          <AdminHomePage />
        </Route>
        <Route exact path={'/admin/trips/create'}>
          <CreateTripPage />
        </Route>
        <Route exact path={'/admin/trips/:id'}>
          <TripDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
    </MuiPickersUtilsProvider>
    </AppContainer>
    )
}

export default RoutesManager
