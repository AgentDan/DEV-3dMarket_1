import React from 'react';
import Header from "../Header/Header";
import PagesOne from "../Pages/PagesOne/PagesOne";
import PageSingle from "../Pages/PageSingle/PageSingle";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Proba from "../Pages/Proba";

const Menu = () => {
    const id_project = "65051d7a9275de5d793399e1"
    const [userDB, setUserDB] = useState([])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element ={<PagesOne/>}/>
                {/*<Route path="/" element={<Proba/>}/>*/}
                <Route path="/admin" element={<Admin userDB={userDB}/>}/>
                <Route path="/single/:id" element ={<PageSingle idProject={id_project} userDB={userDB} setUserDB={setUserDB}/>}/>
                {/*<Futer/>*/}
            </Routes>
        </div>
    );
};

export default Menu;