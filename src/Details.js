import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

const Details = ({setPrimerjava, primerjava}) => {
    const [present, setPresent] = useState([false, false]);
    const [loadedE, setLoadedE] = useState(false);

    const grbi = [
        { "obcina": "Ajdovščina", "grb": "https://www.ajdovscina.si/mma/grb_obcine_ajdovscina_/2017082813232908/min/?m=1503919408" },
        { "obcina": "Celje", "grb": "https://upload.wikimedia.org/wikipedia/commons/0/02/Coat_of_arm_of_Celje.png" },
        { "obcina": "Hrastnik", "grb": "https://www.osnhr.si/wp-content/uploads/grb-Hrastnik.jpg" },
        { "obcina": "Krško", "grb": "https://kam.si/wp-content/uploads/2006/10/obcine_krsko_grb.jpg" },
        { "obcina": "Ljubljana", "grb": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Blason_ville_si_Ljubljana_%28Slov%C3%A9nie%29.svg/800px-Blason_ville_si_Ljubljana_%28Slov%C3%A9nie%29.svg.png" },
        { "obcina": "Maribor", "grb": "https://i0.wp.com/www.travel-slovenia.si/wp-content/uploads/2014/08/travel-slovenia-maribor-coat-of-arms.png?resize=300%2C359&ssl=1" },
        { "obcina": "Slovenj Gradec", "grb": "https://upload.wikimedia.org/wikipedia/commons/9/98/Slovenj_Gradec_grb.png" },
        { "obcina": "Šoštanj", "grb": "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C5%A0o%C5%A1tanj.png" },
        { "obcina": "Trbovlje", "grb": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Trbovlje.png/161px-Trbovlje.png" },
        { "obcina": "Velenje", "grb": "https://www.vtvstudio.com/wp-content/uploads/2012/08/mo-velenje-grb.jpg" },
        { "obcina": "Zagorje ob Savi", "grb": "https://upload.wikimedia.org/wikipedia/commons/1/14/Coat_of_arms_of_Zagorje_ob_Savi.png" },
        { "obcina": "Murska Sobota", "grb": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/MS_seal.svg/150px-MS_seal.svg.png" },
        { "obcina": "Nova Gorica", "grb": "https://kam.si/wp-content/uploads/2006/10/obcine_nova_gorica_grb.jpg" },
        { "obcina": "Kočevje", "grb": "https://www.kocevje.si/Datoteke/UpravljalecDatotek/66/Nagrade,%20priznanja%20in%20plakete/Grb.jpg" },
        { "obcina": "Koper", "grb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSblJmBg6mnM3q9hpiB1eqf8WTNm--gRfUhA&usqp=CAU" },
        { "obcina": "Lendava", "grb": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Lendava.grb.png" },
        { "obcina": "Kanal", "grb": "https://upload.wikimedia.org/wikipedia/commons/7/76/Kanal_ob_So%C4%8Di.png" },
        { "obcina": "Tolmin", "grb": "https://zeljko-heimer-fame.from.hr/images/si)to96.gif" },
        { "obcina": "Črna na Koroškem", "grb": "https://upload.wikimedia.org/wikipedia/commons/7/75/%C4%8Crna_na_Koro%C5%A1kem.png" },
        { "obcina": "Kranj", "grb": "https://www.kranj.si/files/janis/grb-zastava-mok/grb-mok.jpg" },
        { "obcina": "Novo mesto", "grb": "https://novomesto.si/img/2017090611080286/mid/Grb_barvni_-_po_odloku.jpg" },
        { "obcina": "Škofja Loka", "grb": "https://www.skofjaloka.si/Datoteke/UpravljalecDatotek/131/Simboli%20obcine/Grb_Ob%C4%8Dina_%C5%A0kofja_Loka_BARVNI_w3000px.png" },
        { "obcina": "Miklavž na Dravskem polju", "grb": "https://miklavz.si/Datoteke/Slike/NoviceGalerija/l_439.jpg" },
        { "obcina": "Ptuj", "grb": "https://www.kamra.si/wp-content/uploads/2021/01/Grb_MOP_20170201_120934.jpg" },
        { "obcina": "Ruše", "grb": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Ru%C5%A1e.png" },
        { "obcina": "Medvode", "grb": "https://www.medvode.si/Datoteke/UpravljalecDatotek/85/ObcinaMedvode-grb.jpg" },
        { "obcina": "Grosuplje", "grb": "https://www.grosuplje.si/Datoteke/UpravljalecDatotek/50/grb%20Ob%C4%8Dine%20Grosuplje.jpg" }
    ]

    const [grba, setGrba] = useState([null, null]);


    useEffect(() => {
        var pm0 = document.getElementById("pm0");
        var pm1 = document.getElementById("pm1");
        var so0 = document.getElementById("so0");
        var so1 = document.getElementById("so1");
        if (primerjava[0].obcina != null && primerjava[1].obcina != null) {
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

        }else if (primerjava[0].obcina != null) {
            pm0?.setAttribute("style", "color: #85586F");
            pm1?.setAttribute("style", "color: #85586F");
            so0?.setAttribute("style", "color: #85586F");
            so1?.setAttribute("style", "color: #85586F");
            setPresent([true, false]);
        }else if (primerjava[1].obcina != null) {
            pm0?.setAttribute("style", "color: #85586F");
            pm1?.setAttribute("style", "color: #85586F");
            so0?.setAttribute("style", "color: #85586F");
            so1?.setAttribute("style", "color: #85586F");
            setPresent([false, true]);
        }
        //console.log(primerjava);

        for (let i = 0; i < grbi.length; i++) {

            if (grba[0] == null && primerjava[0].obcina === grbi[i].obcina) {
                setGrba([grbi[i].grb, grba[1]]);
                //console.log("Got 1.");
                continue;
            }
            if (grba[1] == null && primerjava[1].obcina === grbi[i].obcina) {
                setGrba([grba[0], grbi[i].grb]);
                //console.log("Got 2.");
                continue;
            }
        }
    },[primerjava]);

    useEffect(() =>{

    },[grba])

    const izbrisi0 = () => {
        setGrba([null, grba[1]]);
        setLoadedE(false);
        setPrimerjava([
            { obcina: null, pm10: null, so2: null },
            primerjava[1]
        ]);
    }

    const izbrisi1 = () => {
        setGrba([grba[0], null]);
        setPrimerjava([
            primerjava[0],
            { obcina: null, pm10: null, so2: null }
        ]);
    }

    return ( 
        <div className="details">
            <div className="podrobnosti">
                <p className="naslov">Prva občina</p>
                <div className='prostorzasliko'>
                    {/*present[0] && <img src={grba[0]} alt=""/>*/}
                    <img
                        style={loadedE ? {} : { display: 'none' }}
                        src={grba[0]}
                        onLoad={() => setLoadedE(true)}
                        alt= ""
                    />
                </div>
                <div className='dpodatki'>
                    <p className="naslov">Ime občine:</p>
                    <div className='infowrap'> {present[0] &&  primerjava[0].obcina}</div>
                    <p className="naslov">Datum:</p>
                    <div className='infowrap'> {present[0] &&  primerjava[0].datum}</div>
                    <p className="naslov">PM10 (µg/m<sup>3</sup>):</p>
                    <div id='pm0' className='infowrap'> {present[0] &&  primerjava[0].pm10} </div>
                    <p className="naslov">SO2 (µg/m<sup>3</sup>):</p>
                    <div id='so0' className='infowrap'> {present[0] &&  primerjava[0].so2} </div>
                </div>
                

                <button className="izbrisi" onClick={izbrisi0}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
            <div className="podrobnosti">
                <p className="naslov">Druga občina</p>
                <div className='prostorzasliko'>
                    {present[1] && <img src={grba[1]} alt=""/>}
                </div>
                <div className='dpodatki'>
                    <p className="naslov">Ime občine:</p>
                    <div className='infowrap'> {present[1] &&  primerjava[1].obcina}</div>
                    <p className="naslov">Datum:</p>
                    <div className='infowrap'> {present[1] &&  primerjava[1].datum}</div>
                    <p className="naslov">PM10 (µg/m<sup>3</sup>):</p>
                    <div id='pm1' className='infowrap'>{present[1] &&  primerjava[1].pm10} </div>
                    <p className="naslov">SO2 (µg/m<sup>3</sup>):</p>
                    <div id='so1' className='infowrap'> {present[1] &&  primerjava[1].so2} </div>
                </div>

                <button className="izbrisi" onClick={izbrisi1}><DeleteIcon fontSize="large"></DeleteIcon></button>
            </div>
        </div>
     );
}
 
export default Details;