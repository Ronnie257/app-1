import { useState } from "react"

export const Counter = () => {
    const [counter, setCouter] = useState(0)
    const incCounter = () => {
setCouter(counter+1)   
 }
        return(
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={incCounter}>Increment</button>
        </>
    )
}