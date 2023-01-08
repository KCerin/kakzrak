import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data, isPending, error } = useFetch('http://localhost:8000/1997-01');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList datas={data} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;