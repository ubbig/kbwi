import dummy from "../db/data.json"
import Header from "./Header";
import React from "react";

export default function Seoul() {
    return (
        <>
            <Header headerText="서울권 순위"/>
            <div className="locationText">
                <p>학업성취도 평가 기준으로</p>
                <p>선별하였어요</p>
            </div>
            <div className="schoolContent">
                {dummy.seoulSchool.map(seoulRank => (
                    <button className="schoolRank" key={seoulRank.id}>
                        <span style={{ color: '#366DFF', fontWeight: 'bold', marginRight:'0.4rem' }}>{seoulRank.id}</span>
                        {seoulRank.location}<span style={{ fontWeight: 'bold', marginLeft:'0.2rem'}}>{seoulRank.name}</span>
                    </button>

                ))}
            </div>

        </>
    );
}