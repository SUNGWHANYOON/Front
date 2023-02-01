export function chatTemplate(): string {
  const CHATTEMPLATE: string = `
    <div class = "chat-topbar">
        <img src="../../public/vite.svg" alt="logo">
    </div>
    <div class = "main">
        <div class = "chat-sidebar">
            <div class = "title">
                <h3>이용자#1</h3>
            </div>
            <div class = "chatlist-area"></div>
        </div>
        <div class = "chat-room">
            <div class = "chat-record-background">
                <div class = "group-chatting"> 그룹채팅
                </div>
                <div class = "chat-room-plain">
                </div>
            </div>
            <div class = "chat-input">
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4"></label>
                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-warning">Warning</button>
            <div>
        </div>
    </div>

    `;
  return CHATTEMPLATE; 
}

export function chatRoomTemplate(): void {
    const chatRoomTemplate: string = `
    <div class = "chatlist-element">
        <div class = "image-container">
            <img src="../../public/vite.svg" alt="logo">
        </div>
        <div>#1</div>
    </div>
    `;

    const template = document.createElement('template')
    template.innerHTML = chatRoomTemplate;
    document.getElementsByClassName("chatlist-area")[0].appendChild(template.content)
    return;
}

export function chatLog():void{
    const chatLogTemplate: string = `
    <div class = "chat-log">
        <div class = "image-container">
            <img src = "../../public/vite.svg" alt = "logo">
        </div>
        <div class = "ballon">나 사실 못감 ㅋㅋ</div>
    </div>
    <div class = "chat-log">
        <div class = "image-container">
            <img src = "../../public/vite.svg" alt = "logo">
        </div>
        <div class = "ballon">쏘리</div>
    </div>
    `;
    const template = document.createElement("template");
    template.innerHTML = chatLogTemplate;
    document
      .getElementsByClassName("chat-room-plain")[0]
      .appendChild(template.content);
    
    return;
    
}