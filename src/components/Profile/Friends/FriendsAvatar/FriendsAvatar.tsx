import React from 'react';
import s from './FriendsAvatar.module.css'
import logo from './../../../../img/vk_large.jpg'

type FriendsAvatarPropsType = {
    name: string,
    logo: typeof logo
}
export const FriendsAvatar: React.FC <FriendsAvatarPropsType> = (props) => {
    const {name, logo} = props
    return (
        <div className={s.friendsAvatarWrapper}>
            <div className={s.friendsAvatarImgContainer}>
                <img src={logo} alt="Avatar"/>
            </div>
            <div className={s.friendsAvatarName}>{name}</div>
        </div>
    );
};
