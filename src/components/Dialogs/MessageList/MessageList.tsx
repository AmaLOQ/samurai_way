import React from 'react';
import s from './MessageList.module.css'
import {DialogsHeader} from "../DialogsHeader/DialogsHeader";
import {Message} from "../Message/Message";
import {MessageType} from "../../../redux/state";


type MessagePropsType = {
    messages: MessageType[]
}

export const MessageList: React.FC <MessagePropsType> = (props) => {
    return (
        <div className={s.messageListContainer}>
            <DialogsHeader/>
            <div className={s.messageList}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>

            </div>
            <div className={s.typeTextField}>
                <textarea rows={1} className={s.messageListTypeText} placeholder={'Напишите сообщение...'}></textarea>
            </div>
        </div>
    );
};

