import { marketServed, sponsors } from "../contants"
import Caption from "./shared/Caption"

const MarketServed = () => {
  return (
    <div className="bg-white py-8 max-w-6xl space-y-8 lg:spacey-0 mx-auto px-8 lg:px-5 flex justify-between flex-wrap">
        <section className="space-y-3">
            <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
                Operating in
            </Caption>
            <h1 className="quicksand-font font-bold text-2xl">Market Served</h1>
        </section>
        <section className="grid md:grid-cols-2 grid-rows-2 gap-5 gap-y-12">
            {marketServed.map((value) => (
                <div 
                    key={value.title}
                    className="h-auto flex gap-5"
                >
                    <img 
                        src={value.icon} 
                        alt={`${value.title} icon`} 
                        className="w-[40px] h-[40px]"
                    />
                    <div className="h-full w-[1px] bg-[#D8D8D8]" />
                    <section className="space-y-2">
                        <h2 className="font-normal text-lg md:text-xl rubik-font">{value.title}</h2>
                        <p className="md:w-[280px] text-sm rubik-font leading-6 text-[#666C89]">{value.text}</p>
                    </section>
                </div>
            ))}
            
        </section>
        <section className="flex justify-evenly w-full mx-auto items-center bg-white">
          {sponsors.map((sponsor) => {
            const isBatok = sponsor.includes("Batok-Logo")

            return <img 
              key={sponsor} 
              src={sponsor} 
              alt="Partners" 
              className={`${isBatok ? "w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]" : "w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[100px]"} mix-blend-luminosity hover:mix-blend-normal cursor-pointer`}
            />
          })}
        </section>
    </div>
  )
}

export default MarketServed