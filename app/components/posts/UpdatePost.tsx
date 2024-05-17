"use client"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Form from "../ui/Form"
import { update } from "@/app/pages/api/posts/route"
import { postType } from "@/types/postType";
import { useState } from "react"



const UpdatePost = ({ post}: {post:postType}) => {
 console.log(post)
 const [updatePost, setUpdatePost] = useState(false)
 const handleUpdate = () => {
  setUpdatePost(!updatePost)
 }
 const handleSubmit = () =>{
    setUpdatePost(false)
 }

 return(
       <div>
          <Button
            onClick={handleUpdate}
            text="handleEdit"
            actionButton
          />
          {
            updatePost?(
             <Form action={update}  onSubmit={handleSubmit}>
                <Input name="inputId" value={post.id} type="hidden" />
                <Input name="title" type="text"  />
                <Input name="content" type="text"  />
             <Button
                actionButton
                 type="submit"
                 text="update"
              /> 
                <Button
                  type="submit"
                  text="save"
                />

              </Form>

            ): null
          }
      </div>
 );
}
export default UpdatePost