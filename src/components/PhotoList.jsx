import {useContext, useEffect, useState} from "react";

const PhotoList = ({photos, title, Component}) => {
    const [photosList, setPhotosList] = useState(photos.map((item, i) => {
        return {
            ...item, order: i + 1
        }
    }));
    const [currentPhoto, setCurrentPhoto] = useState(null);

    useEffect(() => {
        setPhotosList(photos.map((item, i) => {
            return {
                ...item, order: i + 1
            }
        }))

    }, [photos])

    if(!photos.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                Фото не найдены
            </h2>
        )
    }

    function dragStartHandler(e, photo) {
        setCurrentPhoto(photo)
    }
    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }
    function dropHandler(e, photo) {
        e.preventDefault();
        setPhotosList(photosList.map(p => {
            if (p.id === photo.id) {
                return {...p, order: currentPhoto.order}
            }
            if(p.id === currentPhoto.id) {
                return {...p, order: photo.order}
            }
            return p
        }))
        e.target.style.background = 'white'
    }

    const sortCards = (a,b) =>{
        if (+a.order > +b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>


            {photosList.sort(sortCards).map((photo, index) =>
                <Component
                    number={index + 1}
                    photo={photo}
                    key={photo.id}
                    classNames="photo"
                    dragOptions={{
                        draggable: true,
                        onDragStart: (e) => dragStartHandler(e, photo),
                        onDragLeave: (e) => dragEndHandler(e),
                        onDragEnd: (e) => dragEndHandler(e),
                        onDragOver: (e) => dragOverHandler(e),
                        onDrop: (e) => dropHandler(e, photo)
                    }}
                />
            )}
        </div>
    );
};

export default PhotoList;