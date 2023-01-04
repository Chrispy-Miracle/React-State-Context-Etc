import { useContext, useEffect, useRef } from 'react';
import { TestContext } from '../components/contexts/TestContext';
import './MainContent.css';
import Header from '../components/Header';
import Section from '../components/Section';
import { TesterComponent } from '../components/contexts/TesterComponent';

const MainContent = () => {
    const context = useContext(TestContext);
    useEffect(() => {
        console.log(context)
    })

    const renderCount = useRef(0);

    useEffect(() => {
      renderCount.current = renderCount.current + 1;
    })
    return (
        <TestContext.Provider value={context}>
            <div className="flex-cont">
                <TesterComponent />
                <Header renderCount={renderCount} /> 
                <main className="main-content">
                    <Section label="A"/>
                    <Section label="B"/>
                    <Section label="C"/>
                </main>
            </div>
        </TestContext.Provider>
    )
}

export default MainContent;