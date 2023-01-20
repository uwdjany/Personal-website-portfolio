
import './App.css';
import Nav from './component/navBar';
import Home from './view/home';
import AboutPage from './view/aboutMe';
import SkillsPage from './view/mySkills';
import ContactPage from './view/contact';


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
  <div>
  <ContactPage/>
  </div>

 
  
    
    </>
  );
}

export default App;
