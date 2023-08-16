import React from 'react';
import NavBar from "../components/UI/NavBar/NavBar";
import { Link } from 'react-router-dom';

const Main = () => {


    return (
        <div>
            <NavBar>
                <Link to={'/list'}>Посты</Link>
            </NavBar>
            <div>

            </div>
        </div>
    );
};

export default Main;