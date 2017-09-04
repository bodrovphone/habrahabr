import React, { Component } from 'react';
import {Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const image = this.props.user.picture.medium;
        const name = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`;
        const userName = this.props.user.login.username;
        const email = this.props.user.email;
        const registered = this.props.user.registered;
        const location = `${this.props.user.location.city}, ${this.props.user.location.state}`;
        return (
            <Panel>
                <Thumbnail src={image} alt="72x72">
                    <h3>{name}</h3>
                    <p>{userName}</p>
                    <hr/>
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
                </Thumbnail>
            </Panel>
            )
    }
}

