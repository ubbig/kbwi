import Header from "./Header";
import dummy from "../db/data.json";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";

export default function SelectDetailSchool() {
    const schoolParams = useParams();
    const schoolId = Number(schoolParams.id);
    const location = Number(schoolParams.location)
    const filteredSchool = dummy.schoolList.filter(school => school.id === schoolId && school.locationCode === location);
    const [address, setAddress] = useState('');
    const [apt, setApt] = useState('');
    const [detail, setDetail] = useState('');
    const [randomImageUrl, setRandomImageUrl] = useState('');

    const navigate = useNavigate();
    const handleLocationClick = () => {
        navigate(`/locationSchool/infoSchool/` + location+ "/" + schoolId);
    };

    const instance = axios.create({
        baseURL: "/api",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonImageUrls = dummy.imageUrls;
                const imageUrl = process.env.PUBLIC_URL;
                const randomIndex = Math.floor(Math.random() * jsonImageUrls.length);
                const selectedImageUrl = imageUrl + jsonImageUrls[randomIndex].url;
                setRandomImageUrl(selectedImageUrl);

                const responseSchool = await instance.post('/schoolList');
                const responseSchoolList = responseSchool.data.result.response.body.dataBody.ARRAY수;
                const randomIndexSchool = Math.floor(Math.random() * responseSchoolList.length);
                const randomItem = responseSchoolList[randomIndexSchool];
                setAddress(randomItem);

                const responseApt = await instance.post('/saleList');
                const responseAptList = responseApt.data.result.response.body.dataBody.ARRAY수;
                setApt(responseAptList)

                const responseAptDetail = await instance.post('/saleDetail');
                const responseAptDetailList = responseAptDetail.data.result.response.body.dataBody.ARRAY수;
                const AptDetailList = responseAptDetailList.slice(0, responseAptList.length);
                setDetail(AptDetailList)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const min = 292;
    const max = 589;
    const randomStudentCount = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
        <Header headerText={`${filteredSchool[0]?.name}`} style={{ width:'320px', fontWeight: 'bold'}}/>
            <div style={{height:'40px'}}></div>
            <img src={randomImageUrl} alt="Random Image" style={{ textAlign: 'center', width: '360px', height: '220px' }}/>
            <div style={{height:'24px'}}></div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img  style={{ width: '24px', height: '24px', marginRight: '20px', marginLeft: '24px'  }}  src={require('../vendor/icon/location.png')} alt="icon"  />
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight: '500',fontSize:'14px', lineHeight: '3px'}}  className="category">{address.주소}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img  style={{ width: '24px', height: '24px', marginRight: '20px', marginLeft: '24px'  }}  src={require('../vendor/icon/school.png')} alt="icon"  />
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight: '500',fontSize:'14px',lineHeight: '3px'}}  className="category">사립</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img  style={{ width: '24px', height: '24px', marginRight: '20px', marginLeft: '24px'  }}  src={require('../vendor/icon/title.png')} alt="icon"  />
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight: '500',fontSize:'14px', lineHeight: '3px'}}  className="category">{address.학교명}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img  style={{ width: '24px', height: '24px', marginRight: '20px', marginLeft: '24px'  }}  src={require('../vendor/icon/student.png')} alt="icon"  />
                <p style={{ fontFamily :'"Pretendard Variable", sans-serif', fontWeight: '500',fontSize:'14px',lineHeight: '3px'}}  className="category">{randomStudentCount} 명</p>
            </div>
            <div style={{height:'20px'}}></div>
            <div style={{textAlign:'-webkit-center'}}>
                <button className="moreButton" onClick={() => handleLocationClick()}>AI 정보 더보기 ></button>
            </div>
            <div style={{height:'32px'}}></div>
            <div style={{height:'5px', backgroundColor:'#DBDBDB'}}></div>
            <div style={{height:'8px'}}></div>
            <p style={{textAlign:'left', fontFamily :'"Pretendard Variable", sans-serif', fontWeight: 'bold',fontSize:'18px', marginLeft: '20px'}} >학교 주변 매물</p>
            <div style={{height:'3px'}}></div>
            <p style={{textAlign:'left', fontFamily :'"Pretendard Variable", sans-serif', fontWeight: 'bold',fontSize:'14px', marginLeft: '20px'}} >총  {apt.length}건</p>
            <div style={{height:'1px', backgroundColor:'#DBDBDB'}}></div>
            <div style={{height:'10px'}}></div>
            <div style={{ maxHeight: '400px', overflow: 'scroll' }}>
                {Array.isArray(apt) && apt.map((item, index) => (
                    <div key={index}>
                        <p style={{ marginLeft: '20px', textAlign: 'left', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: '500', fontSize: '14px' }}>{item.단지명}</p>
                        <p style={{ marginLeft: '20px', textAlign: 'left', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 'bold', fontSize: '20px' }}>매매 {item.매매최저일반평균가} </p>
                        {Array.isArray(detail) && detail.length > index && (
                            <div>
                                <p style={{ marginLeft: '20px', textAlign: 'left', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: '500', fontSize: '14px' }}>{item.물건종별구분명} · {detail[index].면적}㎡ / {detail[index].전용면적}㎡, 총세대수{item.총세대수} </p>
                            </div>
                        )}
                        <div style={{ height: '1px', backgroundColor: '#DBDBDB' }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}