import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <div className= 'classContainer'>
    <Header/>
    <div className="App">
      <Route path= '/' component= {About} exact/>
      <Route path= '/contact' component= {Contact}/>
      <Route path= '/portfolio' component= {Portfolio}/>
    </div>
    <Footer/>
    </div>

    </BrowserRouter>
  );
}

export default App;
