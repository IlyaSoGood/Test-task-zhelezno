import PhotoItem from './PhotoItem';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';

const photoList = ({photos, title}) => {
    if(!photos.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Фото не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>

            {photos.map((photo, index) =>
                <PhotoItem
                    number={index + 1}
                    photo={photo}
                    key={photo.id}
                    classNames="photo"
                />
            )}

            {/*<TransitionGroup>*/}
            {/*    {photos.map((photo, index) =>*/}
            {/*        <CSSTransition*/}
            {/*            key={photo.id}*/}
            {/*            timeout={500}*/}
            {/*            classNames="photo"*/}
            {/*        >*/}
            {/*            <PhotoItem number={index + 1} photo={photo} />*/}
            {/*        </CSSTransition>*/}
            {/*    )}*/}
            {/*</TransitionGroup>*/}

        </div>
    );
};

export default photoList;