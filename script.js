document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const message = document.getElementById('message');
    const emojiContainer = document.getElementById('emojiContainer');
    let noButtonSize = 16;
    const initialNoButtonSize = noButtonSize;

    noButton.addEventListener('click', () => {
        noButtonSize += 2;
        noButton.style.fontSize = `${noButtonSize}px`;

        // Add a sad emoji
        const sadEmoji = document.createElement('div');
        sadEmoji.textContent = '😢';
        sadEmoji.className = 'sad-emoji';
        emojiContainer.appendChild(sadEmoji);

        // Check if noButton size exceeds a certain limit or goes off the screen
        if (noButton.getBoundingClientRect().right > window.innerWidth || 
            noButton.getBoundingClientRect().bottom > window.innerHeight) {
            // Reset noButton size
            noButtonSize = initialNoButtonSize;
            noButton.style.fontSize = `${noButtonSize}px`;

            // Remove all sad emojis
            while (emojiContainer.firstChild) {
                emojiContainer.removeChild(emojiContainer.firstChild);
            }
        }
    });

    yesButton.addEventListener('click', () => {
        message.textContent = 'Thank you so much!';
        message.style.opacity = 1;
        noButton.disabled = true;

        // Reset noButton size to initial size
        noButtonSize = initialNoButtonSize;
        noButton.style.fontSize = `${noButtonSize}px`;

        // Remove all sad emojis
        while (emojiContainer.firstChild) {
            emojiContainer.removeChild(emojiContainer.firstChild);
        }
    });
});
