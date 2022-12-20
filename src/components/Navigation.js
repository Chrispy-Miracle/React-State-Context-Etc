import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextContainer } from './contexts/ContextContainer';
import './Navigation.css'

const Navigation = () => {
    const value = useContext(ContextContainer)
    return (
        <nav>
            <Link to="/"><h2 className="naVLink">Home/ContextContainer: {value}</h2></Link>
            <Link to="/page2"><h2 className="naVLink">Page Two</h2></Link>
            <Link to="/page3"><h2 className="naVLink">Page Three</h2></Link>
            <Link to="/page4"><h2 className="naVLink">Page Four</h2></Link>
        </nav>
    )
}

export default Navigation;