import {useState, useEffect, useRef, useContext} from "react";
import {Link} from "react-router-dom";
import {ListContext} from "../context";

import NavBar from "../components/UI/NavBar/NavBar";
import PhotoList from "../components/PhotoList";
import Loader from "../components/UI/Loader/Loader";

import PhotoService from "../API/PhotoService";
import {useFetching} from "../hooks/useFetching";
import {useObserver} from '../hooks/useObserver';
import {getPagesCount} from "../utils/pages";



const List = () => {
    const {listContext, setListContext} = useContext(ListContext);
    const [photos, setPhotos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    console.log(listContext);

    const lastElement = useRef();

    const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async (limit, page) => {
        const response = await PhotoService.getAll(limit, page);
        setPhotos([...photos, ...response.data]);
        setListContext({
            ...listContext,
            loaded: response.data
        })
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPhotosLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPhotos(limit, page);
    }, [page, limit])

    return (
        <div className="App">
            <NavBar>
                <Link to={'/'}>Назад на главную</Link>
            </NavBar>
            {photosError &&
                <h1>Произошла ошибка {photosError}</h1>
            }
            {isPhotosLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }

            <PhotoList photos={photos} title={'Лист с фото'}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>

        </div>
    );
};

export default List;