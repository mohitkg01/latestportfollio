import './App.css'
import Intro from './components/intro/Intro';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Project from './components/project/project';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
     <Router> 
     <Navbar/> 
     <Intro/>
     <About/>
     <Project/>
     <Sidebar/> 
    <Contact/>
     </Router>
    </div> 
  );
}

export default App;