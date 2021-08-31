import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from '../TripInfoItem';


const TripInfoCard = () => {
    return (
        <Card >
      <CardContent>
        <Typography  color="textSecondary" variant={'h3'} gutterBottom>
          Informações da Viagem
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <TripInfoItem infoNameTrip={'Nome:'} info={'Viagem para Marte'}/>
        <TripInfoItem infoNameTrip={'Planeta:'} info={'Marte'}/>
        <TripInfoItem infoNameTrip={'Data:'} info={'30/09/2021'}/>
        <TripInfoItem infoNameTrip={'Descrição:'} info={'Viagem para Visitar Marte'}/>
        <TripInfoItem infoNameTrip={'Duração em dias:'} info={'30'}/>
        
      </CardContent>
    </Card>
    )
}

export default TripInfoCard
