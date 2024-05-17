"use client"

import { deleteP } from "@/app/pages/api/posts/route";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { postType } from "@/types/postType";


const DeletePost = ({post}: {post:postType}) => {
 return(
    <Form action={deleteP}>
       <Input
         type="hidden"
         name="inputId"
         value={post.id}

       />
       <Button
       actionButton
       text="delete"
       type="submit"
       />

    </Form>
 )
}
export default DeletePost;