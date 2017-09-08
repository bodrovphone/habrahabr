import React from 'react';
import UserPost from './UserPost';
import {PanelGroup, Grid} from 'react-bootstrap';
import Waypoint from 'react-waypoint';

class Posts extends React.Component {
        render () {
        if (Array.isArray(this.props.posts)) {
        return (
            <Grid>
                <PanelGroup>
                    {
                        this.props.posts.map((post, id) => {
                            if (id === this.props.posts.length - 2) {
                                return  <div>
                                        <Waypoint onEnter={() => {console.log( 'aloha')}} key={id+40} />
                                        <UserPost post={post} key={id} users={this.props.users} />
                                        </div>
                            }
                            return <UserPost post={post} key={id} users={this.props.users} />
                        })
                    }
                </PanelGroup>
            </Grid>
            )} else {
            return (
                <div>This is a git image loading posts</div>
                )
        }
    }
};

export default Posts;