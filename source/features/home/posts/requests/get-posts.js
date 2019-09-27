import axios from "axios";

const getPosts = () => axios({ method: "GET", url: "https://jsonplaceholder.typicode.com/posts" });

export default getPosts;