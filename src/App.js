
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Admin from './Components/Admin/Admin'
import StudentData from './Components/StudentData/StudentData'
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route  exact path='/' component={Admin}></Route>
       <Route exact path ='/StudentData' component={StudentData}></Route>
     </Switch>

    </div>
  );
}

export default App;
