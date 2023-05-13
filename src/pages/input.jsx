import { useState } from "react";

function Input(props) {
  const [text,setText] = useState({text:''})
  const changeText=(e)=>{
    setText({text:e.target.value})
  }
  const sendMessage=(e)=>{
    e.preventDefault();
    props.onSendMessage(text.text);
    setText({text: ""});
}
  return(
  <>
  <div className="Input">
      <form onSubmit={sendMessage}>
        <input
          onChange={changeText}
          value={text.text}
          type="text"
          placeholder="Enter your message and press ENTER"
        />
        <button>Send</button>
      </form>
    </div>
  </>)
}
export default Input;