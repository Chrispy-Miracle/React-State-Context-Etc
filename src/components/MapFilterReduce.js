import React from 'react';
import Map from './Map';
import Filter from './Filter';
import Reduce from './Reduce';
import ForEach from './ForEach';

const MapFilterReduce = () => {
    return (
        <>  
            <ForEach />
            <h3>Map, Filter and Reduce are "higher order functions" and all accept functions:</h3>
            <div className="flex-two map-filt-reduce">
                <Map />
                <Filter />
                <Reduce />
            </div>        
        </>

    )
}

export default MapFilterReduce;