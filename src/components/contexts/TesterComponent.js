import { useEffect, useState } from "react"
import { TestContext } from "./TestContext"
import { ContextHolder } from "./ContextHolder";
import './TesterComponent.css'

export const TesterComponent = () => {
    const [testState, setTestState] = useState("");
    useEffect(() => {
        console.log(testState)
    })
    return (
        <TestContext.Provider value={testState} >
            <div className="tester">
                <input onChange={(e) => setTestState(e.target.value)} value={testState}></input>
                <ContextHolder />
            </div>
        </TestContext.Provider>
    )
}