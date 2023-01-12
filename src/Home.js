
import Slider from '@mui/material/Slider';
import Dropdown from 'react-dropdown';
import { useState } from 'react';

import Zemljevid from './Zemljevid';

const Home = ({setPrimerjava, primerjava}) => {

    var [sl, setSl] = useState([2021, 1]);
    

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
        //{ value: 1997, label: '1997' },
        { value: 2000, label: '2000' },
        { value: 2005, label: '2005' },
        { value: 2010, label: '2010' },
        { value: 2015, label: '2015' },
        { value: 2020, label: '2020' }//,
        //{ value: 2021, label: '2021' }
    ];

    const updateLeto = (e, value) => {
        setSl([value, sl[1]]);
        //console.log(sl);
    }

    const updateMesec = (e, value) => {
        setSl([sl[0], value]);
        //console.log(sl);
    }

    const options = [
        'PM10', 'SO2'
    ];
    const defaultOption = options[0];

    const [ones, setOnes] = useState(defaultOption)

    const updateMap = (e) => {
        setOnes(e.value);
    }

    return ( 
        <div className="home">
            <div className='zgornji'> 
                <Zemljevid slData={sl} setPrimerjava={setPrimerjava} primerjava={primerjava} ones={ones}/>
                <div className='legdiv'>
                    <div className='legenda'></div>
                    <div className="obleg">
                        <p className='legtext'>160 µg/m<sup>3</sup></p>
                        <p className='legtext'>120 µg/m<sup>3</sup></p>
                        <p className='legtext'>80 µg/m<sup>3</sup></p>
                        <p className='legtext'>40 µg/m<sup>3</sup></p>
                        <p className='legtext'>0 µg/m<sup>3</sup></p>
                    </div>
                </div>
            </div>
            <div className="spodnji">
                <div className="drop">
                    <p className="naslov">Prikaz zemljevida:</p>
                    <Dropdown className='dropdown' controlClassName='dropdown-control' menuClassName='dropdown-menu' options={options} onChange={(e) => updateMap(e)} value={defaultOption}/>
                </div>
                <div className='sliderji'> 
                    <div className="blog-list">
                        <Slider id="slider0" min={1997} max={2021} defaultValue={2021} size="big" aria-label="Default" valueLabelDisplay="auto" marks={marksL} onChangeCommitted={updateLeto}/>
                        <Slider id="slider1" min={1} max={12} defaultValue={1} size="big" track={false} marks={marksM} onChangeCommitted={updateMesec}/>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;