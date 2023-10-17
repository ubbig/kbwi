import Header from "./Header";
import dummy from "../db/data.json";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";

export default function SelectDetailSchool() {
    const schoolParams = useParams();
    const schoolId = Number(schoolParams.id);
    const location = Number(schoolParams.location);
    const filteredSchool = dummy.schoolList.filter(school => school.id === schoolId && school.locationCode === location);

    const [randomImageUrl, setRandomImageUrl] = useState('');
    const [responseData, setResponseData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonImageUrls = dummy.imageUrls;
                const imageUrl = process.env.PUBLIC_URL;
                const randomIndex = Math.floor(Math.random() * jsonImageUrls.length);
                const selectedImageUrl = imageUrl + jsonImageUrls[randomIndex].url;
                setRandomImageUrl(selectedImageUrl);

                const requestData = {
                    prompt: "서울시" + filteredSchool[0]?.name + "정보 적어줘"
                };
                axios.post('/synctree-aiservice/gpt-3', requestData)
                    .then((response) => {
                        const modifiedText = response.data.replace(/\n/g, ' ');
                        setResponseData(modifiedText);
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText={`${filteredSchool[0]?.name}`} style={{ width:'320px', fontWeight: 'bold'}}/>
            <div style={{height:'40px'}}></div>
            <img src={randomImageUrl} alt="Random" style={{ textAlign: 'center', width: '360px', height: '220px' }}/>
            <div style={{height:'24px'}}></div>
            <div style={{textAlign: 'center', width: '360px', marginLeft: '20px'}}>
                <h2>AI 알려주는 해당 학교 정보는</h2>
                {responseData ? (
                    <p>{JSON.stringify(responseData, null, 2)}</p>
                ) : (
                    <p>AI가 학교정보를 불러오고 있어요</p>
                )}
            </div>
        </div>
    );
}