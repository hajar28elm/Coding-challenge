"use client"
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { postType } from "@/types/postType";
import AddPost from "./components/posts/AddPost";
import PaginatedPosts from "./components/posts/PaginatedPost";
import Footer from "./components/footer/footer";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [searchResults, setSearchResults] = useState<postType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("pages/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearchResults = (results: postType[]) => {
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar posts={posts} onSearchResults={handleSearchResults} />
      <div className="container py-5 d-flex flex-column align-items-center">
        <span className="h1 font-weight-bold text-uppercase">Welcome to our blog</span>
        {searchResults.length > 0 ? (
          <>
             <AddPost/>
             <PaginatedPosts posts={searchResults} />
          </>
          
        ) : (
          <>
          <AddPost/>
          <PaginatedPosts posts={posts} />
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
