import React from "react";

const BlogContent = ({ content }) => {
  if (!content) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <h1 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
        {content.title}
      </h1>
      <p className="text-gray-800 dark:text-neutral-200">{content.body}</p>
    </div>
  );
};

export default BlogContent;
