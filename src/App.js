import Header from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/About-me';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Mywork/>
      <Contact/>
    </div>
  );
}

export default App;