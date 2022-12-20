import './Section.css';
import SectionThird from './SectionThird';
import { ContextContainer } from './contexts/ContextContainer';
import React, { useState, useRef, useEffect } from 'react';

class ThisThing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {property: props.property, name: props.name}
    }
    render() {
        return (
            <h6>ThisThing {this.state.property} and its name is {this.state.name}</h6>
        )
    }
}

const Section = (props) => {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    const [buttonCount, setButtonCount] = useState(0);
    const [inputVal, setInputVal] = useState("default");
    const label = props.label



    return (
        <div className='section-cont'>
            <h3>Section {label} i{inputVal} </h3>
            <ThisThing property="totally is a property" name="John" />
            <h4>Section Render Count: {renderCount.current}</h4>
            <ContextContainer.Provider value={inputVal}>
                <section className='section'>
                
                    <SectionThird 
                        third="1" 
                        name={`Section ${label}1:`} 
                        label={label} 
                        inputval={inputVal} 
                        setinputval={setInputVal}
                        buttoncount={buttonCount} 
                        setbuttoncount={setButtonCount}  
                    />
               
                <SectionThird 
                    third="2" 
                    name={`Section ${label}2:`} 
                    label={label} 
                    inputval={inputVal} 
                    setinputval={setInputVal}  
                    buttoncount={buttonCount} 
                    setbuttoncount={setButtonCount}
                />
                <SectionThird 
                    third="3" 
                    name={`Section ${label}3:`} 
                    label={label}                     
                    inputval={inputVal} 
                    setinputval={setInputVal}  
                    buttoncount={buttonCount} 
                    setbuttoncount={setButtonCount}/>
                
            </section>
             </ContextContainer.Provider>
        </div>
    )
}

export default Section;