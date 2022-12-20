import { useState } from 'react';
import './PageTwo.css';


const PageTwo = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("00/00/0000");
    const [radio, setRadio] = useState(false);   
    const [select, setselect] = useState(""); 

    // useEffect(() => {
    //     console.log(lastName)
    // })

    const formObject = {
        firstName: firstName,
        lastName: lastName,
        number: number,
        date: date,
        radio: radio,
        select: select
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formObject);
    }

    return (
        <div className='container flex-col'>
            <h1>This here is page 2!</h1> 
            <form className="page-two-form flex-col">
                <div className='flex'>
                    <input type='text' placeholder='First Name' onChange={e=>setFirstName(e.target.value)} value={firstName}></input>   
                    <input type="text" placeholder='Last Name' onChange={e=>setLastName(e.target.value)} value={lastName}></input>                    
                </div>
                <div className='flex'>
                    <input type="number" placeholder="Choose a number:" onChange={e=>setNumber(e.target.value)} value={number}></input>   
                    <input type='date' onChange={e=>setDate(e.target.value)} defaultValue={date}></input>                    
                </div>
                <div className='flex'>
                    <div className='radio flex'>
                        <h3>Are You?</h3>
                        <label htmlFor="true">Yes</label> 
                        <input name="are-you" id="true" type='radio' className='radio-btn' value={radio} onClick={()=>setRadio(true)}></input>  
                        <label htmlFor="false">Nope</label> 
                        <input name="are-you" id="false" type='radio' className='radio-btn' value={radio} onClick={()=>setRadio(false)} defaultChecked></input>  
                    </div>
                    <select name="select" >
                        <option default hidden value={null}>Select one:</option>
                        <option value={select} onClick={()=>setselect("hi")}>hi</option>
                        <option value={select} onClick={()=>setselect("bye")}>bye</option>
                    </select>
                </div>
                <button className="form-btn" type="submit"  onClick={(e) => handleFormSubmit(e)}>Submit</button>
            </form>       
        </div>

    )
}

export default PageTwo;