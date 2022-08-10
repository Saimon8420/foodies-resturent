import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import About from './components/AboutUs/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/home' element={<Home />}>
        </Route>

        <Route path="/home/:food" element={<Foods />}></Route>

        <Route path='/order' element={<Order />}></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
