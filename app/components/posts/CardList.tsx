import React from "react";
import Button from "../ui/Button";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import { postType } from "@/types/postType";

interface postProps{
  posts: postType[]
}
const CartList = ({posts}: postProps) =>{
    return(
      <>
      {posts.map((post, index) => (
     <div className="card" style={{width: "18rem"}} key={index}>
     <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.content}</p>
    {/* <a href="#" className="btn btn-primary">Update</a> */}
    <UpdatePost post={post}/>
    <DeletePost post={post}/>
  </div>
</div>))}
</>
    )
}
export default CartList;

