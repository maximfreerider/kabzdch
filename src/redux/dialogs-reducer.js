const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: text}]
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text});

export default dialogsReducer;