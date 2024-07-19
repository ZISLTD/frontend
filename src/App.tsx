import { useState } from "react"
import About from "./components/About"
import ChooseUs from "./components/ChooseUs"
import Contact from "./components/Contact"
import CoreValues from "./components/CoreValues"
import Hero from "./components/Hero"
import MarketServed from "./components/MarketServed"
import Services from "./components/Services"
import NavBar from "./components/shared/NavBar"
import UseIntersectAnimate from "./hooks/UseIntersectAnimate"

function App() {
  const [isNavActive, setIsNavActive] = useState("")

  const date = new Date()

  return (
    <main>
      <NavBar isNavActive={isNavActive} />
      <Hero />
      <div className="space-y-3 py-8" id="About">
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="About">
          <About />
        </UseIntersectAnimate>
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="About">
          <CoreValues />
        </UseIntersectAnimate> 
      </div>
      <div className="space-y-6 py-8" id="Services">
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="Services">
          <Services />
        </UseIntersectAnimate>
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="Services">
          <ChooseUs />
        </UseIntersectAnimate>
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="Services">
          <MarketServed />
        </UseIntersectAnimate>
      </div>
      <div id="Contact">
        <UseIntersectAnimate setIsNavActive={setIsNavActive} navValue="Contact">
          <Contact />
        </UseIntersectAnimate>
      </div>
      <p className="max-w-6xl mx-auto py-2 quicksand-font text-[12px] md:text-sm px-8 lg:px-4">Copyright © Zocroms Integrated Services LTD - {date.getFullYear()}.</p>
    </main>
  )
}

export default App
