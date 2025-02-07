import React from 'react'

interface BlogDetailsPorbs{
    params:{
        slug:String;

    }
}

const BlogDetails = ({params}:BlogDetailsPorbs) => {
  return (
    <>
    <div>BlogDetails</div>
    <div className="">
      {params.slug}
    </div>
    </>
  )
}

export default BlogDetails