import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import More from './components/More';
import Show from './components/Show';
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
          <Route exact path="/" element= { <Home/> } ></Route>
          <Route exact path="/more" element= { <More/> } ></Route>
          <Route path="/more/:id" element= { <Show/> } ></Route>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
