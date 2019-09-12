import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.postsData.map(post => <Post message={post.message} post_name={post.post_name} like_counter={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>

                <div className={s.textArea}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.button} onClick={onAddPost}>
                        Add some text here
                    </button>
                </div>

            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
