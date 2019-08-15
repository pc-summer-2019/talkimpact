import React, { useEffect } from 'react'
import { logout } from '../actions/auth.actions'
import { join } from '../actions/chat.actions'
import { Link } from 'react-router-dom'

import Messages from './Messages'
import ChatForm from './ChatForm'

export default props => {
  useEffect(() => {
    join(props.match.params.roomname)
  }, props.match.params)

  return (
    <div className="container">
      <Link to="/general">General</Link>
      <Link to="/foobar">Foobar</Link>
      <div><button onClick={logout}>Logout</button></div>
      <Messages room={props.match.params.roomname} />
      <ChatForm room={props.match.params.roomname} />
    </div>
  )
}