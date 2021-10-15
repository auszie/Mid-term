const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

messageInput.addEventListener('input', () =>{
    if (messageInput.value.length < 51){
        messageInput.classList.add('is-valid');
        messageFeedback.textContent = (MAX_CHARACTERS-messageInput.value.length) + " characters left";
        messageFeedback.style.color = "green";
    }
    else{
        
        messageFeedback.textContent = (messageInput.value.length-MAX_CHARACTERS) + " characters too long";
        messageInput.classList.add('is-invalid');
        messageFeedback.style.color = "red";
    }

});