'use client'
import BlogJson from '@/app/components/blogjsan/page'
// import VercelApi from '@/app/components/vercelapi/page'
import { Blog, BlogTypes } from '@/app/constans'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
  const route = useRouter()
  const [blogs, setBlogs] = useState<BlogTypes[]>([]);

  useEffect(() => {
    setBlogs(Blog);
  }, []);

  return (
    <>
      <div className="container h-full flex flex-wrap gap-4">
        {blogs.map((blog, index) => (
          <div className="bg-my_accept p-4 rounded-md shadow-lg flex flex-col items-center" key={index}>
            {/* Şəkil */}
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={blog.image}
                alt="Blog Image"
                layout="fill" // ✅ Şəkil div-in içini tam doldurur
                objectFit="contain" // ✅ Şəkilin ölçüsünü qoruyur
                className="rounded-md"
                unoptimized
              />
            </div>

            {/* Blog məlumatları */}
            <div className="text-center mt-4">
              <div className="bg-black text-white font-semibold p-2 rounded">{blog.title}</div>
              <div className="text-gray-700">{blog.dec}</div>
              <div className="text-gray-500">{blog.date}</div>
              <button 
                className="mt-2 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
                onClick={() => route.push(`blog/${blog.id}`)}
              >
                Detail
              </button>
              <Link href={`blog/${blog.title}`}>
              <button 
                className="mt-2 px-4 py-2 bg-my_accept-400 text-white rounded hover:bg-orange-500"
              >
                Detail
              </button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogPage;
