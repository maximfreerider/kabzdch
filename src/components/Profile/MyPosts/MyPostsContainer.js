import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };
                    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                    postsData={state.profilePage.postsData}
                                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );

};

export default MyPostsContainer;
