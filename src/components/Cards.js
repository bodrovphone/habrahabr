import React from 'react';
import UserCard from './UserCard';
import {PanelGroup, Grid} from 'react-bootstrap';

class Cards extends React.Component {
        render () {
        if (Array.isArray(this.props.users)) {
        return (
        	<Grid>
	            <PanelGroup>
	                {
	                    this.props.users.map((user, id) => {
	                        return <UserCard user={user} key={id}/>
	                    })
	                }
	            </PanelGroup>
            </Grid>
            )} else {
            return (
                <div>This is a git image loading</div>
                )
        }
    }
};

export default Cards;