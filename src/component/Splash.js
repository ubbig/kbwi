import React, { useState, useEffect } from 'react';
import Splash from "../vendor/image/splash.png";
import Main from "../vendor/image/main.png";
import '../App.css';
import {Link} from "react-router-dom";

export default function SplashScreen(){
    function changeRootBackgroundColor(color) {
        document.documentElement.style.setProperty('background-color', color);
        document.body.style.setProperty('background-color', color);
    }

    function SplashScreen() {
        changeRootBackgroundColor('#366DFF');
        return (
                <img src={Splash} alt="SplashScreen" className="splash-screen"/>
        );
    }

    function MainAppScreen() {
        changeRootBackgroundColor('white');
        return (
            <div>
                <img src={Main} alt="MainScreen" className="main-screen"/>
                <Link to="/selectSchool">
                    <button className="mainButton">학교 찾으러 가기</button>
                </Link>
            </div>
        );
    }

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 1000);
    }, []);

    return (
        <div className="splash">
            {showSplash ? <SplashScreen /> : <MainAppScreen />}
        </div>
    );
}