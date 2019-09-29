const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: text}]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;