import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map( user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto} src={user.photoUrl}/>
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
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
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