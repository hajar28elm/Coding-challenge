"use server"
import { NextResponse } from "next/server";
import { PrismaClient} from '@prisma/client';
import { prisma } from "@/utils/prisma";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";
import { revalidatePath } from "next/cache";
export const GET = async () =>{
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