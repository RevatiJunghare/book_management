import { Navbar } from "./components/Navbar";
import ProductList from "./components/MensList";
import MainRotes from "./pages/MainRotes";
import Sarees from "./components/Sarees";
import Jwellery from "./components/Jwellery";
import Wdresses from "./components/Wdresses";
import Beauty from "./components/Beauty";
import Bags from "./components/Bags";
import Kitchen from "./components/Kitchen"

function App() {
  return (
    <div>
      <Navbar />
      {/* <MainRotes/> */}
      {/* <ProductList /> */}
      {/* <Sarees/> */}
      {/* <Jwellery/> */}
      {/* <Wdresses/> */}
      {/* <Beauty/> */}
      {/* <Bags/> */}
      <Kitchen/>
    </div>
  );
}

export default App;
