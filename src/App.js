// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <Home className='h-[100vh]' id='scroll'/>
    <Footer/>
    </div>
  );
}

export default App;
