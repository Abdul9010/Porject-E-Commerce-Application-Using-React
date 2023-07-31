import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Main from './Main';
import Productview from './Productview';
import Cart from './Cart';
import Admin from './Admin';
import Adminproduct from './Adminproduct';
import Adminproductview from './Adminproductview';
import Adminupdate from './Adminupdate';
import Admindelete from './Admindelete';
import Adminadd from './Adminadd';
import Checkout from './Checckout';

function Navbar() {


    return (
        <>
            < BrowserRouter>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link" to="/Dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path='/Login' element={<Login></Login>} ></Route>
                    <Route exact path='/Register' element={<Register></Register>}></Route>
                    <Route exact path='Dashboard' element={<Dashboard></Dashboard>}></Route>
                    <Route exact path='/Productview' element={<Productview></Productview>}></Route>
                    <Route exact path='/Cart' element={<Cart></Cart>}></Route>
                    <Route exact path='/Main' element={<Main></Main>}></Route>
                    <Route exact path='/Admin' element={<Admin></Admin>}></Route>
                    <Route exact path='/Adminproduct' element={<Adminproduct></Adminproduct>}></Route>
                    <Route exact path='/Adminproductview' element={<Adminproductview></Adminproductview>}></Route>
                    <Route exact path='/Adminupdate' element={<Adminupdate></Adminupdate>}></Route>
                    <Route exact path='/Admindelete' element={<Admindelete></Admindelete>}></Route>
                    <Route exact path='/Adminadd' element={<Adminadd></Adminadd>}></Route>
                    <Route exact path='/Checkout' element={<Checkout></Checkout>}></Route>

                
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Navbar;