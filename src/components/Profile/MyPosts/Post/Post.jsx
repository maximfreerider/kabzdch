import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt="post"/>
      {props.post_name}
      <div>{props.message}</div>
      <div><span><button className={s.button}>Like</button></span><span>{props.like_counter}</span></div>
    </div>
  );
};

export default Post;
