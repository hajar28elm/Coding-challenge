import { NextResponse } from "next/server";
import Navbar from "./components/navbar/Navbar";
import AddPost from "./components/posts/AddPost";
import CartList from "./components/posts/CardList";
import { prisma } from "@/utils/prisma";
import { postType } from "@/types/postType";
async function getData(): Promise<postType[]>{
  try{
    const posts =  await prisma.post.findMany({
     select:{
      title: true,
      content: true,
      id:true,
      
   },
   orderBy: {
       created_at: "desc",
   }
   });
   
    return posts;
   
}catch(error){
  console.error(error);
  throw new Error('Something went wrong');}
}

export default async function Home() {
  const posts = await getData();
  return (
    <div>
      <Navbar/>
    <div className="container py-5 d-flex flex-column align-items-center">
      <span className="h1 font-weight-bold text-uppercase">Welcome to our blog</span>
           <CartList posts={posts}/>
           <AddPost/>
           
    </div>
    </div>
  
  
  );
}
