
import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Details />
        <Home />
      </div>
    </div>
  );
}

export default App;
