import DeleteIcon from '@mui/icons-material/Delete';
const Details = () => {
    return ( 
        <div className="details">
            <div className="podrobnosti">
                <p className="naslov">Prva občina</p>
                <button className="izbrisi"><DeleteIcon fontSize="large" className='info'></DeleteIcon></button>
            </div>
            <div className="podrobnosti">
                <p className="naslov">Druga občina</p>
                <button className="izbrisi"><DeleteIcon fontSize="large" className='info'></DeleteIcon></button>
            </div>
            <p className="razlaga">
                PM10 je prah, ki je prisoten v zraku v določenem obdobju. <br/> SO2 je žveplov dioksid, ki je prisoten v zraku v določenem obdobju.
            </p>
        </div>
     );
}
 
export default Details;