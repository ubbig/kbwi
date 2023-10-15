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
        <div>
            <Header headerText="지역 선택"/>
            <div className="locationText">
                <p>지역을 선택해주시면</p>
                <p>순위를 보여드릴께요</p>
            </div>
            <div className="locationContent">
                {dummy.location.map(location => (
                    <div key={location.id}>
                        <button className="locationButton" onClick={() => handleLocationClick(location)}>
                            {location.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className="locationFooter">
                <button className="confirmButton" onClick={handleConfirmClick}> 확인 </button>
            </div>
        </div>
    );
}
