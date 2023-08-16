import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не были найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
                {posts.map((post, index) =>
                        <PostItem
                            // remove={remove}
                            number={index + 1}
                            post={post}
                            key={post.id}
                            classNames="post"
                        />
                )}

        </div>
    );
};

export default PostList;