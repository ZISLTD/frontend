import { useEffect, useState } from 'react'
import { NavLink } from '../../contants'

const NavBar = ({isNavActive}: {isNavActive: string}) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMobileActive, setIsMobileActive] = useState(false)

    useEffect(() => {
        const func = () => {
          if (window.scrollY > 0){
            setIsScroll(() => true)
          }
          else setIsScroll(() => false)
        }
        window.addEventListener("scroll", func)
    
        return () => window.removeEventListener("scroll", func)
    },[])

    const scrollToView = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
    }
  return (
    <header className={`bg-white w-full ${isScroll && "fixed z-20 shadow"} px-8 lg:px-4`}>
        <nav className='w-full max-w-6xl mx-auto flex justify-between items-center h-[80px] quicksand-font font-medium'>
            <img 
                src="/logo.svg" 
                alt="Zocroms Integarted Services LTD company logo" 
                className='w-[100px] h-[100px]'
            />
            <section className='lg:flex gap-6 hidden'>
                {NavLink.map((link)=> {
                    const isActive = isNavActive == link 
        
                    return (
                        <a onClick={() => scrollToView(link)} key={link} className={`cursor-pointer ${isActive && "text-blue-400"}`}>
                            {link}
                        </a>
                    )
                })}
            </section>
            <section className='flex gap-6 items-center'>

                <a href='tel:+2348037600173' className='md:flex gap-2 items-center hidden'>
                    <img 
                        src="/icons/phone.svg" 
                        alt="Phone Icon" 
                        className='w-[30px] h-[30px]'
                    />
                    <span className='text-sm'>
                        +234 803 760 0173
                    </span>
                </a>
                <span 
                    className='text-3xl cursor-pointer lg:hidden'
                    onClick={() => setIsMobileActive((prev) => !prev)}
                >
                    &#9776;
                </span>
            </section>
        </nav>
        <section className={`lg:hidden space-y-3 py-3 text-sm rubik-font ${!isMobileActive ? "hidden" : "mobile-nav"}`}>
            {NavLink.map((link)=> {
                const isActive = isNavActive == link 
    
                return (
                    <a onClick={() => scrollToView(link)} key={link} className={`cursor-pointer block ${isActive && "text-blue-400"}`}>
                        {link}
                    </a>
                )
            })}
        </section>
    </header>
  )
}

export default NavBar