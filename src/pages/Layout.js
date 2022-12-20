import { useRef, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Layout = () => {
    const renderCount = useRef(0);

    useEffect(() => {
      renderCount.current = renderCount.current + 1;
    })

    return (
        <div className="App">
            <Navigation />
            <Header renderCount={renderCount} /> 
            <Outlet />           
        </div>
    )
}

export default Layout;