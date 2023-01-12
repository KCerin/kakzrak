import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Popup from 'reactjs-popup';


// je treba installat reactjs-popup

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>kakZrak Slovenija</h1>
            <div className="links">
            <Popup 
                trigger={open => (
                    <InfoOutlinedIcon className='info'>Trigger - {open ? 'Opened' : 'Closed'}</InfoOutlinedIcon>
                )}
                closeOnEscape="true"
                arrow="false"
                offsetX="10px"
                position="left center"
                closeOnDocumentClick
                >
                <h1>Kaj je kakZrak?</h1>
                <p> KakZrak je portal, na katerem lahko preverite kakovost zraka med posameznimi občinami v Sloveniji. S pomočjo drsnikov se lahko premikate skozi čas in ob kliku na posamezno občino, imate vpogled v natačnejše podatke o kakovosti zraka (PM10 in SO2).</p>
                <p>
                PM10 je vrednost, ki predstavlja povprečno količino prašnih delcev, v zraku, na mesec. <br/> SO2 je vrednost, ki predstavlja povprečno količino žveplovega dioksida, v zraku, na mesec.
                </p>
                <h1>Kdo smo?</h1>
                <p>Portal smo ustvarjali Edis Fejzoski, Enes Fejzoski in Klemen Čerin</p>
            </Popup>
            </div>
        </nav>
     );
}
 
export default Navbar;