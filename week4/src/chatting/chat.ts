import {chatTemplate, chatRoomTemplate, chatLog} from "./chatTemplates"

import "./chat.css"
import "../bootstrap.css";


document.querySelector<HTMLDivElement>("#app")!.insertAdjacentHTML(
  "beforeend",
  chatTemplate()
);

chatRoomTemplate();
chatLog();
