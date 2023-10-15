import { useNavigate } from "react-router-dom";
import React from 'react';
import '../App.css';

export default function Header(props) {
    const { headerText } = props;
    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'left'}} >
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <img  style={{ width: '24px', height: '24px', marginRight: '20px', marginLeft: '24px'  }} onClick={() => navigate(-1)} src={require('../vendor/icon/back_arrow.png')} alt="Back Icon"  />
                    <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight: '500',fontSize:'18px'}}  className="category">{headerText}</p>
                </div>
        </div>
    );
}
