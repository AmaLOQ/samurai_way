import React from 'react';
import s from './Message.module.css'
import avatar from '../../../img/vk_large.jpg'


export const Message = () => {
    return(
        <div className={s.messageWrapper}>
            <div className={s.messageAvatarContainer}>
                <img className={s.messageAvatar} src={avatar} alt='Avatar'/>
            </div>
            <div className={s.messageDescr}>
                <div className={s.messageSender}>Камиль Мухаметшин <span className={s.messageTime}>13:07</span></div>
                <div className={s.message}> Лех, привет как дела dsaf asd fasd fasd fsad fasd fas f</div>
            </div>
        </div>
    );
}






