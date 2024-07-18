import Caption from "./shared/Caption"

const About = () => {
  return (
    <section className="max-w-6xl px-8 lg:px-4 mx-auto flex flex-col justify-center space-y-3 quicksand-font">
        <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
            Who we are
        </Caption>
        <h1 className="quicksand-font font-bold text-xl md:text-2xl">Safe & Reliable Supply <br /> Chain Solutions</h1>
        <p className="font-medium leading-8 text-base md:text-[18px] text-justify">
            Zocroms Integrated Services Ltd, strategically located in Ogun State, Nigeria stands out as a premier provider of comprehensive Supply Chain Solutions With a focus on efficiency, reliability, and cost effectiveness, we cater to diverse industries such as manufacturing, transportation, and oil gas.
            <br /><br />
            Our commitment to continuous improvement and innovation ensures that we deliver exceptional service and solutions, driving growth and efficiency for our clients From logistics and transportation to consulting, our tailored services are designed to meet the dynamic needs of today's industries, supporting our clients on their journey towards operational excellence and delivering customized Supply Chain Solutions that optimize logistics operations and streamline supply chain processes
        </p>
        <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
            Who we are
        </Caption>
        <h1 className="quicksand-font font-bold text-xl md:text-2xl">Our Vision</h1>
        <p className="font-medium leading-8 text-base md:text-[18px]">
            To be a leader in Supply Chain Solutions, offering innovative, efficient, and sustainable services that drive value and growth for our clients and communities
        </p>
        <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
            Who we are
        </Caption>
        <h1 className="quicksand-font font-bold text-xl md:text-2xl">Our Mission</h1>
        <p className="font-medium leading-8 text-base md:text-[18px]">
            To provide exceptional logistics, transportation, and consultation services, harnessing technology, expertise, and a customer centric approach to empower businesses and foster continuous improvement
        </p>
    </section>
  )
}

export default About