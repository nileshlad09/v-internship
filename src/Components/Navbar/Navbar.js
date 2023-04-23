import React,{useContext} from 'react'
import { Link,useHistory} from 'react-router-dom';
import { UserContext } from '../../App';
import './navbar.css'
import { firebaseApp } from '../../firebase';
import { signOut ,getAuth} from 'firebase/auth';
const Navbar = () => {
  
  const auth = getAuth(firebaseApp);
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory();
  const logout=()=>{
      signOut(auth)
      history.push('/adminlogin');  
  }
  
  return (
    <>
    <div className="navbar_Section">
      <nav className="navbar navbar-expand-lg navbar-success container">
       <Link className="navbar-brand" to="/" style={{color:"#fff",fontWeight:"600",letterSpacing:"2.2px"}}><span className='logoColor'>V</span><span className='logoColor'>I</span>n<span className='logoColor'>T</span>ernship </Link>
        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <ul className="navbar-nav mr-auto">
              { state ? <>
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/verification" style={{ color: "#fff" }}>Verify</Link>
              </li>
              <li className="nav-item">
                <button className='btn btn-outline-light loginBtn' onClick={logout} style={{borderRadius:"0px"}}>Logout</button>
              </li>
              </>:
              <li className="nav-item loginBtn2">
                <Link to="/adminlogin">
              <button className='btn btn-outline-light loginBtn' style={{borderRadius:"0px"}} >
                 Login </button></Link>
            </li>
              }
              
            </ul>
          </form>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;