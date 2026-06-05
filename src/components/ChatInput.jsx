import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
export function ChatInput({chatMessages,setChatMessage}) {
        let [inputText, setInputText] = useState("");
        function saveInputText(event){
          setInputText(event.target.value)
        }
        function sendMessage(){
          let newChatMessages=[
            ...chatMessages,
              {
                message:inputText,
              sender:"user",
              id:crypto.randomUUID()
            }
          ]

          setChatMessage(newChatMessages)
        let response=Chatbot.getResponse(inputText);
         setChatMessage(
          [
            ...newChatMessages,
            {
              message:response,
              sender:"robot",
              id:crypto.randomUUID()
            }
          ]
         )
        setInputText('')
        }
        return (
          <div className="chat-input-section">
            <input 
            placeholder="Send a message to chatbot"
            onChange={saveInputText}
            value={inputText}
            onKeyDown={(event)=>{event.key=="Enter" && sendMessage()}}
            className="chat-input-element"
             />
            <button
            onClick={sendMessage} className="send-btn">Send</button>
          </div>
        );
      }