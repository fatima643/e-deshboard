import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateRoutes from './components/PrivateRoutes';
import Login from './components/Login';
import AddProduct from './components/AddProduct'
import Productlist from './components/Productlist';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element = {<PrivateRoutes />} >
          <Route path="/" element={<Productlist />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/logout" element={<h1> logout  Component</h1>} />
            <Route path="/profile" element={<h1> profile  Component</h1>} />
         </Route>

            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
