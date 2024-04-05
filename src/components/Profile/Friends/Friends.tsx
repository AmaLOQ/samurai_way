import React from 'react';
import s from './Friends.module.css'
import {FriendsType} from "../../../redux/state";
import {FriendsAvatar} from "./FriendsAvatar/FriendsAvatar";

type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends: React.FC <FriendsPropsType> = (props) => {
    const {friends} = props
    const friendsCount = friends.length
    const cuttedFriends = friends.slice(0,6)
    const mappedFriends = cuttedFriends.map(f => {
        return(
            <FriendsAvatar key={f.id} name={f.name} logo={f.logo}/>
        );
    })
    return (
        <div className={s.friendsWrapper}>
            <div>Друзья <span className={s.friendsCount}>{friendsCount}</span></div>
            <div className={s.friendsAvatarsContainer}>
                {mappedFriends}
            </div>
        </div>
    );
};

