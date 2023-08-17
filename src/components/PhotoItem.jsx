import {useContext, useEffect, useState, useRef} from "react";
import {ListContext} from "../context";

import MyButton from './UI/button/MyButton';

const PhotoItem = (props) => {
    const {
        favoritePhotos,
        setFavoritePhotos
     } = useContext(ListContext);

    const [btnActive, setBtnActive] = useState(false);

    function handleClick(id) {
        if (!btnActive) {
            setFavoritePhotos([...favoritePhotos, props.photo]);
            setBtnActive(true)
        } else {
            setFavoritePhotos(favoritePhotos.filter(photo => photo.id !== props.photo.id));
            setBtnActive(false)
        }
    }
    useEffect(() => {
        if (favoritePhotos.length > 0) {
            favoritePhotos.forEach(photo => {
                if (photo.id === props.photo.id) {
                    setBtnActive(true)
                }
            })
        }
    }, [])

    return (
        <div className="photo">
            <div className="photo__content">
                <strong>{props.photo.id}. {props.photo.title}</strong>
                <div>
                    {props.photo.body}
                </div>
            </div>
            <div className="photo__img">
                <img src={props.photo.url} alt={props.photo.title}/>
            </div>
            <div className={btnActive ? 'photo__btn photo__btn_active' : 'photo__btn'}>
                <MyButton onClick={() => handleClick(props.photo.id)}>
                    {btnActive ? 'Убрать из избранного' : 'Добавить в избранное'}
                </MyButton>
            </div>
        </div>
    );
};

export default PhotoItem;