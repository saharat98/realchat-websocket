import "./App.css";
import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import Message from "./pages/message";
import Input from "./pages/input";

var socket = socketIO.connect("http://localhost:4000");
function App() {
  const randomName = () => {
    const adjectives = [
      "autumn",
      "hidden",
      "bitter",
      "misty",
      "silent",
      "empty",
      "dry",
      "dark",
      "summer",
      "icy",
      "delicate",
      "quiet",
      "white",
      "cool",
      "spring",
      "winter",
      "patient",
      "twilight",
      "dawn",
      "crimson",
      "wispy",
      "weathered",
      "blue",
      "billowing",
      "broken",
      "cold",
      "damp",
      "falling",
      "frosty",
      "green",
      "long",
      "late",
      "lingering",
      "bold",
      "little",
      "morning",
      "muddy",
      "old",
      "red",
      "rough",
      "still",
      "small",
      "sparkling",
      "throbbing",
      "shy",
      "wandering",
      "withered",
      "wild",
      "black",
      "young",
      "holy",
      "solitary",
      "fragrant",
      "aged",
      "snowy",
      "proud",
      "floral",
      "restless",
      "divine",
      "polished",
      "ancient",
      "purple",
      "lively",
      "nameless",
    ];
    const nouns = [
      "waterfall",
      "river",
      "breeze",
      "moon",
      "rain",
      "wind",
      "sea",
      "morning",
      "snow",
      "lake",
      "sunset",
      "pine",
      "shadow",
      "leaf",
      "dawn",
      "glitter",
      "forest",
      "hill",
      "cloud",
      "meadow",
      "sun",
      "glade",
      "bird",
      "brook",
      "butterfly",
      "bush",
      "dew",
      "dust",
      "field",
      "fire",
      "flower",
      "firefly",
      "feather",
      "grass",
      "haze",
      "mountain",
      "night",
      "pond",
      "darkness",
      "snowflake",
      "silence",
      "sound",
      "sky",
      "shape",
      "surf",
      "thunder",
      "violet",
      "water",
      "wildflower",
      "wave",
      "water",
      "resonance",
      "sun",
      "wood",
      "dream",
      "cherry",
      "tree",
      "fog",
      "frost",
      "voice",
      "paper",
      "frog",
      "smoke",
      "star",
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  };
  // console.log(randomName)

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  };
  const [messages, setMessages] = useState([]);
  // const [messageByuser, setmessageByuser] = useState({
  //   messages: [],
  //   member: {
  //     username: randomName(),
  //     color: randomColor(),
  //     id:socket.id
  //   },
  // });
  const currentMember = socket.id
  const onSendMessage = (message) => {
    socket.emit('chat-message', {
      text: message,
      id:socket.id,
    });
   
  
    // let messages2 = messageByuser.messages;
    // let member = messageByuser.member ;
    
    // socket.on("chat message", (msg, id) => {
    //   // messages2.push({member:member, text: msg});
    // });
    // setmessageByuser({messages:messages2,member:member});
    // console.log(messageByuser)
    // messages2.push({
    //   text: message,
    //   member: messageByuser.member
    // })
    // setmessageByuser({ messages: [...messages2],member:messageByuser.member});
  };
  useEffect(() => {
    socket.on('messageResponse', (data) => {
      setMessages([...messages, data,])});
  }, [socket, messages]);
  // useEffect(() => {
  //   socket.on("messageResponse", (data) => {
  //     console.log(data)
  //     setmessageByuser({messages:[data],member:messageByuser.member});
  //   });
  // }, [messageByuser]);
  // console.log(messageByuser)
  // useEffect(() => {
  //   socket.on("chat message", (msg, id) => {

  //     console.log(i)
  //     // setmessageByuser({...messageByuser,  messages: [{
  //     //   messages2
  //     //   }],
  // //  })      // messages2.push({member:member, text: msg});
  //   });
  // }, []);
  return (
    <div className="App">
      <div className="App-header">
        <h1>My Chat App</h1>
      </div>
      <Message
        messages={messages}
        currentMember={currentMember}
      />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
