const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', fullName: 'Maks', followed: true, status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', fullName: 'Sasha', followed: true, status: 'Iss am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', fullName: 'Alex', followed: false, status: 'I amsfdwef a boss', location: {city: 'Lvov', country: 'Ukraine'}},
        {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', fullName: 'Alex', followed: false, status: 'I amsfdwef a boss', location: {city: 'Lvov', country: 'Ukraine'}},
        {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', fullName: 'John', followed: true, status: 'I am a bowewess', location: {city: 'Berlin', country: 'Germany'}}
    ]
};

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: true};
                    } else {
                        return user;
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: false};
                    } else {
                        return user;
                    }

                })
            };
        case SETUSERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({type:FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SETUSERS, users});
export default usersReducer;