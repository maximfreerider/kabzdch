import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    constructor(props){
        super(props);
        alert('start creating an object');
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            console.log(responce);
            this.props.setUsers(responce.data.items);
        });
    };

    render () {
        return (
            <div>
                {
                    this.props.users.map( user => {
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
                                            <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                                            :
                                            <button onClick={() => {this.props.follow(user.id)}}>Follow</button>
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
    }
}

export default Users;