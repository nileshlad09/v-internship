
// import  Home  from "./Components/Home/Home";
import  Admin  from "./Components/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import StudentData from './Components/StudentData/StudentData'
import {Switch,Route} from 'react-router-dom';
import View from "./Components/View/View";
import ExcelData from "./Components/ExcelData/ExcelData";
function App() {
  return (

    <div>
     <Navbar/>
     <Switch>
       <Route  exact path='/' component={Admin}></Route>
       <Route exact path ='/StudentData' component={StudentData}></Route>
       <Route exact path ='/View/:fname/:roll/:Sem/:branch/:organization/:email/:start/:end/:id/:domain' component={View}></Route>
       <Route exact path ='/ExcelData' component={ExcelData}></Route>
     </Switch>
    </div>

  );
}

export default App;
