import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import NavBar from "../components/navBar.jsx";
import Footer from "../components/footer.jsx";
import BlogCard from "../components/card.jsx";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts)); // Fix: Extracting posts array
    }, []);

    return (
        <>
            <NavBar />

            {/* Grid Container for Cards */}
            
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {posts.map((post) => (
                            <Link to={`/detail/${post.id}`}>
                            <BlogCard key={post.id} title={post.title} time={post.createdAt || "Unknown Date"} />
                            </Link>
                        ))}
                    </div>
                </div>
            
            <Footer />
        </>
    );
};

export default HomePage;
