/* eslint-disable */
import './App.css';
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import Splash from "./component/Splash";
import SelectSchool from "./component/SelectSchool";
import LocationSchool from "./component/LocationSchool";
import Location from "./component/Location";
import AiRecommend from "./component/AiRecommend";
import Seoul from "./component/Seoul";
import DetailSchool from "./component/DetailSchool";
import DetailSeoulSchool from "./component/DetailSeoulSchool";

import {BrowserRouter, Route,  Routes} from "react-router-dom";
import {useEffect} from "react";

function App() {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    useEffect(() => {
        setScreenSize();
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Splash />}>
                </Route>
                <Route path="/selectSchool" element={<SelectSchool />}>
                </Route>
                <Route path="/aiRecommend" element={<AiRecommend />}>
                </Route>
                <Route path="/locationSchool" element={<LocationSchool />}>
                </Route>
                <Route path="/seoulSchool" element={<Seoul />}>
                </Route>
                <Route path="/seoulSchool/:id" element={<DetailSeoulSchool />}>
                </Route>
                <Route path="/locationSchool/:location" element={<Location />}>
                </Route>
                <Route path="/locationSchool/:location/:id" element={<DetailSchool />}>
                </Route>
                <Route path="/dayList/:day" element={<Day />}>
                </Route>
                <Route path="*" element={<EmptyPage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
