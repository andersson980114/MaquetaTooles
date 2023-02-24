 
import './App.css';
import Head from './components/Head';
import NavBar from './components/NavBar';
import Products from './components/Products';
import SideBarMennu from './components/SideBarMennu';

function App() {
  return (
    <div className="App">
        <div className='sidebar_container'>
        <SideBarMennu/>
        </div>
        <div className='body_container'> 
          <NavBar/> 
          <Head/>
          <Products/>
       </div>
    </div>
  );
}

export default App;
