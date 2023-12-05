import './App.css';
import Navbar from './component/Navbar';
import Crousel from './component/Crousel';
import Card from './component/Card';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Crousel/>
      <Card />
      <Card />
      <Card />
      <Footer />

    </div>
  );
}

export default App;
