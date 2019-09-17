import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

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