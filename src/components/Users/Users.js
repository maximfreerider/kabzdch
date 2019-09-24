import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // 0/5
    let pages = [];

    for(let page=1; page<=pagesCount; page++){
        pages.push(page);
    }

    return (
            <div>
            <div>
                {
                    pages.map(numberOfPage =>{
                        return <span className={props.currentPage === numberOfPage && s.selectedPage} onClick={(event) => {props.onPageChanged(numberOfPage)}}>{numberOfPage}!</span>
                    })
                }
            </div>
            {
                props.users.map( user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                    <img alt="Userphoto" className={s.userPhoto}
                                         src={user.photos.small != null ? user.photos.small: userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        user.followed ?
                                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                                props.toggleIsFollowingProgress(true, user.id);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{withCredentials: true, headers: {"API-KEY": "293a2fcd-d0f5-4df9-bc78-ab2b32ac1ce2"}})
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollow(user.id)
                                                        }
                                                    props.toggleIsFollowingProgress(false, user.id);
                                                    });
                                            }}>Unfollow</button>
                                            :<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                                props.toggleIsFollowingProgress(true, user.id);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {"API-KEY": "293a2fcd-d0f5-4df9-bc78-ab2b32ac1ce2"}
                                                }).then(response => {
                                                        if(response.data.resultCode === 0) {
                                                            props.follow(user.id);
                                                        }
                                                        props.toggleIsFollowingProgress(false, user.id);
                                                    });
                                            }}>Follow</button>
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