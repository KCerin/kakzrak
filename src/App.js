
import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";
import { useState } from 'react';

function App() {

  const [primerjava, setPrimerjava] = useState([
    { src: null, datum:null, obcina: null, pm10: null, so2: null },
    { src: null, datum:null, obcina: null, pm10: null, so2: null }
  ]);


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Details setPrimerjava={setPrimerjava} primerjava={primerjava}/>
        <Home setPrimerjava={setPrimerjava} primerjava={primerjava}/>
      </div>
    </div>
  );
}

export default App;
