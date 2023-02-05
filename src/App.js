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
import StudentState from './context/student/StudentState';

function App() {
  return (
    <div>
      <StudentState>
     <Navbar/>
     <Switch>
      <div className="container">
       <Route exact path='/' component={AdminLogin} ></Route>
       <Route exact path='/Verification' component={Verification} ></Route>
       <Route exact path='/dashboard' component={Dashboard} ></Route>
       <Route exact path='/dashboard/view/:year/:batch' component={View} ></Route>
       <Route exact path='/addinternship/1' component={DataEnter} ></Route>
       <Route exact path='/addinternship/2' component={AddInternship} ></Route>
       <Route exact path='/editinfo' component={Editinformation} ></Route>
       <Route exact path='/temp' component={Temp} ></Route>
       </div>
     </Switch>
     </StudentState>     
    </div>
  );
}

export default App;
