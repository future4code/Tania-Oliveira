import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const CandidateItem = () => {
    return (
        <div>
            <ListItem>
            <ListItemText
              primary="Candidato 1"
            />
            <ListItemSecondaryAction>
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
              <IconButton>
                <ThumbDownIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
    )
}

export default CandidateItem
