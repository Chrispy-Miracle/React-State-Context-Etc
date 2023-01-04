import './PageTwo.css';
import PageTwoForm from '../components/PageTwoForm';
import MapFilterReduce from '../components/MapFilterReduce';

const PageTwo = () => {
    return (
        <div className='container flex-col'>
            <h2>This here is page 2!</h2> 
            <PageTwoForm />
            <MapFilterReduce />
        </div>
    )
}

export default PageTwo;