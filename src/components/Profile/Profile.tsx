import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {Friends} from "./Friends/Friends";
import {OwnerContent} from "./OwnerContent/OwnerContent";
import {PostFieldSubmit} from "./PostFieldSubmit/PostFieldSubmit";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile: React.FC <ProfilePropsType> = (props) => {
    const {posts, friends} = props.state
    return (
        <div className={s.profileMainContainer}>
            <ProfileInfo/>
            <OwnerContent/>
            <PostFieldSubmit/>
            <MyPosts posts={posts}/>
            <Friends friends={friends}/>
        </div>
    );
};