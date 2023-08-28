import React, {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from "helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";

export const App = () => {
   const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>about</Link>
            <AppRouter/>
        </div>
    )
}
