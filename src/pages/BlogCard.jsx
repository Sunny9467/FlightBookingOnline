import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({post}) {
    console.log(post)
  return (
    <>
     <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <img src={post.thumbnail} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{post.metaDescription.slice(0, 100)}...</p>
                <Link
                    to={`/blogs/${post.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                >
                    Read More →
                </Link>
            </div>
        </div>
    </>
  )
}
