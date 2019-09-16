import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
debugger
    // что бы избежать зациклевания компоненты
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg',
                fullName: 'Maks',
                followed: true,
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg',
                fullName: 'Sasha',
                followed: true,
                status: 'Iss am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg',
                fullName: 'Alex',
                followed: false,
                status: 'I amsfdwef a boss',
                location: {city: 'Lvov', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg',
                fullName: 'Alex',
                followed: false,
                status: 'I amsfdwef a boss',
                location: {city: 'Lvov', country: 'Ukraine'}
            },
            {
                id: 5,
                photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg',
                fullName: 'John',
                followed: true,
                status: 'I am a bowewess',
                location: {city: 'Berlin', country: 'Germany'}
            }
        ]);
    }
    return (
        <div>
            {
                props.users.map( user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img alt="Userphoto" className={s.userPhoto} src={user.photoUrl}/>
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