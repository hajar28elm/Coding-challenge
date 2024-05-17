"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Button from "../ui/Button";

interface NavbarProps {
  posts: postType[];
  onSearchResults: (results: postType[]) => void;
}

interface postType {
  title: string;
  content: string;
  id: string;
  created_at:Date;
}

const Navbar: React.FC<NavbarProps> = ({ posts, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<postType[]>([]);

  const handleSearch = () => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    onSearchResults(results);
  };

  return (
    <nav style={navStyle}>
      <div style={leftStyle}>Navbar</div>
      <div style={rightStyle}>
        <input
          type="text"
          className="mr-3"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)
          }
        />
        <Button text="" onClick={handleSearch} icon="bi bi-search" iconSize="20px" iconColor="black"/>
      </div>
    </nav>
  );
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: 'lightblue',
};

const leftStyle: React.CSSProperties = {
  flex: 1,
};

const rightStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'right',
};

export default Navbar;
