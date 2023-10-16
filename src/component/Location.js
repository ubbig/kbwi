import dummy from "../db/data.json"
import  { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import React from "react";

export default function Location() {
    const locationParams = useParams();
    const location = Number(locationParams.location);
    const filteredLocations = dummy.location.filter(loc => loc.id === location);
    const schoolRank = dummy.schoolList.filter(loc => loc.locationCode === location);
    const navigate = useNavigate();

    const handleLocationClick = (schoolRank) => {
        navigate(`/locationSchool/${location}/${schoolRank.id}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText={`${filteredLocations[0]?.area} 순위권`}/>
            <div style={{height:'20px'}}></div>
            <p style={{ textAlign:'left',marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>학업성취도 평가 기준으로</p>
            <p style={{ textAlign:'left', marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>선별하였어요</p>
            <div style={{height:'23px'}}></div>
            <div style={{backgroundColor:'#F7F7F7', width:'100%', height:'800px',overflow: 'scroll', paddingRight: '0'}}>
            <div style={{height:'22px'}}></div>
                    {schoolRank.map(schoolRank => (
                     <button className="schoolRank" key={schoolRank.id} onClick={() => handleLocationClick(schoolRank)}>
                         <span style={{ color: '#366DFF', fontWeight: 'bold', marginRight:'20px', marginLeft:'20px' }}>{schoolRank.id}</span>
                         {schoolRank.location}<span style={{ fontWeight: 'bold', marginLeft:'0.4rem'}}>{schoolRank.name}</span>
                    </button>
                    ))}
        </div>
        <div style={{height:'20px'}}></div>
        </div>
    );
}