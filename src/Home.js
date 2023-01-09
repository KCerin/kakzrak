
import Slider from '@mui/material/Slider';
import { useState } from 'react';

import Zemljevid from './Zemljevid';

const Home = ({setPrimerjava, primerjava}) => {

    var [sl, setSl] = useState([1997, 1]);

    const marksM = [
        { value: 1, label: 'Jan' },
        { value: 2, label: 'Feb' },
        { value: 3, label: 'Mar' },
        { value: 4, label: 'Apr' },
        { value: 5, label: 'Maj' },
        { value: 6, label: 'Jun' },
        { value: 7, label: 'Jul' },
        { value: 8, label: 'Avg' },
        { value: 9, label: 'Sep' },
        { value: 10, label: 'Okt' },
        { value: 11, label: 'Nov' },
        { value: 12, label: 'Dec' }];

    const marksL = [
        { value: 1997, label: '1997' },
        { value: 2000, label: '2000' },
        { value: 2005, label: '2005' },
        { value: 2010, label: '2010' },
        { value: 2015, label: '2015' },
        { value: 2020, label: '2020' },
        { value: 2022, label: '2022' }];

    const updateLeto = (e, value) => {
        setSl([value, sl[1]]);
        //console.log(sl);
    }

    const updateMesec = (e, value) => {
        setSl([sl[0], value]);
        //console.log(sl);
    }

    return ( 
        <div className="home">
            <div className='zgornji'> 
                <Zemljevid slData={sl} setPrimerjava={setPrimerjava} primerjava={primerjava}/>
                <div className='legdiv'>
                    <div className='legenda'>
                       <p className='zelo'>Zelo onesnaženo</p>
                       <p className='malo'>Malo onesnaženo</p>
                    </div>
                </div>
            </div>
            <div className='sliderji'> 
                <div className="blog-list">
                    <Slider id="slider0" min={1997} max={2022} defaultValue={1997} size="big" aria-label="Default" valueLabelDisplay="auto" marks={marksL} onChangeCommitted={updateLeto}/>
                    <Slider id="slider1" min={1} max={12} defaultValue={1} size="big" track={false} marks={marksM} onChangeCommitted={updateMesec}/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;