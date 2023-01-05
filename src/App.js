import logo from './logo.svg';
import './App.css';
import Nav from './component/navBar';
import Home from './component/home';

function App() {
  return (
    <>
    <Nav/>

    <div className='w-full h-screen bg-indigo-600'>
    <Home/>
    </div>
    </>
  );
}

export default App;
