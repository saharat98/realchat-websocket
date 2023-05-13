import React from "react";


function Message(props) {
    const renderMessage=(message,key)=>{
        // const {member, text} = message;
        // console.log(message)
        // const {currentMember} = props;
        // console.log(message)
        console.log(props)
        const messageFromMe = message.id === props.currentMember;
        const className = messageFromMe ?
          "Messages-message currentMember" : "Messages-message";
        return (
          <li key={key} className={className}>
          <span
            className="avatar"
            style={{backgroundColor: message.color}}
          />
            <div className="Message-content">
              <div className="username">
                {message.username}
              </div>
              <div className="text">{message.text}</div>
            </div>
          </li>
        );
      }
  return (
    <>
      <ul className="Messages-list">
        {props.messages.map((m,key) => renderMessage(m,key))}
      </ul>
    </>
  );
}

export default Message;
