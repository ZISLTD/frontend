import { useEffect, useRef, useState } from "react"
import { useAnimateI } from "../types"

const UseIntersectAnimate = (props: useAnimateI) => {
    const [hasIntersected, setHasIntersected] = useState(false)

    const myDivref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setHasIntersected(true)
                    props.setIsNavActive(() => props.navValue)
                }
            },
            {}
        )

        if(myDivref.current) observer.observe(myDivref.current) 

        return () => observer.disconnect()
    },[myDivref])

  return (
    <main className="relative">
        <div ref={myDivref} className={`${hasIntersected ? "useAnimate-active" : "useAnimate-inactive"} relative`}>
            {props.children}
        </div>
    </main>
  )
}

export default UseIntersectAnimate