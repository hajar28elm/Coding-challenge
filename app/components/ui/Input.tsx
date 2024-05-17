interface inputProps{
 name: string;
 type: string;
 placeholder?: string;
 value?: string;
 onChange?: () => void;

}
const Input = ({name, type, placeholder, value, onChange}: inputProps) => {
 return(
  <>
    <input className="w-full p-2 border border-gray-200 mr-2 mb-3"
     name={name}
     type={type}
     value={value}
     placeholder={placeholder}
     onChange={onChange} />
  </>
 )
}
export default Input;