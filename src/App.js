/* eslint-disable */
import './App.css';
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import Splash from "./component/Splash";
import SelectSchool from "./component/SelectSchool";
import LocationSchool from "./component/LocationSchool";
import Location from "./component/Location";
import Seoul from "./component/Seoul";
import DetailSchool from "./component/DetailSchool";

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

    // useEffect(() => {
    //     const userAgent = navigator.userAgent.toLowerCase();
    //
    //     if (userAgent.includes("MOBILE")) {
    //     }
    // }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Splash />}>
                </Route>
                <Route path="/selectSchool" element={<SelectSchool />}>
                </Route>
                <Route path="/locationSchool" element={<LocationSchool />}>
                </Route>
                <Route path="/seoulSchool" element={<Seoul />}>
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
