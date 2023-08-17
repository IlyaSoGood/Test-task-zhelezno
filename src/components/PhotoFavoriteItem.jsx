const PhotoFavoriteItem = (props) => {
    return (
        <div className="photo photo_favorite">
            <div className="photo__content">
                <strong>{props.photo.id}. {props.photo.title}</strong>
                <div>
                    {props.photo.body}
                </div>
            </div>
            <div className="photo__img">
                <img src={props.photo.url} alt={props.photo.title}/>
            </div>
        </div>
    );
};

export default PhotoFavoriteItem;