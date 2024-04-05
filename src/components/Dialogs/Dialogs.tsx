import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageList} from "./MessageList/MessageList";
import {DialogsHeader} from "./DialogsHeader/DialogsHeader";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC <DialogsPropsType> = (props) => {

    let mappedDialogs = props.state.dialogs.map(dialog => {
        return (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        );
    })
    return (

        <div className={s.dialogsWrapper}>
            <div className={s.dialogsPage}>
                <DialogsHeader/>
                <div className={s.dialogsList}>{mappedDialogs}</div>
            </div>
            <MessageList messages={props.state.messages}/>
        </div>
    );
};

