import logo from './logo.svg';
import './App.css';
import Nav from './component/navBar';
import Home from './view/home';
import AboutPage from './view/aboutMe';

function App() {
  return (
    <>
    <div>
    <Nav/>
    </div>
  

    <div className=''>
    <Home/>
    </div>
    <div>
  <AboutPage/>
    
    </div>
    </>
  );
}

export default App;
