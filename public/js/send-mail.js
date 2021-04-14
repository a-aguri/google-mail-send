const sendButton = document.getElementById('send-mail');

sendButton.onclick = function() {
    fetch('./api/send/mail');
};