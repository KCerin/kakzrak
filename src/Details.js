import DeleteIcon from '@mui/icons-material/Delete';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

const Details = ({setPrimerjava, primerjava}) => {
    const [present, setPresent] = useState([false, false]);


    useEffect(() => {
        var pm0 = document.getElementById("pm0");
        var pm1 = document.getElementById("pm1");
        var so0 = document.getElementById("so0");
        var so1 = document.getElementById("so1");
        if (primerjava[0].src != null && primerjava[1].src != null) {
            setPresent([true, true]);
            if (primerjava[0].pm10 < primerjava[1].pm10) {
                pm0?.setAttribute("style", "color: #99D627");
                pm1?.setAttribute("style", "color: #FF8630");
            }
            else if (primerjava[0].pm10 > primerjava[1].pm10) {
                pm0?.setAttribute("style", "color: #FF8630");
                pm1?.setAttribute("style", "color: #99D627");
            }
            else{
                pm0?.setAttribute("style", "color: #F5CC3B");
                pm1?.setAttribute("style", "color: #F5CC3B");
            }

            if (primerjava[0].so2 < primerjava[1].so2) {
                so0?.setAttribute("style", "color: #99D627");
                so1?.setAttribute("style", "color: #FF8630");
            }
            else if (primerjava[0].so2 > primerjava[1].so2) {
                so0?.setAttribute("style", "color: #FF8630");
                so1?.setAttribute("style", "color: #99D627");
            }
            else{
                so0?.setAttribute("style", "color: #F5CC3B");
                so1?.setAttribute("style", "color: #F5CC3B");
            }

        }else if (primerjava[0].src != null) {
            pm0?.setAttribute("style", "color: #85586F");
            pm1?.setAttribute("style", "color: #85586F");
            so0?.setAttribute("style", "color: #85586F");
            so1?.setAttribute("style", "color: #85586F");
            setPresent([true, false]);
        }else if (primerjava[1].src != null) {
            pm0?.setAttribute("style", "color: #85586F");
            pm1?.setAttribute("style", "color: #85586F");
            so0?.setAttribute("style", "color: #85586F");
            so1?.setAttribute("style", "color: #85586F");
            setPresent([false, true]);
        }
        //console.log(primerjava);
    },[primerjava]);

    const izbrisi0 = () => {
        setPrimerjava([
            { src: null, obcina: null, pm10: null, so2: null },
            primerjava[1]
        ]);
    }

    const izbrisi1 = () => {
        setPrimerjava([
            primerjava[0],
            { src: null, obcina: null, pm10: null, so2: null }
        ]);
    }

    return ( 
        <div className="details">
            <div className="podrobnosti">
                <p className="naslov">Prva občina</p>
                <div className='prostorzasliko'></div>
                <div className='dpodatki'>
                    <p className="naslov">Ime občine:</p>
                    <div className='infowrap'> {present[0] &&  primerjava[0].obcina}</div>
                    <p className="naslov">Datum:</p>
                    <div className='infowrap'> {present[0] &&  primerjava[0].datum}</div>
                    <p className="naslov">PM10:</p>
                    <div id='pm0' className='infowrap'> {present[0] &&  primerjava[0].pm10} </div>
                    <p className="naslov">SO2:</p>
                    <div id='so0' className='infowrap'> {present[0] &&  primerjava[0].so2} </div>
                </div>
                

                <button className="izbrisi" onClick={izbrisi0}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
            <div className="podrobnosti">
                <p className="naslov">Druga občina</p>
                <div className='prostorzasliko'></div>
                <div className='dpodatki'>
                    <p className="naslov">Ime občine:</p>
                    <div className='infowrap'> {present[1] &&  primerjava[1].obcina}</div>
                    <p className="naslov">Datum:</p>
                    <div className='infowrap'> {present[1] &&  primerjava[1].datum}</div>
                    <p className="naslov">PM10:</p>
                    <div id='pm1' className='infowrap'>{present[1] &&  primerjava[1].pm10} </div>
                    <p className="naslov">SO2:</p>
                    <div id='so1' className='infowrap'> {present[1] &&  primerjava[1].so2} </div>
                </div>

                <button className="izbrisi" onClick={izbrisi1}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
        </div>
     );
}
 
export default Details;