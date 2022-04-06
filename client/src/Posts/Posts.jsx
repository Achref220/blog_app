import React from 'react'
import Post from '../Components/Post/Post'
import './Posts.css'

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
        {posts.map((p) => (
          <Post key={p._id} posts={p}/>
        ))}
    </div>
  )
}

export default Posts