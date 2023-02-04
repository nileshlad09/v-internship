// import './App.css';
// import {Switch,Route} from 'react-router-dom';

// import Navbar from './Components/Navbar/Navbar'
// import Dashboard from './Pages/Dashboard'
// import AdminLogin from './Components/Adminlogin/AdminLogin'
// import View from './Pages/View'
// import DataEnter from './Components/DataEnter/DataEnter'
// import AddInternship from './Components/DataEnter/AddInternship';
// import Verification from './Components/Verification/Verification'
// import Admin from './Components/Admin/Admin';

// function App() {
//   return (
//     <div>
//      <Navbar/>
//      <Switch>
//        <Route exact path='/' component={AdminLogin} ></Route>
//        <Route exact path='/admin' component={Admin} ></Route>
//        <Route exact path='/admin/dashboard' component={Dashboard} ></Route>
//        <Route exact path='/admin/dashboard/view' component={View} ></Route>
//        <Route exact path='/DataEnter' component={DataEnter} ></Route>
//        <Route exact path='/AddInternship' component={AddInternship} ></Route>
//        <Route exact path='/Verification' component={Verification} ></Route>
//      </Switch>
//     </div>
//   );
// }

// export default App;
import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
import DataEnter from './Components/DataEnter/DataEnter'
import AddInternship from './Components/DataEnter/AddInternship';
// import Admin from './Components/Admin/Admin';
import Editinformation from './Components/Editinformation/Editinformation';
import Verification from './Components/Verification/Verification';
import Temp from './Components/temp/Temp';

function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
      <div className="container">
       <Route exact path='/' component={AdminLogin} ></Route>
       <Route exact path='/Verification' component={Verification} ></Route>
       <Route exact path='/dashboard' component={Dashboard} ></Route>
       <Route exact path='/dashboard/view/:batch' component={View} ></Route>
       <Route exact path='/addinternship/1' component={DataEnter} ></Route>
       <Route exact path='/addinternship/2' component={AddInternship} ></Route>
       <Route exact path='/editinfo' component={Editinformation} ></Route>
       <Route exact path='/temp' component={Temp} ></Route>
       </div>
     </Switch>
    </div>
  );
}

export default App;
