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
        <>
            <Header headerText={`${filteredLocations[0]?.area} 순위권`}/>
            <div className="locationText">
                <p>학업성취도 평가 기준으로</p>
                <p>선별하였어요</p>
            </div>
            <div className="schoolContent">
                    {schoolRank.map(schoolRank => (
                     <button className="schoolRank" key={schoolRank.id} onClick={() => handleLocationClick(schoolRank)}>
                         <span style={{ color: '#366DFF', fontWeight: 'bold', marginRight:'1rem' }}>{schoolRank.id}</span>
                         {schoolRank.location}<span style={{ fontWeight: 'bold', marginLeft:'0.4rem'}}>{schoolRank.name}</span>
                    </button>

                ))}
            </div>

        </>
    );
}