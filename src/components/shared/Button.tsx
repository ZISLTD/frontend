import { ButtonProps } from "../../types"

const Button = (props: ButtonProps) => {
  return (
    <button 
        type={props.type} 
        className={`bg-[#3450D1] py-2 text-center text-white outline-none ${props.styles}`}
        onClick={() => {
          if(props.func) return props.func()
          
          return null
        }}
    >
        {props.children}
    </button>
  )
}

export default Button