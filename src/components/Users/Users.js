import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    // что бы избежать зациклевания компоненты
    if (props.users.length === 0) {
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
                console.log(responce);
                props.setUsers(responce.data.items);
            });
    }
    return (
        <div>
            {
                props.users.map( user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img alt="Userphoto" className={s.userPhoto}
                                         src={user.photos.small != null ? user.photos.small: userPhoto}/>
                                </div>
                                <div>
                                    {
                                        user.followed ?
                                            <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                            :
                                            <button onClick={() => {props.follow(user.id)}}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;