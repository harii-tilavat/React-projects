import { useLoaderData } from "react-router-dom";

import PostList from "../components/PostList";

function BlogPage() {
  const posts = useLoaderData();
  return <PostList posts={posts} />;
}

export default BlogPage;

export function loader() {
  console.log("BLOG LOADING...");
  return fetch("https://jsonplaceholder.typicode.com/posts");
}
