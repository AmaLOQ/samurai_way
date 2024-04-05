import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'
import avatar from '../../../img/vk_large.jpg'

type DialogsItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogsItemPropsType> = (props) => {
    const {id, name} = props
    let path = '/dialogs/' + id

    return (
        <div className={s.dialogItemContainer}>
            <div className={s.dialogItemImgWrapper}>
                <img className={s.dialogItemImg} src={avatar} alt="Аватарка"/>
            </div>
            <div className={s.dialogItemDescr}>
                <div className={s.dialogItemSenderName}>Камиль Мухаметшин</div>
                <div className={s.dialogItemLastMessage}>Лех, привет как дела dsaf asd fasd fasd fsad fasd fas f</div>
                <div className={s.dialogItemData}></div>
                <div className={s.dialogDataMenu}></div>
            </div>
            <NavLink to={path}>
                <div className={s.dialogHover}></div>
            </NavLink>
        </div>
    );
}