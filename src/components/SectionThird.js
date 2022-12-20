import './SectionThird.css';
import MyButton from './MyButton';
import React, { useContext, useEffect, useRef } from 'react';
import { ContextContainer } from './contexts/ContextContainer';
import { TestContext } from './contexts/TestContext';
import { ButtonContext } from './contexts/ButtonContext';
import { ButtonContextHolder } from './contexts/ButtonContextHolder';

function SectionThid() {
    return (
        <h6>this is section thid</h6>
    )
}

const SectionThird = (props) => {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    const buttonCount = props.buttoncount;
    const setButtonCount = props.setbuttoncount
    const inputVal = props.inputval;
    const setInputVal = props.setinputval;

    const testContext = useContext(TestContext)
    const context = useContext(ContextContainer)

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
        console.log(e.target.value)
    } 
    useEffect(() => {
        document.title = `React Context (& buttonCount: ${buttonCount})`;
    })

    return (
        <ButtonContext.Provider value={buttonCount}>
            <div className="section-third">
                <h4>{props.name} (rendercount: {renderCount.current})</h4>
                <SectionThid />
                <h5>Context (from B1): {context}</h5>
                { 
                    {   
                        "1": {
                            "A":             
                                <>
                                    <MyButton buttoncount={buttonCount} setbuttoncount={setButtonCount} />
                                    <h4>A1 Button Count: {buttonCount}</h4>            
                                </>,
                            "B":
                                <>
                                    <input onChange={handleInputChange}></input>
                                    <p>inputVal props from Section's state: </p>
                                    <h2>{inputVal}</h2>
                                </>,
                            "C": 
                                <>
                                    <p>ineffective button count</p>
                                    <p>(each section has own state?):</p>
                                    <h2>{buttonCount}</h2>
                                </>
                            
                        }[props.label],
                        "2": { 
                            "A": <ButtonContextHolder />,
                            "B": 
                                <>
                                    <p>inputVal props from Section's state: </p>
                                    <h2>{inputVal}</h2>
                                </>,
                            "C": <h2>hardcoded: C2</h2>
                        }[props.label],
                        "3": {
                            "A": <ButtonContextHolder />,
                            "B": 
                                <>
                                    <p>default testContext from upper input:</p>
                                    <h2>{testContext}</h2>
                                </>,
                            "C": 
                                <>
                                    <p>default context from B1 input:</p>
                                    <h2>{context}</h2>
                                </>              
                        }[props.label]
                    }[props.third]
                }
            </div>
        </ButtonContext.Provider>   
    )
}

export default SectionThird;