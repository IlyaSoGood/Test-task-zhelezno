const PhotoList = ({photos, title, Component}) => {
    if(!photos.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                Фото не найдены
            </h2>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>

            {photos.map((photo, index) =>
                <Component
                    number={index + 1}
                    photo={photo}
                    key={photo.id}
                    classNames="photo"
                />
            )}
        </div>
    );
};

export default PhotoList;