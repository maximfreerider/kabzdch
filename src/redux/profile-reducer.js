const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [{id:1, message: 'hi, how are u?', likesCount:15, post_name: 'Newest'},
        {id: 2, message: 'Its my first post', likesCount:25, post_name: 'Latest'},
        {id:3, message: 'Have a nice day today', likesCount:150, post_name: 'Good Day'}],
    newPostText: "",
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;