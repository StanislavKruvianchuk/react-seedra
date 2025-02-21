import './App.css';
import './application.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>

  );


}

export default App;
