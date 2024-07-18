import { coreValues } from "../contants"
import Caption from "./shared/Caption"

const CoreValues = () => {
  return (
    <div className="core-values-bg h-[250px] w-full relative">
        <div className="absolute bg-white left-0 right-0 py-8 max-w-6xl space-y-8 lg:space-y-0 mx-auto mt-[150px] lg:px-5 px-8 lg:flex justify-evenly flex-wrap">
            <section className="space-y-3">
                <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
                    We abide by
                </Caption>
                <h1 className="quicksand-font font-bold text-xl md:text-2xl">Our Core Values</h1>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 gap-y-10 md:gap-y-16">
                {coreValues.map((value) => (
                    <div 
                        key={value.Title}
                        className="h-auto flex gap-3"
                    >
                        <img 
                            src={value.icon} 
                            alt={`${value.Title} icon`} 
                            className="w-[40px] h-[40px]"
                        />
                        <div className="h-full w-[1px] bg-[#D8D8D8]" />
                        <section className="space-y-2">
                            <h2 className="font-normal text-lg md:text-xl rubik-font">{value.Title}</h2>
                            <p className="md:w-[285px] text-sm rubik-font leading-6 text-[#666C89]">{value.text}</p>
                        </section>
                    </div>
                ))}
                
            </section>
        </div>
    </div>
  )
}

export default CoreValues