import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
     const [count, setCount] = useState(0);

     return (
          <>
               <Router>
                    <NavBar />
                    <Switch>
                         <Route path='/' exact>
                              <Home />
                         </Route>
                         <Route path='/addProducts' exact>
                              <AddProducts />
                         </Route>
                         <Route path='/orders' exact>
                              <OrderHistory />
                         </Route>
                    </Switch>
               </Router>
          </>
     );
}

export default App;
