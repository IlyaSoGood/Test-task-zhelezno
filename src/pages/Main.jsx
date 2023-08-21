import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ListContext} from "../context";

import PhotoList from "../components/PhotoList";
import NavBar from "../components/UI/NavBar/NavBar";
import PhotoItem from "../components/PhotoItem";

const Main = () => {
    const {
        favoritePhotos
    } = useContext(ListContext);

    return (
        <div className="App">
            <NavBar>
                <Link to={'/list'}>Перейти к списку всех фото</Link>
            </NavBar>

            <div>
                <h2 style={{marginTop:15}}>Количество элементов в избранном: {favoritePhotos.length}</h2>
                <h2 style={{marginTop:15}}>Вес картинок в избранном: {Math.round((favoritePhotos.length * 6 / 1024) * 1000) / 1000} МБайт</h2>
                <h3 style={{marginTop:30}}>Список избранных фото:</h3>
                <PhotoList photos={favoritePhotos} title={''} Component={PhotoItem}/>
            </div>
        </div>
    );
};

export default Main;