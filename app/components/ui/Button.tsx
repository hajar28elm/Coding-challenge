"use client"
import { ReactNode } from "react"
interface buttonProps{
 type?: "button" | "submit" | "reset";
 text: string | ReactNode;
 onClick?: () =>void;
 actionButton?: boolean;
 icon?: string;
}
const Button = ({
   type,
   text,
   onClick,
   actionButton,
   icon,
}: buttonProps) =>{
 return(
  <>
    <button
      onClick = {onClick}
      type= {type}
      className={actionButton ? "action-button" : ""}>
         {icon && <i className={icon}></i>}
         {text}
               
    </button>
    
  </>
 )

}
export default Button;
