
import Sliders from './Sliders';
import useFetch from './useFetch';
import Zemljevid from './Zemljevid';

const Home = () => {

    const {data, isPending, error } = useFetch('http://localhost:8000/1997-2');

    return ( 
        <div className="home">
            <div className='zgornji'>
                <Zemljevid />
                <div className='legdiv'>
                    <div className='legenda' />
                </div>
            </div>
            <div className='sliderji'>
                {data && <Sliders datas={data} title="Vse postaje 1997-01!" />}
            </div>
        </div>
     );
}
 
export default Home;