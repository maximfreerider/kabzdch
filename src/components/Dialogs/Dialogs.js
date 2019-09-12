import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messageElement = props.messagesData.map(message => <Message message={message.message} id={message.id}/>);

    let newDialogElement = React.createRef();

    let onSendMessageClick = () => {
        props.onSendMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElement}

                <div>

                    <textarea placeholder="enter message" onChange={onMessageChange} ref={newDialogElement} value={props.state.newMessageText}/>
                    <button onClick={onSendMessageClick}>Send</button>

                </div>
            </div>


        </div>
    );
};

export default Dialogs;