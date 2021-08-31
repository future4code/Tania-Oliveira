import React from 'react'
import PageTitle from '../components/PageTitle'
import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'


const ListTripsPage = () => {
    return (
        <div>
            <PageTitle title={'Lista de Viagens'} />
            <Link to={'/admin/trips/:id'} >
                <Button variant={'contained'} color={'primary'}>Criar Viagem</Button>
            </Link>
            <List component="nav" aria-label="secondary mailbox folders">
                <Link to={'/admin/trips/create'}>
                    <ListItem button>
                        <ListItemText primary="Viagem Para Marte" />
                    </ListItem>
                </Link>
                <Link to={'/admin/trips/create'}>
                    <ListItem button>
                        <ListItemText primary="Viagem Para a Lua" />
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

export default ListTripsPage
