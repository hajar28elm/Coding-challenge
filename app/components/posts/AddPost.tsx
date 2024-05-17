import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/pages/api/posts/route";
const AddPost = () =>{
  return(
   <Form action={create} className="w-1/2 m-auto">
       <div className="flex">
        
        <Input name={"title"} type={"text"} placeholder="Title of the post" />
        <Input name={"content"} type={"text"} placeholder="Content of the post"  />
        <Button text="" type="submit" icon="bi bi-plus-circle-fill" iconSize="32px" iconColor="black"/>
       

       </div>
   </Form>

  )
}
export default AddPost;