import Sidebar from './Componenets/Sidebar/Sidebar'
import About from './Componenets/About/About'
import TechStack from './Componenets/TechStack/TechStack'
import Projects from './Componenets/Projects/Projects'
import Contact from './Componenets/Contact/Contact'
import Education from './Componenets/Education/Education'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <Projects />
      <TechStack />
      <Education />
      <Contact />

      <ScrollToTop smooth={true}
      color="white"
      height="20"
      width="20"
      style={{borderRadius:'80px', backgroundColor:'blue',}}
      />
    </>
  );
}

export default App