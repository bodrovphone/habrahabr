import React from 'react';
import UserPost from './UserPost';
import {PanelGroup, Grid} from 'react-bootstrap';
import Waypoint from 'react-waypoint';

const Posts = (props) => {
        if (Array.isArray(props.data.posts)) {
        return (
            <Grid>
                <PanelGroup>
                    {
                        props.data.posts.map((post, id) => {
                            if (id === props.data.posts.length - 2) {
                                return  <div key={id+"unique"}>
                                            <Waypoint onLeave={() => { props.data.fetchingPostsData(id) }}  />
                                            <UserPost post={post} key={id} users={props.data.users} />
                                        </div>
                            }
                            return <UserPost post={post} key={id} users={props.data.users} />
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

// 

export default Posts;