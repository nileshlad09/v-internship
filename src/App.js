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
import Verification from './Components/Verification/Verification';
import StudentState from './context/student/StudentState';
import Alert from './Components/Alert';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Pages/Home';
import { createContext, useReducer } from 'react';
import { initialState,reducer} from './Reducer/useReducer';




export const UserContext = createContext()
function App() {
  const [state,dispatch]= useReducer(reducer,initialState)

  return (
    <div>
    <StudentState>
    <UserContext.Provider value={{state,dispatch}}>
     <Navbar/>
     <Alert alert={alert}/>
     <Switch>
       <PrivateRoute exact path="/dashboard" component={Dashboard} auth={state}/>
       <PrivateRoute exact path="/verification" component={Verification} auth={state}/>
       <PrivateRoute exact path='/dashboard/view/:year/:batch' component={View} auth={state}/>
      <div className="container">
       
       <Route exact path='/' component={Home} ></Route>
       <Route exact path='/adminlogin' component={AdminLogin} ></Route>
       <Route exact path='/addinternship/1' component={DataEnter} ></Route>
       <Route exact path='/addinternship/2' component={AddInternship} ></Route>
       
       {/* <Route exact path='/dashboard' component={Dashboard} ></Route>         */}
       {/* <Route exact path='/Verification' component={Verification} ></Route> */}
        <Redirect to="/" />
       </div>
     </Switch>
     </UserContext.Provider>
     </StudentState>     
    </div>
  );
}

export default App;
