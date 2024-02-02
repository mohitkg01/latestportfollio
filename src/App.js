import './App.css'
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About'
import Contact from './components/Contact';
import Project from './components/project';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
     <Router> 
     <Navbar/> 
     <Intro/>
     <About/>
     <Project/>
     {/* <Sidebar/>  */}
    <Contact/>
     </Router>
    </div> 
  );
}

export default App;