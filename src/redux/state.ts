import {v1} from "uuid";
import logo from '../img/vk_large.jpg'

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type PostType = {
    id: string,
    title: string,
    likeCount: number
}

export type DialogsType = {
    id: string,
    name: string
}

export type MessageType = {
    id: string,
    message: string
}

export type ProfilePageType = {
    posts: PostType[],
    friends: FriendsType[]
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessageType[]
}
export type FriendsType = {
    id: string,
    name: string,
    logo: typeof logo
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), title: 'My first post', likeCount: 2},
            {id: v1(), title: 'Hello', likeCount: 10},
        ],
        friends: [
            {id: v1(), name: 'Настя', logo: logo},
            {id: v1(), name: 'Вика', logo: logo},
            {id: v1(), name: 'Камиль', logo: logo},
            {id: v1(), name: 'Андрей', logo: logo},
            {id: v1(), name: 'Дима', logo: logo},
            {id: v1(), name: 'Валера', logo: logo},
            {id: v1(), name: 'Валера', logo: logo},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'John'},
            {id: v1(), name: 'Victor'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Bob'}
        ],
        messages: [
            {id: v1(), message: 'Здарова'},
            {id: v1(), message: 'Здарова rf'},
            {id: v1(), message: 'Здарова 32 '},
            {id: v1(), message: 'Здарова sfd'},
            {id: v1(), message: 'Здарова xcv '},
            {id: v1(), message: 'Здароваdsf s dsfs'},
        ]
    }
}