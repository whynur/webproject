import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Final from "./components/Final";
import About from "./components/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Homepage from "./components/Homepage";



function App() {
  return (
      <div className="container">
          <Header/>
          <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/about" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/Blog" element={<Blog/>}/>
              <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          <Final/>
      </div>
  );
}

export default App;
