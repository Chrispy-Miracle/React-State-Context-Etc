import { useContext, useEffect } from 'react';
import { TestContext } from '../components/contexts/TestContext';
import './MainContent.css'
import Section from '../components/Section';
import { TesterComponent } from '../components/contexts/TesterComponent';

const MainContent = () => {
    const context = useContext(TestContext);
    useEffect(() => {
        console.log(context)
    })
    return (
        <TestContext.Provider value={context}>
            <div className="flex-cont">
                <TesterComponent />
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