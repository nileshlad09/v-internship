import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
import DataEnter from './Components/DataEnter/DataEnter'
import AddInternship from './Components/DataEnter/AddInternship';
import Admin from './Components/Admin/Admin';
import Editinformation from './Components/Editinformation/Editinformation';

function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
      <div className="container">
       <Route exact path='/' component={AdminLogin} ></Route>
       {/* <Route exact path='/admin' component={Admin} ></Route> */}
       <Route exact path='/dashboard' component={Dashboard} ></Route>
       <Route exact path='/dashboard/view' component={View} ></Route>
       <Route exact path='/DataEnter' component={DataEnter} ></Route>
       <Route exact path='/AddInternship' component={AddInternship} ></Route>
       <Route exact path='/editinfo' component={Editinformation} ></Route>
       </div>
     </Switch>
    </div>
  );
}

export default App;
