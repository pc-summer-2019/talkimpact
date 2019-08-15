import store from '../store'
import socket from '../socket'
import anchorme from 'anchorme'


export function sendMessage(message, room) {
  const username = store.getState().authReducer.username

  const msg = {
    username: username,
    text: message,
    room: room,
    time: new Date()
  }

  console.log(msg)

  socket.emit('new message', msg)
}

export function join(room) {
  socket.emit('join', room)
}

socket.on('new message', message => {
  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: message
  })
})