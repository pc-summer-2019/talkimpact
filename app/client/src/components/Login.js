import React, { useState } from 'react'
import { login } from '../actions/auth.actions'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
  const [username, setUsername] = useState('')
  const authorized = useSelector(appState => appState.authReducer.authorized)
  
  function handleSubmit(e) {
    e.preventDefault()
    login(username)
    props.history.push("/general")
  }

  return (
    authorized 
      ? <Redirect to="/general" />
      : <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter a username" />
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}