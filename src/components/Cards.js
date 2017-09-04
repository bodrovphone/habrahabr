import React from 'react';
import UserCard from './UserCard';
import {Jumbotron} from 'react-bootstrap';

const Cards = (props) => {
        return (
            <Jumbotron>
                {
                    props.users.map((user, id) => {
                        return <UserCard user={user} key={id}/>
                    })
                }
            </Jumbotron>
            )
};

export default Cards;