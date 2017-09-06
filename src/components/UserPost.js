import React from 'react';
import {Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

const UserPost = (props) => {
        const textBody = props.post.body;
        return (
            <Panel>
                    <Thumbnail src={'image'} alt="128x128">
                        <p>text</p>
                    </Thumbnail>
                <p>
                  <Glyphicon glyph="user" />
                  text
                </p>
            </Panel>
            )
}

export default UserPost;

