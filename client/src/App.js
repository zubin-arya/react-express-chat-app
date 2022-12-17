
import './App.css';
import Chat from './Chat.js';
import io from 'socket.io-client'
import { useState } from 'react';
const socket = io.connect("http://localhost:3001");

function App() {
  const [username,setUsername] = useState("");
  const [room, setRoom] = useState(""); 
  const [showChat, setShowChat] = useState(false);
  const joinRoom =()=>{
if (username !=="" && room!=="")
  {
    setShowChat(true);
    socket.emit("join_room", room);
  }}

  return (
    <div className="App">
      {!showChat ? (
      <div className="joinChatContainer">
    <h3>Join a Chat</h3>
    <input type="text" placeholder = "John...." onChange={(event) => {
      setUsername(event.target.value);
    }} 
/>

<input type ="text" placeholder='Room ID'  onChange={(event) => {
      setRoom(event.target.value);
    }}
    />
    <button onClick={joinRoom}> Join a Room</button>
    </div>
      ): (
<Chat socket={socket} username={username} room={room} />
      )}
    </div>
    );
  
      }

export default App;
