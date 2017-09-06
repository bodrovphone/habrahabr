import React from 'react';
import UserPost from './UserPost';
import {PanelGroup, Grid} from 'react-bootstrap';


class Posts extends React.Component {
        render () {
        if (Array.isArray(this.props.posts)) {
        return (
            <Grid>
                <PanelGroup>
                    {
                        this.props.posts.map((post, id) => {
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