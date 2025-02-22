
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.scattered-image');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.animationDelay = `${index * 0.5}s`;
        }, 0);
    });
});

    document.getElementById('last-image').addEventListener('animationend', function() {
        // Trigger confetti effect
        confetti();
    });

    function confetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiContainer.appendChild(confettiPiece);
        }

        setTimeout(() => {
            confettiContainer.remove();
        }, 3000); // Remove confetti after 3 seconds
    }