import React, { useState } from 'react'
import { sendMessage } from '../actions/chat.actions'


export default props => {
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(message, props.room)
    setMessage('')
  }

  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <textarea onChange={e => setMessage(e.target.value)} value={message}></textarea>
      <button onClick={handleSubmit}>Send</button>
    </form>
  )
}