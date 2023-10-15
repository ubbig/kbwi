import '../App.css';
import Header from "./Header";
import {Link} from "react-router-dom";
import SelectShool from "../vendor/image/selectSchool.png";
import AiButton from "../vendor/image/aiButton.png";
import React from "react";

export default function selectSchool(){
    return (
        <div>
            <Header headerText="카테고리 선택"/>
            <div className="content">
                <img src={SelectShool} alt="SchoolScreen" className="school-screen"/>
            </div>
            <div className="rankContent">
                <Link className="noneLink" to="/seoulSchool">
                <button className="rankButton"> 서울권 순위 > </button>
                </Link>
                <Link className="noneLink" to="/locationSchool">
                <button className="rankButton"> 지역별 순위 > </button>
                </Link>
            </div>
            <div className="aiContent">
                <img src={AiButton} className="ai-screen"/>
            </div>
        </div>
    );
}