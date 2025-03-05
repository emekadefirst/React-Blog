import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ Fix: Import useParams
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import BlogContent from "../components/detail";

const DetailPage = () => {
    const { id } = useParams(); // ✅ Extract the post ID from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]); // ✅ Fetch new post when ID changes

    if (!post) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div>
            <NavBar />
            <BlogContent content={post} /> 
            <Footer />
        </div>
    );
};

export default DetailPage;
