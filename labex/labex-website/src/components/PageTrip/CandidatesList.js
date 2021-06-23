import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import CandidateItem from '../CandidateItem';



const CandidatesList = () => {
  return (
    <Card >
      <CardContent>
        <Typography color="textSecondary" variant={'h3'} gutterBottom>
          Lista De Candidatos
        </Typography>
        <List>
          <CandidateItem/>
          <CandidateItem/>
          <CandidateItem/>
          <CandidateItem/>
        </List>
      </CardContent>
    </Card>
  )
}

export default CandidatesList
