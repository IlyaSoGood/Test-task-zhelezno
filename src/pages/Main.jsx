import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ListContext} from "../context";

import PhotoList from "../components/PhotoList";
import NavBar from "../components/UI/NavBar/NavBar";
import PhotoFavoriteItem from "../components/PhotoFavoriteItem";

const Main = () => {
    const {
        favoritePhotos
    } = useContext(ListContext);

    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <NavBar>
                <Link to={'/list'}>Лист фото</Link>
            </NavBar>

            <div>
                <h2 style={{marginTop:15}}>Количество элементов в избранном: {favoritePhotos.length}</h2>
                <h3 style={{marginTop:30}}>Список избранных фото</h3>
                <PhotoList photos={favoritePhotos} title={''} Component={PhotoFavoriteItem}/>
            </div>
        </div>
    );
};

export default Main;