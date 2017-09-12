import React from 'react';
import UserPost from './UserPost';
import {PanelGroup, Grid} from 'react-bootstrap';
import Waypoint from 'react-waypoint';

const Posts = (props) => {
        if (Array.isArray(props.posts)) {
        return (
            <Grid>
                <PanelGroup>
                    {
                        props.posts.map((post, id) => {
                            if (id === props.posts.length - 2) {
                                return  <div key={id+"unique"}>
                                            <Waypoint onLeave={(props.loadMorePosts)}  />
                                            <UserPost post={post} key={id} users={props.users} />
                                        </div>
                            }
                            return <UserPost post={post} key={id} users={props.users} />
                        })
                    }
                </PanelGroup>
            </Grid>
            )} else {
            return (
                <div>This is a git image loading posts</div>
                )
        }
};

export default Posts;