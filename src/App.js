
// import  Home  from "./Components/Home/Home";
import  Admin  from "./Components/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import StudentData from './Components/StudentData/StudentData'
import InternshipDone from './Components/StudentData/InternshipDone' 
import InternshipNotDone from './Components/StudentData/InternshipNotDone' 
import {Switch,Route} from 'react-router-dom';
import View from "./Components/View/View";
import ExcelData from "./Components/ExcelData/ExcelData";
import StudentaddData from "./Components/SrudentAdddata/StudentaddData";
import Login from "./Components/Login/Login";
import Forgotpassword from "./Components/Login/Forgotpassword";
function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Admin}></Route>
       <Route exact path ='/StudentData' component={StudentData}></Route>
       <Route exact path ='/InternshipDone' component={InternshipDone}></Route>
       <Route exact path ='/InternshipNotDone' component={InternshipNotDone}></Route>
       <Route exact path ='/View/:fname/:roll/:Sem/:branch/:organization/:email/:start/:end/:id/:domain' component={View}></Route>
       <Route exact path ='/ExcelData' component={ExcelData}></Route>
       <Route exact path ='/studenthome' component={StudentaddData}></Route>
       <Route exact path ='/login' component={Login}></Route>
       <Route exact path ='/forgotpassword' component={Forgotpassword}></Route>
     </Switch>
    </div>

  );
}

export default App;
