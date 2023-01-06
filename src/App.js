import logo from './logo.svg';
import './App.css';
import Nav from './component/navBar';
import Home from './view/home';

function App() {
  return (
    <>
    <Nav/>

    <div className=''>
    <Home/>
    </div>
    </>
  );
}

export default App;
