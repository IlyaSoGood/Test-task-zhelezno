import NavBar from "../components/UI/NavBar/NavBar";
import {Link} from "react-router-dom";
import PhotoService from "../API/PhotoService";

const List = () => {


    return (
        <div>
            <NavBar>
                <Link to={'/'}>Главная</Link>
            </NavBar>
            <h1>Лист с записями</h1>

        </div>
    );
};

export default List;