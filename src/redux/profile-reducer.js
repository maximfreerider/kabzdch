const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [{id:1, message: 'hi, how are u?', likesCount:15, post_name: 'Newest'},
        {id: 2, message: 'Its my first post', likesCount:25, post_name: 'Latest'},
        {id:3, message: 'Have a nice day today', likesCount:150, post_name: 'Good Day'}],
    newPostText: "",
    profile: null,
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id:5, message: state.newPostText, likesCount:0}],
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile};
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;