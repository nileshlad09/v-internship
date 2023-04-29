import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
import DataEnter from './Components/DataEnter/DataEnter'
import AddInternship from './Components/DataEnter/AddInternship';
import Verification from './Components/Verification/Verification';
import StudentState from './context/student/StudentState';
import Alert from './Components/Alert';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Pages/Home';
import Deleteold from './Components/DeleteOldData/Deleteold';

function App() {

  return (
    <div>
      <StudentState>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/verification" component={Verification} />
          <PrivateRoute exact path='/dashboard/view/:year/:batch' component={View} />
          <PrivateRoute exact path='/dashboard/deleteold' component={Deleteold} />
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/adminlogin' component={AdminLogin} ></Route>
          <>
          <div className="addInternship">
            <div className="container">
              <Route exact path='/addinternship/1' component={DataEnter} ></Route>
              <Route exact path='/addinternship/2' component={AddInternship} ></Route>
            </div>
          </div>
          </>
        </Switch>
      </StudentState>
    </div>
  );
}

export default App;
