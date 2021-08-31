// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import {BASE_URL} from '../constants/urls'
import React from "react"
import PageTitle from '../components/PageTitle'
import CandidatesList from "../components/PageTrip/CandidatesList"
import TripInfo from "../components/PageTrip/TripInfoCard"
import {ContentContatiner} from './TripStyled'


const TripDetailsPage = () => {
    // const [trips, setTrips] = useState({})
    // const getTripDetail = (id) => {
    //     axios.get(`${BASE_URL}/trip/${id}`, {
    //         headers: {
    //             auth: localStorage.getItem('token')
    //         }
    //     })
    //     .then(()=>{})
    //     .catch(() => alert(err.response.data))
    // }
    // useEffect(()=>{
    //     getTripDetail()
    // },[])

    return (
        <div>
            <PageTitle title={'Detalhes da Viagem'} />
            <ContentContatiner>
                <TripInfo />
                <CandidatesList />
            </ContentContatiner>


        </div>
    )
}

export default TripDetailsPage
