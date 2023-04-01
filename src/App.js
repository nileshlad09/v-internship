// export default App;
import './App.css';
import {Switch,Route, useHistory,Redirect} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
import DataEnter from './Components/DataEnter/DataEnter'
import AddInternship from './Components/DataEnter/AddInternship';
// import Admin from './Components/Admin/Admin';
import Editinformation from './Components/Editinformation/Editinformation';
import Verification from './Components/Verification/Verification';
import StudentState from './context/student/StudentState';
import Alert from './Components/Alert';
import Home from './Pages/Home';

function App() {


  return (
    <div>
    <StudentState>
     <Navbar/>
     <Alert alert={alert}/>
     <Switch>
      <div className="container">
       <Route exact path='/' component={Home} ></Route>
       <Route exact path='/adminlogin' component={AdminLogin} ></Route>
       <Route exact path='/addinternship/1' component={DataEnter} ></Route>
       <Route exact path='/addinternship/2' component={AddInternship} ></Route>
       
       <Route exact path='/dashboard' component={Dashboard} ></Route>        
       <Route exact path='/Verification' component={Verification} ></Route>
       <Route exact path='/dashboard/view/:year/:batch' component={View} ></Route>   
       <Route exact path='/editinfo' component={Editinformation} ></Route>
        <Redirect to="/" />
       </div>
     </Switch>
     </StudentState>     
    </div>
  );
}

export default App;
