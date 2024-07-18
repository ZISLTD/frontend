import { ServiceCardProps } from "../../types"

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="w-full md:w-[310px] lg:w-[260px] py-7 px-3 h-auto flex items-center gap-4 service-card-bg rounded shadow">
      <img 
        src={props.imgSrc}
        alt={props.text}
        className="w-[40px] h-[40px]"
      />
      <div className="bg-[#D8D8D8] w-[1px] h-full" />
      <p className="text-white text-sm leading-5">{props.text}</p>
    </div>
  )
}

export default ServiceCard