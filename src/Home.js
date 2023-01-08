import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import Zemljevid from './Zemljevid';

const Home = () => {

    const {data, isPending, error } = useFetch('http://localhost:8000/1997-01');

    return ( 
        <div className="home">
            <div className='zgornji'>
                <Zemljevid />
                <div className='legdiv'>
                    <div className='legenda' />
                </div>
            </div>
            <div className='sliderji'>
                <p>Pendazo</p>
            </div>
        </div>
     );
}
 
export default Home;