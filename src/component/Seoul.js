import dummy from "../db/data.json"
import Header from "./Header";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Seoul() {
    const navigate = useNavigate();

    const handleLocationClick = (schoolRank) => {
        navigate(`/seoulSchool/${schoolRank.id}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText="서울권 순위"/>
            <div style={{height:'20px'}}></div>
            <p style={{ textAlign:'left',marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>학업성취도 평가 기준으로</p>
            <p style={{ textAlign:'left', marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>선별하였어요</p>
            <div style={{height:'23px'}}></div>
            <div style={{backgroundColor:'#F7F7F7', width:'100%', height:'800px',overflow: 'scroll', paddingRight: '0'}}>
                <div style={{height:'22px'}}></div>
                {dummy.seoulSchool.map(seoulRank => (
                    <button className="schoolRank" key={seoulRank.id}  onClick={() => handleLocationClick(seoulRank)}>
                        <span style={{ color: '#366DFF', fontWeight: 'bold', marginRight:'20px', marginLeft:'20px' }}>{seoulRank.id}</span>
                        <span style={{color:'black'}} > {seoulRank.location}</span><span style={{color:'black', fontWeight: 'bold', marginLeft:'0.2rem'}}>{seoulRank.name}</span>
                    </button>
                ))}
                <div style={{height:'20px'}}></div>
            </div>
        </div>
    );
}