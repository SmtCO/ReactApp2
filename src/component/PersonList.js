import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PersonList = (props) => {
    const { people } = props;
    return (
        <div>
            <List component='nav'>
                {
                    people.map(item => {
                        return (
                            <ListItem key={item.id}>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default PersonList;