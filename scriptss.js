document.getElementById('sendRequestButton').addEventListener('click', () => {
    const button = document.getElementById('sendRequestButton');
    const notification = document.getElementById('notification');

    button.style.transform = 'scale(1.2) rotate(10deg)';
    setTimeout(() => {
        button.style.transform = 'scale(1) rotate(0)';
    }, 300);

    notification.classList.remove('hidden');
});
