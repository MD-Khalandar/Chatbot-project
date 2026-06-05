import RobotProfileImage from '../assets/robot.png'
import UsertProfileImage from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
return (
    <div className={sender=="robot"?"chat-message-robot":"chat-message-user" }>
    {sender == "robot" && <img src={RobotProfileImage} className="chat-messsage-profile" />}
    <div className="chat-message-content">{message}</div>
    {sender == "user" && <img src={UsertProfileImage} className="chat-messsage-profile" />}
    </div>
);
}