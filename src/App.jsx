import {useState} from "react";

import './styles/App.scss';

import AppRouter from './components/AppRouter';
import { ListContext } from './context';


const App = () => {
    const [loadedPhotos, setLoadedPhotos] = useState([]);
    const [favoritePhotos, setFavoritePhotos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    return (
        <ListContext.Provider value={{
            loadedPhotos,
            setLoadedPhotos,
            totalPages,
            setTotalPages,
            page,
            setPage,
            favoritePhotos,
            setFavoritePhotos
        }}>
            <AppRouter/>
        </ListContext.Provider>
    );
};

export default App;