import { useContext } from 'react';
import { TestContext } from './TestContext';
import './ContextHolder.css';

export const ContextHolder = () => {
    const context = useContext(TestContext);
    return (
        <>
            <h3 className="test-context">Test Context: {context}</h3>
        </>
        
    )
}