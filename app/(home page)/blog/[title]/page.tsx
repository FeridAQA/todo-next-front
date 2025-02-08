import { Blog } from '@/app/constans';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogDetailPage {
  params: {
    title: string;
  };
}



export default async function BlogDetails({ params }: BlogDetailPage) {
  const { title } = await params;

  const blog = Blog.find((blog) => blog.title === decodeURIComponent(title?.toString()));

  return blog ? (
    <>
      <div className="text-center text-xl font-bold my-4">{blog.title}</div>

      {/* Şəkil */}
      <div className="relative w-[300px] h-[300px] mx-auto">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="contain" // Əgər tam doldurmasını istəyirsinizsə, bunu "cover" edin
          className="rounded-md"
          unoptimized
        />
      </div>

      {/* Blog detalları */}
      <div className="text-center mt-4">
        <p className="text-gray-700">{blog.dec}</p>
        <p className="text-gray-500">{blog.date}</p>
        <Link href="/blog">
        <div className="bg-black text-white inline-block px-4 py-2 mt-4 rounded-md cursor-pointer">
          Back to Blog
        </div>
      </Link>
      </div>
    </>
  ) : (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold text-red-500">404 - NOT FOUND</h1>
      <Link href="/blog">
        <div className="bg-black text-white inline-block px-4 py-2 mt-4 rounded-md cursor-pointer">
          Back to Blog
        </div>
      </Link>
    </div>
  );
};


