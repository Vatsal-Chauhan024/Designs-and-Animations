import {BiChat, BiSolidPhoneCall, BiMessageDetail, BiEnvelope} from 'react-icons/bi'

const gridData = [
    {
        id: "12345",
        icon: <BiSolidPhoneCall/>,
        title: "Call",
        content: "+91 9568213456",
        button: "Call Now"
      },
      {
        id: "12346",
        icon: <BiChat/>,
        title: "Chat",
        content: "Hello, how can I help you?",
        button: "Start Chat"
      },
      {
        id: "12347",
        icon: <BiMessageDetail/>,
        title: "Message",
        content: "Send us a message",
        button: "Send Message"
      },
      {
        id: "12348",
        icon: <BiEnvelope/>,
        title: "Email",
        content: "Send us an email",
        button: "Send Email"
      }
      
      
      
  ];
  
  export default gridData;
  