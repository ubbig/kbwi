import '../App.css';
import dummy from "../db/data.json"
import Header from "./Header";
import { useLocation  } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AISelectSchool() {
    const location = useLocation();
    const selectedSchools = location.state?.selectedSchools;
    const [randomImageUrl, setRandomImageUrl] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonImageUrls = dummy.thumbnail;
                const imageUrl = process.env.PUBLIC_URL;
                const selectedSchoolImages = selectedSchools.map(() => {
                    const randomIndex = Math.floor(Math.random() * jsonImageUrls.length);
                    return imageUrl + jsonImageUrls[randomIndex].url;
                });
                setRandomImageUrl(selectedSchoolImages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText="AI 학교 목록"/>
            <div style={{height:'50px'}}></div>
            <p style={{textAlign:'left', fontFamily :'"Pretendard Variable", sans-serif', fontWeight: 'bold',fontSize:'14px', marginLeft: '20px'}} >총  {selectedSchools.length}건</p>
            <div style={{height:'12px'}}></div>
            <div style={{ height: '1px', backgroundColor: '#DBDBDB' }}></div>
            <div style={{height:'20px'}}></div>
            {selectedSchools.map((school, index) => (
                <div key={index}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginLeft: '30px', textAlign: 'left', fontFamily: '"Pretendard Variable", sans-serif' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{school.schoolName}</p>
                        <p style={{ fontWeight: '300', fontSize: '14px', color: 'gray' }}>{school.schoolAddress}</p>
                        <p style={{ fontWeight: '300', fontSize: '14px', color: '#366DFF' }}>
                            {school.selectedNames.map((name, i) => (
                                <span key={i}>#{name}      </span>
                            ))}
                        </p>
                    </div>
                    <div style={{ padding : '20px' }}>
                    <img src={randomImageUrl[index]} alt="Random" style={{ width: '100px', height: '100px'}} />
                    </div>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div style={{ height: '1px', backgroundColor: '#DBDBDB' }}></div>
                </div>
            ))}
            <div style={{ width: '40px' }}></div>
        </div>
            );
}