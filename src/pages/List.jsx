import {useState, useEffect, useRef, useContext} from "react";
import {Link} from "react-router-dom";
import {ListContext} from "../context";

import Loader from "../components/UI/Loader/Loader";
import NavBar from "../components/UI/NavBar/NavBar";
import PhotoList from "../components/PhotoList";

import PhotoService from "../API/PhotoService";
import {useFetching} from "../hooks/useFetching";
import {useObserver} from '../hooks/useObserver';
import {getPagesCount} from "../utils/pages";

import PhotoItem from "../components/PhotoItem";

const List = () => {
    const {
        loadedPhotos,
        setLoadedPhotos,
        totalPages,
        setTotalPages,
        page,
        setPage
    } = useContext(ListContext);
    const [limit, setLimit] = useState(20);
    const lastElement = useRef();

    const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async (limit, page) => {
        const response = await PhotoService.getAll(limit, page);
        setLoadedPhotos([...loadedPhotos, ...response.data])

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });
    useObserver(lastElement, page <= totalPages, isPhotosLoading, () => {
        setPage(page + 1);
        fetchPhotos(limit, page);
    })
    useEffect(() => {
        if (loadedPhotos.length === 0) {
            setPage(page + 1);
            fetchPhotos(limit, page);
        }
    }, [])

    return (
        <div className="App">
            <NavBar>
                <Link to={'/'}>Назад на главную</Link>
            </NavBar>
            {photosError &&
                <h2>Произошла ошибка {photosError}</h2>
            }
            {isPhotosLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }

            <PhotoList photos={loadedPhotos} title={'Лист с фото'} Component={PhotoItem}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>

        </div>
    );
};

export default List;