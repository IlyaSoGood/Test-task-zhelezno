import React from 'react';
import NavBar from "../components/UI/NavBar/NavBar";
import { Link } from 'react-router-dom';

const Main = () => {


    return (
        <div className="App">
            <NavBar>
                <Link to={'/list'}>Лист фото</Link>
            </NavBar>
            <div>

            </div>
        </div>
    );
};

export default Main;