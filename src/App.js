import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import About from './components/AboutUs/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <div className='display1'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path=":food" element={<Foods />}></Route>
          </Route>

          <Route path='/home' element={<Home />}>
            <Route path=":food" element={<Foods />}></Route>
          </Route>

          <Route path='/order' element=
            {
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          ></Route>

          <Route path='/about' element={<About />}></Route>

          <Route path='/login' element={<Login />}></Route>

          <Route path='*' element={<NotFound />}></Route>

        </Routes>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
