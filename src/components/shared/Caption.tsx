import { CaptionProps } from "../../types"

const Caption = (props: CaptionProps) => {
  return (
    <div className={`flex gap-2 w-[fit-content] ${props.styles}`}>
        <div className="h-full w-[3px] bg-[#3450D1]" />
        <span className="px-1">
          {props.children}
        </span>
    </div>
  )
}

export default Caption