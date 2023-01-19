
import './App.css';
import Nav from './component/navBar';
import Home from './view/home';
import AboutPage from './view/aboutMe';
import SkillsPage from './view/mySkills';


function App() {
  return (
    <>
    
     <Nav/>
   
<div>
<Home/>
</div>
   
  <div>
  <AboutPage/>
  </div>
  <div>
  <SkillsPage/>
  </div>

 
  
    
    </>
  );
}

export default App;
