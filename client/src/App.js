import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/views/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Product/>
     {/* <HomePage/> */}
     <Footer/>
    </div>
  );
}

export default App;
