import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import DataView from './Pages/DataView'
import AddPersonalDetail from './Pages/AddPersonalDetail'
import AddInternshipDetail from './Pages/AddInternshipDetail';
import Verification from './Pages/Verification';
import StudentState from './context/student/StudentState';
import Alert from './Components/Alert';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Pages/Home';
import Deleteold from './Pages/DeleteoldData';
import AdminLogin from './Pages/AdminLogin';

function App() {

  return (
    <div>
      <StudentState>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/verification" component={Verification} />
          <PrivateRoute exact path='/dashboard/view/:year/:batch' component={DataView} />
          <PrivateRoute exact path='/dashboard/deleteold' component={Deleteold} />
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/adminlogin' component={AdminLogin} ></Route>
          <>
          <div className="addInternship">
            <div className="container">
              <Route exact path='/addinternship/1' component={AddPersonalDetail} ></Route>
              <Route exact path='/addinternship/2' component={AddInternshipDetail} ></Route>
            </div>
          </div>
          </>
        </Switch>
      </StudentState>
    </div>
  );
}

export default App;
