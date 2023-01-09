import DeleteIcon from '@mui/icons-material/Delete';
import parse from 'html-react-parser';
import { useEffect } from 'react';

const Details = ({setPrimerjava, primerjava}) => {


    useEffect(() => {
        console.log(primerjava);
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
                    <p className="naslov">PM10:</p>
                    <p className="naslov">SO2:</p>
                </div>
                <button className="izbrisi" onClick={izbrisi0}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
            <div className="podrobnosti">
                <p className="naslov">Druga občina</p>
                <button className="izbrisi" onClick={izbrisi1}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
            <p className="razlaga">
                PM10 je prah, ki je prisoten v zraku v določenem obdobju. <br/> SO2 je žveplov dioksid, ki je prisoten v zraku v določenem obdobju.
            </p>
        </div>
     );
}
 
export default Details;