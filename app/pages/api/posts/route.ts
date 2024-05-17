"use server"
import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
export const GET = async () => {
   try {
       const posts = await prisma.post.findMany({
           select: {
               title: true,
               content: true,
               id:true,
               created_at:true
           },
           orderBy: {
               created_at: "desc",
           }
       });
       
       return new NextResponse(
           JSON.stringify(posts),
           { status: 200, headers: { "Content-Type": "application/json" } }
       );
   } catch (error) {
       console.error(error);
       return new NextResponse(
           JSON.stringify({ message: "Something went wrong" }),
           { status: 500, headers: { "Content-Type": "application/json" } }
       );
   }
}

export async function create(formData: FormData){
   const title = formData.get("title") as string;
   const content = formData.get("content") as string;
   if(!title.trim() || !content.trim()){
      return;
   }
   await prisma.post.create({
      data:{
         title: title,
         content:content,      
      }
   });
  
  revalidatePath("/");
}
export async function update(formData:FormData){
     const inputId = formData.get("inputId") as string
     const title = formData.get("title") as string
     const content = formData.get("content") as string
     await prisma.post.update({
      where:{
       id:inputId
    },
      data:{
       title: title,
       content: content

      }
})

   revalidatePath("/")
}

export async function deleteP(formData: FormData){
 const inputId = formData.get("inputId") as string
 await prisma.post.delete({
  where: {
       id: inputId,
  },
 }
 )
 revalidatePath("/")

}