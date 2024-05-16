import { NextResponse } from "next/server";
import Navbar from "./components/navbar/Navbar";
import AddPost from "./components/posts/AddPost";
import CartList from "./components/posts/CardList";
import { prisma } from "@/utils/prisma";
async function getData(){
  try{
    const posts =  await prisma.post.findMany({
     select:{
      title: true,
      content: true,
   },
   orderBy: {
       created_at: "desc",
   }
   });
   
    return posts;
   
}catch(error){
 console.log(error)
 return new NextResponse(
  JSON.stringify({message: "Something went wrong"})
 );

}
}

export default async function Home() {
  const posts = await getData();
  const data = {
       "id": posts.id
       
  }
  return (
    <div>
      <Navbar/>
    <div className="w-screen py-20 flex justify-center flex-col item-center">
      <span className="text-3xl font-extrabold uppercase">Welcome to our blog</span>
           <CartList posts={posts}/>
           <AddPost/>
           
    </div>
    </div>
  );
}
