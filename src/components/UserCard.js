import React from 'react';
import {Panel, Thumbnail, Glyphicon, Jumbotron } from 'react-bootstrap';
import SCN from 'string-capitalize-name';

const UserCard = (props) => {
        const image = props.user.picture.large;
        const name = SCN(`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`);
        const userName = props.user.login.username;
        const email = props.user.email;
        const registered = props.user.registered;
        const location = `${props.user.location.city}, ${props.user.location.state}`;
        return (
            <Panel>
                <Jumbotron>
                    <Thumbnail src={image} alt="128x128">
                        <h3>{name}</h3>
                        <p>{userName}</p>
                    </Thumbnail>
                </Jumbotron>
                <p>
                  <Glyphicon glyph="envelope" />
                  {email}
                </p>
                <hr/>
                <p>
                  <Glyphicon glyph="calendar" />
                    {registered}
                </p>
                <hr/>
                <p>
                  <Glyphicon glyph="map-marker" />
                    {location}
                </p>
            </Panel>
            )
}

export default UserCard;

