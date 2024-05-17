"use client"
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartList from './CardList';
import { postType } from "@/types/postType";

const PaginatedPosts = ({ posts }: {posts: postType[]}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6; // 3 posts per row, 2 rows

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <Container>
      <CartList posts={selectedPosts} />
      <div className="d-flex justify-content-between mt-3">
        <Button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default PaginatedPosts;
