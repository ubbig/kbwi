import React, { useState, useEffect } from 'react';
import Splash from "../vendor/image/splash.png";
import Main from "../vendor/image/bbangbbare.png";
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
            <div style={{ textAlign: 'center', marginTop :'126px'  }}>
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'2rem', lineHeight :'3px'}}>예비 학부모님,</p>
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'2rem', lineHeight :'3px'}}>환영합니다!</p>
                <div style={{height:'26px'}}></div>
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontSize:'1rem', lineHeight :'3px'}}>초등학생이 될 우리 아이!</p>
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontSize:'1rem',lineHeight :'3px'}}>아이의 학교 선택이 고민인 부모님들에게</p>
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontSize:'1rem',lineHeight :'3px'}}>우아사가 도움이 되어드릴께요</p>
                <div style={{ textAlign: 'center', height: '64px' }}>
                </div>
                <img src={Main} alt="MainScreen" style={{ textAlign: 'center',width : '320px', height: '260px' }} />
                <div style={{ textAlign: 'center',width : '360px', height: '100px' }}>
                </div>
                <Link to="/selectSchool">
                    <button style={{ textAlign: 'center',width : '20rem', height: '3.5rem',fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'1rem' }}>
                       학교 찾으러 가기
                    </button>
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