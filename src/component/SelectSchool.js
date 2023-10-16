import '../App.css';
import Header from "./Header";
import {Link} from "react-router-dom";
import SelectShool from "../vendor/image/selectSchool.png";
import React from "react";

export default function selectSchool(){
    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText="카테고리 선택"/>
            <div style={{height:'50px'}}></div>
            <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'24px', lineHeight :'3px'}}>서울에는 어떤</p>
            <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'24px', lineHeight :'3px'}}>학교들이 있을까요?</p>
            <div style={{height:'16px'}}></div>
            <img src={SelectShool} alt="SelectShoolScreen" style={{ textAlign: 'center',width : '320px', height: '160px' }} />
            <div style={{height:'20px'}}></div>
            <Link className="noneLink" to="/seoulSchool">
                <button className="rankButton"> 서울권 순위 > </button>
            </Link>
            <div style={{height:'12px'}}></div>
            <Link className="noneLink" to="/locationSchool">
                <button className="rankButton"> 지역별 순위 > </button>
            </Link>
            <div style={{height:'62px'}}></div>
            <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'16px', color:'#366DFF'}}>취향에 맞는 학교를 보고 싶다면?</p>
            <Link className="noneLink" to="/aiRecommend">
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight :'bold', fontSize:'14px', color:'#353535'}}>AI 추천 바로가기</p>
            </Link>
            <div style={{height:'90px'}}></div>
        </div>
    );
}