const socket = io('http://localhost:5501');
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
    console.log(data);
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    message
})