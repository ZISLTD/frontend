import { chooseArr } from "../contants"
import Caption from "./shared/Caption"

const ChooseUs = () => {
  return (
    <div className="choose-bg lg:py-16">
        <div className="lg:flex items-center gap-4 max-w-6xl mx-auto px-8 lg:px-4">
            <img 
                src="/images/truck.png" 
                alt="Truck Logistics" 
                className="w-[650px] h-[500px] object-cover hidden lg:block"
            />
            <section className="space-y-3">
                <Caption styles="bg-[#E8E8E8] text-[12px] rubik-font h-[18px] text-center">
                    Why us
                </Caption>
                <h1 className="quicksand-font font-bold text-2xl">Why You Should Chose Us!</h1>
                <p className="font-medium leading-8 text-sm text-[#666C89] lg:w-[90%] text-justify">
                    At Zocroms Integrated Services Ltd, we believe in giving 110% standing as a leading provider of comprehensive Supply Chain Solutions to organizations Our success is driven by a deep understanding of the market and the exceptional expertise of our dedicated team
                </p>
                <div className="grid md:grid-cols-2 gap-x-3 gap-y-6">
                    {chooseArr.map((item) => (
                        <span key={item.text} className="flex gap-2 items-center quicksand-font text-[13px] font-medium leading-5">
                            <img 
                                src={item.icons} 
                                alt={item.text} 
                                className="w-[50px] h-[50px]" 
                            />
                            {item.text}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}

export default ChooseUs