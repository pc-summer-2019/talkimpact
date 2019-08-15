import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
  const authorized = useSelector(appState => appState.authReducer.username)

  return authorized ? <Route {...props} /> : <Redirect to="/" />
}