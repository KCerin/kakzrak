import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Popup from 'reactjs-popup';


// je treba installat reactjs-popup

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>kakZrak Slovenija</h1>
            <div className="links">
            <Popup arrow="false"
                trigger={open => (
                    <InfoOutlinedIcon>Trigger - {open ? 'Opened' : 'Closed'}</InfoOutlinedIcon>
                )}
                offsetX="10px"
                position="left center"
                closeOnDocumentClick
                >
                <p> KakZrak je stran, ki prikaže kakovost zraka v Sloveniji skozi čas </p>
            </Popup>
            </div>
        </nav>
     );
}
 
export default Navbar;