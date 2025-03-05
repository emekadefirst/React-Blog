import React from "react";


const BlogCard = (props) => {
    return (
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            {/* <img className="w-full h-auto rounded-t-xl" src={props.image} alt={props.title}/> */}
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {props.title}
                    </h3>
                </div>
        </div>
    );
};

export default BlogCard;