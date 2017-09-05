import React from 'react';
import UserCard from './UserCard';
import {PanelGroup, Grid} from 'react-bootstrap';

const Cards = (props) => {
        return (
        	<Grid>
	            <PanelGroup>
	                {
	                    props.users.map((user, id) => {
	                        return <UserCard user={user} key={id}/>
	                    })
	                }
	            </PanelGroup>
            </Grid>
            )
};

export default Cards;