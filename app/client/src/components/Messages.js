import React from 'react'
import {useSelector} from 'react-redux'
import moment from 'moment'
import Linkify from 'react-linkify'

export default props => {
  const messages = useSelector(appState => appState.chatReducer.messages.filter(message => message.room === props.room))

  return (
    <div className="messages">
      {messages.map((message, i) => {
        const regex = /(https?:\/\/.*\.(?:png|jpg|gif))/i
        let img = ''
        if (regex.test(message.text)) {
          const match = message.text.match(regex)
          img = <img src={match[0]} />
        }

        return (
        <div>
          <div key={'message' + i} className="indmessage">
            <span className="user">{message.username}</span>
            <p><Linkify>{message.text}</Linkify> <span className="time">{moment(message.time).fromNow()}</span></p>
          </div>
          {img ? <div className="image">{img}</div> : ''}
        </div>  
        )
      })}
    </div>
  )
}