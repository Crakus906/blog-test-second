import { api } from "../../constants/api";

export const POST_RESPONSE = 'POST_RESPONSE';
export const RETRIEVE_POST_COMMENTS = 'RETRIEVE_POST_COMMENTS';
export const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT';

export const postResponse = (e) => ({ type: POST_RESPONSE, payload: e });
export const retriverePostComments = (e) => ({ type: RETRIEVE_POST_COMMENTS, payload: e });
export const createNewComment = (payload) => ({ type: CREATE_NEW_COMMENT, payload })

export const getPosts = () => async (dispatch) => {
    const res = await api.get('/posts');
    dispatch(postResponse(res.data));
};

export const createPost = (value) => async (dispatch) =>  {
    if (value) {
        await api.post('/posts/', value);
        dispatch(getPosts());   
    };
};

export const deletePost = (id) => async (dispatch) => {
    if (id) {
        await api.delete(`/posts/${id}`);
        dispatch(getPosts());   
    };
};

export const editPost = (id, value) => async (dispatch) => {
    await api.put(`/posts/${id.id}`, value);
    dispatch(getPosts());   
};

export const retrievePost = (id) => async (dispatch) => {
    if (id) {
        const res = await api.get(`/posts/${id}?_embed=comments`);
        dispatch(retriverePostComments(res.data));
    };
};

export const createComment = (value) => async (dispatch) => {
    if (value) {
        const res = await api.post('/comments/', value);
        dispatch(createNewComment(res.data))
    };
};
