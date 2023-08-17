import MyButton from './UI/button/MyButton';

const PhotoItem = (props) => {
    function handleClick(id) {
    }

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
            <div className="photo__btns">
                <MyButton onClick={() => handleClick(props.photo.id)}>
                    Добавить в избранное
                </MyButton>
            </div>
        </div>
    );
};

export default PhotoItem;