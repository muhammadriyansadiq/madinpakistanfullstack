import React from 'react';
import { useGetPostsQuery } from '../../redux/Api.jsx';

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No Data Available</div>;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data && data.map((post,ind) => (
          <li className=' bg-slate-300 my-3' key={ind}><span className=' font-extrabold'>Title : </span>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
