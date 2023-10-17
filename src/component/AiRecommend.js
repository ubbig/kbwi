import '../App.css';
import dummy from "../db/data.json"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function SelectSchool() {
    const navigate = useNavigate();
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleButtonClick = (recommend) => {
        if (selectedButtons.includes(recommend)) {
            setSelectedButtons(selectedButtons.filter((item) => item !== recommend));
        } else {
            setSelectedButtons([...selectedButtons, recommend]);
        }
    };

    const handleConfirmClick = async () => {
        const selectedNames = selectedButtons.map(button => button.name);

        try {
            setLoading(true);
            const requestData = {
                prompt: "서울시" + selectedNames + "고등학교 알려줘 알려줄때 고등학교(주소) 이렇게 알려줘"
            };

            const response = await axios.post('/api/synctree-aiservice/gpt-3', requestData);
            const regex = /(\d+\.\s)([^()]+)(?:\(([^)]+)\))?/g;
            const schoolInfo = [];
            let match;
            while ((match = regex.exec(response.data))) {
                schoolInfo.push({
                    schoolName: match[2].trim(),
                    schoolAddress: match[3] ? match[3].trim() : "",
                    selectedNames: selectedNames
                });
            }
            if (selectedButtons.length > 0) {
                navigate(`/aiRecoommend/schoolList`, { state: { selectedSchools: schoolInfo } });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop :'32px'  }}>
            <Header headerText="AI 취향 찾기"/>
            <div style={{height:'50px'}}></div>
            <p style={{ textAlign:'left',marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'24px', lineHeight :'10px'}}><span style={{fontWeight: 'bold'}}>선호하시는 항목</span>이 있나요?</p>
            <p style={{ textAlign:'left', marginLeft: '20px', fontFamily :'"Pretendard Variable", sans-serif', fontSize:'14px', lineHeight :'10px'}}>선호하는 항목에 맞는 학교를 추천해드릴께요</p>
            <div style={{height:'34px'}}></div>
            {loading && (
                <div className="loading">
                    <img src={require('../vendor/image/loading.gif')} alt="로딩 중" />
                </div>
            )}
            <div className="buttonContainer">
                {dummy.recommend.map((recommend) => (
                    <button
                        key={recommend.id}
                        className={`aiButton ${selectedButtons.includes(recommend) ? "selected" : ""}`}
                        onClick={() => handleButtonClick(recommend)}>
                        #{recommend.name}
                    </button>
                ))}
            </div>
            <div style={{height:'230px'}}></div>
            <button style={{backgroundColor: '#366DFF', color: 'white', fontWeight: 'bold', width:'320px', height:'56px', borderRadius: '8px', border: 'none', fontSize: '16px',  fontFamily :'"Pretendard Variable", sans-serif', }} onClick={handleConfirmClick}> 확인 </button>
            <div style={{height:'20px'}}></div>
        </div>
    );
}
