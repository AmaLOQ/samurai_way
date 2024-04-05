import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts: React.FC <MyPostsPropsType> = (props) => {
    const {posts} = props
    const mappedPosts = posts.map(p => {
        return(
            <Post key={p.id} title={p.title} likesCount={p.likeCount}/>
        );
    })
    return (
        <div className={s.myPostsWrapper}>
            <div className={s.myPostsTitle}>Мои посты</div>
            {mappedPosts}
        </div>
    );
};

