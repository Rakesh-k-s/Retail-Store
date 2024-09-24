import React from 'react'
import './Profile.css'
import { NavLink } from 'react-router-dom'
function Profile(props) {
  return (
    <div classname="profile">
        <span>{props.firstname}</span>
        <span>{props.lastname}</span>
        <NavLink classname="login_button" to="/Login">Login</NavLink>
    </div>
  )
}

export default Profile