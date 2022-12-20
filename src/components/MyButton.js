import './MyButton.css';
import { useEffect } from 'react';

const MyButton = (props) => {
    const buttonCount = props.buttoncount;
    const setButtonCount = props.setbuttoncount;
    
    useEffect(()=>console.log(buttonCount),[buttonCount])

    return (
        <>
            <button onClick={()=> setButtonCount(buttonCount + 1)}>Click to increase A1's count!</button>
            <button onClick={()=> setButtonCount(buttonCount - 1)}>Click to decrease A1's count!</button>
        </>
    )
}

export default MyButton;