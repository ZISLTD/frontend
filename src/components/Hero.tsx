import Button from "./shared/Button"
import Caption from "./shared/Caption"

const Hero = () => {
  const moveToAbout = () => {
    const element = document.getElementById("About")
    element?.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
  }
  return (
    <div className='w-full mx-auto hero-section-height hero-background relative'>
        <div className='w-full h-full bg-black opacity-50 absolute' />
        <section className='max-w-6xl space-y-3 rubik-font relative z-10 text-white mx-auto h-full flex flex-col justify-center lg:px-4 px-8'>
          <Caption styles="bg-[#041C37] text-[12px]">
            Logistics & Supply Chain Solutions
          </Caption>
            <h1 className='text-2xl md:text-[40px] font-bold md:w-[500px] leading-10 md:leading-[55px]'>
                Your Gateway to Global Supply Chain and Logistics Solutions
            </h1>
            <p className='md:w-[390px]'>Enabling seamless and precise movement of goods across the globe.</p>
            <Button type="button" styles="w-[150px]" func={moveToAbout}>
              Explore More
            </Button>
        </section>
    </div>
  )
}

export default Hero