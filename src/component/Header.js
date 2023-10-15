import { useNavigate } from "react-router-dom";
import React from 'react';
import '../App.css';

export default function Header(props) {
    const { headerText } = props;
    const navigate = useNavigate();


    return (
        <div className="header">
                <div className="header-content"><img onClick={() => navigate(-1)} src={require('../vendor/icon/back.svg').default} alt="Back Icon" className="backIcon" />
                    <span className="category">{headerText}</span>
                </div>
        </div>
    );
}
