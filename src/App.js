import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './components/Home';
// import About from './components/About';
// import Department from './components/Department';
import Doctors from './components/Doctors';

function App() {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Department/> */}
    <Doctors/>
    <Footer/>
    </>
  );
}

export default App;
