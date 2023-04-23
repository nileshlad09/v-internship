import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import studentContext from '../context/student/studentContext'
import { useContext } from 'react'
const PrivateRoute = ({component:Component,...rest}) => {
  const {currentUser,loading} = useContext(studentContext)
  return (
    <Route {...rest} render={(props)=>{
        if(currentUser || loading) return <Component {...props}/>
        if(!currentUser || !loading) return <Redirect to={{path:"/",state:{from:props.location}}}/>
    }}/>
  )
}

export default PrivateRoute
