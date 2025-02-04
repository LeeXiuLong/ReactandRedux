import React from 'react';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            //onl ine 22 for each post call get the User header for each post
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }

}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);