
import Sliders from './Sliders';
import useFetch from './useFetch';

const Home = () => {

    const {data, isPending, error } = useFetch('http://localhost:8000/1997-2');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Sliders datas={data} title="Vse postaje 1997-01!" />}
            
        </div>
     );
}
 
export default Home;