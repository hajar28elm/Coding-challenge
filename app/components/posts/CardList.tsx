import React, { useState } from "react";
import Button from "../ui/Button";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import { postType } from "@/types/postType";
import { Row, Col, Card } from 'react-bootstrap';

const CartList = ({ posts }: { posts: postType[] }) => {
  const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (index: number) => {
    setShowDetails(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <Row>
      {posts.map((post, index) => (
        <Col md={4} key={index} className="mb-4 mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <div>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {showDetails[index] ? post.content : `${post.content.substring(0, 10)}...`}
                </Card.Text>
                {showDetails[index] && (
                  <div>
                    <p><strong>Created At:</strong> {new Date(post.created_at).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between mt-3">
                <Button
                  text={showDetails[index] ? "" : ""}
                  onClick={() => toggleDetails(index)}
                  icon= {showDetails[index] ? "bi bi-chevron-up" : "bi bi-chevron-down"}
                  iconSize="32px" iconColor="black"
                />
                <UpdatePost post={post} />
                <DeletePost post={post} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CartList;
