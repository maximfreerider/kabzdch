import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [{id:1, message: 'hi, how are u?', likesCount:15, post_name: 'Newest'},
        {id: 2, message: 'Its my first post', likesCount:25, post_name: 'Latest'},
        {id:3, message: 'Have a nice day today', likesCount:150, post_name: 'Good Day'}],
    profile: null,
    status: ""
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id:5, message: action.newPostText, likesCount:0}],
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile};
        }
        case SET_STATUS: {
            return {
                ...state, status:action.status
            };
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setStatus = (status) => ({type:SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response =>{
                dispatch(setUserProfile(response.data));
            })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response =>{
                dispatch(setStatus(response.data));
            })
    }
};

export const updateStatus = (status) => {
  return (dispatch) => {
      profileAPI.updateStatus(status)
          .then(response =>{
              if(response.data.resultCode === 0) {
                  dispatch(setStatus(status))
              }
          })
  }
};

export default profileReducer;