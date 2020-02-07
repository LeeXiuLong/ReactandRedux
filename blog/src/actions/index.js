import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //get all the posts with fetch posts. wait for all posts to be in state
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        //take all our posts in state and get the unique ids of users in the posts.
        .map('userId')
        .uniq()
        //for each unique user we got in the line above call fetchUser which will place each user in state
        .forEach(id => dispatch(fetchUser(id)))
        .value()
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data })
};


//memoized version
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// });