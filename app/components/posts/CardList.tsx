import React from "react";
import { Post } from '@prisma/client';

interface postProps{
  posts: Post[]
}
const CartList = ({posts}: postProps) =>{
    return(
      <>
      {posts.map((post, index) => (
     <div className="card" style={{width: "18rem"}} key={index}>
     <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.content}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>))}
</>
    )
}
export default CartList;
