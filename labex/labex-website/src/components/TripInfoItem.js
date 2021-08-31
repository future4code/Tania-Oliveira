import React from 'react'
import { Typography } from '@material-ui/core'

const TripInfoItem = (props) => {
    return (
        <div>
            <Typography variant={'body2'}>
               <strong> {props.infoNameTrip}</strong>: {props.info}
            </Typography>
        </div>
    )
}

export default TripInfoItem
