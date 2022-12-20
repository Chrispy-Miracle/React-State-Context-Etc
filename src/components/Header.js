import './Header.css';

const Header = (props) => {
    return (
        <>
            <h1>React State Management with Context</h1>
            <h3>App Component Render Count using "useRef": {props.renderCount.current}</h3>
            <h2>This is an attempt to figure out once and for all:</h2>
            <ul>
                <li>How to manage state</li>
                <li>How to use Context</li>
            </ul>  
        </>
    )
}

export default Header;