import React, { useState, useEffect } from "react";

import getPosts from "features/home/posts/requests/get-posts";

import PostsView from "features/home/posts/component/view";

const Posts = () =>
{
    const [posts, setPosts] = useState([]);

    useEffect(() =>
    {
        getPosts().then(response => setPosts(response.data));
    }, []);

    return <PostsView posts={ posts }/>;
};

export default Posts;