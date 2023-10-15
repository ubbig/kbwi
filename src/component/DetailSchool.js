import Header from "./Header";
import dummy from "../db/data.json";
import React from "react";
import {useParams} from "react-router-dom";

export default function SelectDetailSchool() {
    const schoolParams = useParams();
    const schoolId = Number(schoolParams.id);
    const location = Number(schoolParams.location)
    const filteredSchool = dummy.schoolList.filter(school => school.id === schoolId && school.locationCode === location);

    return (
        <div>
            <Header headerText={`${filteredSchool[0]?.name}`}/>
            <div className="locationText">
              사진
            </div>
            <div className="locationContent">

            </div>
            <div className="locationFooter">
            </div>
        </div>
    );
}