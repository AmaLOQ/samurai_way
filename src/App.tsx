import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navigation/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppStateType = {
    state: RootStateType
}




export const App: React.FC <AppStateType> = (props) => {
    const {profilePage, dialogsPage} = props.state
    return (
        <div className={s.appWrapper}>
            <header className={s.header}>
                <div className={s.container}>
                    <Header/>
                </div>
            </header>
            <div className={s.main}>
                <div className={s.container}>
                    <div className={s.mainContentWrapper}>
                        <nav className={s.navigation}>
                            <NavBar/>
                        </nav>
                        <main className={s.mainContent}>
                            <Route render={()=> <Profile state={profilePage}/>} path={'/profile'}/>
                            <Route exact={true} render={()=> <Dialogs state={dialogsPage}/>} path={'/dialogs'}/>
                            <Route component={News} path={'/news'}/>
                            <Route component={Music} path={'/music'}/>
                            <Route component={Settings} path={'/settings'}/>
                        </main>
                    </div>
                </div>
            </div>
            <footer className={s.footer}>
                <div className={s.container}>
                    <div>footer</div>
                </div>
            </footer>
        </div>

    );
}






