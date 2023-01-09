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
                arrow="false"
                offsetX="10px"
                position="left center"
                closeOnDocumentClick
                >
                <h1>Kaj je kakZrak?</h1>
                <p> KakZrak je portal, na katerem lahko preverite kakovost zraka med posameznimi občinami v Sloveniji. S pomočjo drsnikov se lahko premikate skozi čas in ob kliku na posamezno občino, imate vpogled v natačnejše podatke o kakovosti zraka (PM10 in SO2).</p>
                <h1>Kdo smo?</h1>
                <p>Portal smo ustvarjali Edis Fejzoski, Enes Fejzoski in Klemen Čerin</p>
            </Popup>
            </div>
        </nav>
     );
}
 
export default Navbar;