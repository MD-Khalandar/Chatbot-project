import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import './App.css'
import ChatMessages from './components/ChatMessages'
      function App() {
         let [chatMessages,setChatMessage] = useState([
          { message: "hello Chatbot", sender: "user", id: "id1" },
          { message: "How can I help you?", sender: "robot", id: "id2" },
          { message: "can your get me todays date", sender: "user", id: "id3" },
          { message: "Today is 12 September", sender: "robot", id: "id4" },
        ])
        return (
          <div className="app">
            
            <ChatMessages 
            chatMessages={chatMessages}
            />
            <ChatInput
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}
            />
          </div>
        );
      }


export default App
