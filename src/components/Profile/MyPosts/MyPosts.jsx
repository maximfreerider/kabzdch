import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLenght10 = maxLenghtCreator(10);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textArea}>
                <Field validate={[required, maxLenght10]} name="newPostText" component={Textarea} placeholder={"Post message"}/>
            </div>
            <div>
                <button className={s.button}>Add some text here</button>
            </div>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({form:"ProfileAddNewPostForm"})(addNewPostForm);

const MyPosts = (props) => {

    let postElements = props.postsData.map(post => <Post message={post.message} post_name={post.post_name} like_counter={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
