import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [{id:1, message: 'hi, how are u?', likesCount:15, post_name: 'Newest'},
                {id: 2, message: 'Its my first post', likesCount:25, post_name: 'Latest'},
                {id:3, message: 'Have a nice day today', likesCount:150, post_name: 'Good Day'}],
            newPostText: "",
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Maks'},
                {id: 3, name: 'Ira'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'I`m here'}
            ],
            newMessageText: "",
        },
        sidebar: {},
    },
    _callSubscriber(){
        console.log("state changed")
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){ // {type: 'text', example 'addPost}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;

window.store = store;