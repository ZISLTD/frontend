import { services } from "../contants"
import ServiceCard from "./shared/ServiceCard"

const Services = () => {
  return (
    <div className="mt-[450px] md:mt-[220px] services-bg py-10">
        <div className="max-w-6xl mx-auto space-y-6 px-8 lg:px-2">
            <h1 className="text-center text-2xl quicksand-font text-[#1C1F35] font-bold">Our Services</h1>
            <section className="flex justify-center flex-wrap gap-8">
              {services.map((service) => (
                <ServiceCard key={service.text} imgSrc={service.icon} text={service.text} />
              ))}
            </section>
        </div>
    </div>
  )
}

export default Services