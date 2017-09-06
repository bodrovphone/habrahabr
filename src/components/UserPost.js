import React from 'react';
import {Panel, Thumbnail, Glyphicon } from 'react-bootstrap';
import SCN from 'string-capitalize-name';

const UserPost = (props) => {
        var random = Math.ceil(Math.random() * 20);
        return (
            <Panel>
                    <Thumbnail src={`https://unsplash.it/800/800?image=${random}`} alt="128x128">
                        <p>{props.post.body}</p>
                    </Thumbnail>
                <p>
                  <Glyphicon glyph="user" />
                   Posted by {SCN(`${props.users[random].name.first} ${props.users[random].name.last}`)}
                </p>
            </Panel>
            )
}

export default UserPost;

