import React from 'react'

const HomePosts = ({post}) => {
  return (
    <div className="w-full mt-8 px-4 md:space-x-4 md:flex md:flex-row">
      {/* Left */}
      <div className="w-[90%] sm:w-[60%] md:w-[40%] md:order-first md:flex-shrink-0 flex mx-auto my-auto">
        <img
          src={post.photo}
          alt="Post Photo"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Right */}
      <div className="w-full md:w-[60%] md:order-last md:flex-grow md:flex md:flex-col mt-3 md:mt-0">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm text-gray-500">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 21)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.description.slice(0, 200) + " ...Read more"}
        </p>
      </div>
    </div>
  )
}

export default HomePosts
