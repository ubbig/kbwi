import '../App.css';
import dummy from "../db/data.json"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function SelectSchool() {
    const navigate = useNavigate();
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationClick = (location) => {
        setSelectedLocation(location.id);
    };

    const handleConfirmClick = () => {
        if (selectedLocation !== null) {
            navigate(`/locationSchool/${selectedLocation}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop :'50px'  }}>
        <Header headerText="지역 선택"/>
            <div style={{height:'50px'}}></div>
            <p style={{ textAlign:'left',marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>지역을 선택해주시면</p>
            <p style={{ textAlign:'left', marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'3px'}}>순위를 보여드릴께요</p>
            <div style={{height:'34px'}}></div>
            <div className="locationContent">
                {dummy.location.map(location => (
                    <div key={location.id}>
                        <button className="locationButton" onClick={() => handleLocationClick(location)}>
                            {location.name}
                        </button>
                    </div>
                ))}
            </div>
            <div style={{height:'440px'}}></div>
            <button style={{backgroundColor: '#366DFF', color: 'white', fontWeight: 'bold', width:'320px', height:'56px', borderRadius: '8px', border: 'none', fontSize: '16px',  fontFamily :'"Pretendard Variable", sans-serif', }} onClick={handleConfirmClick}> 확인 </button>
            <div style={{height:'20px'}}></div>
        </div>
    );
}
