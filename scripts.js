window.onload = function() {
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const img3 = document.querySelector('.img3');

    setTimeout(() => {
        img1.style.transform = 'translateX(0) rotate(-5deg)';
        img1.style.opacity = '1';
    }, 500);

    setTimeout(() => {
        img2.style.transform = 'translateX(0) rotate(5deg)';
        img2.style.opacity = '1';
    }, 2000); 
    setTimeout(() => {
        img3.style.transform = 'translateX(0) rotate(-6deg)';
        img3.style.opacity = '1';
    }, 200);
};

const recommendations = [
    {
        quote: "Working with Rashell Romero was an incredible experience. Their ability to understand our vision and turn it into an attractive and functional design exceeded our expectations. Their creativity and professionalism are unmatched. Highly recommended!",
        author: "Claudia Perez • Ritz CEO",
        image: "ritz.jpeg"
    },
    {
        quote: "Rashell Romero is an exceptional designer and publicist. It helped us create a coherent and attractive brand image that has significantly improved our presence in the market. His attention to detail and commitment to quality are evident in every project.",
        author: "Ricardo Gomez • Delicias Cookies",
        image: "delicias.jpeg"
    }
];

let currentIndex = 0;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const authorImageElement = document.getElementById('author-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : recommendations.length - 1;
    updateRecommendation();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < recommendations.length - 1) ? currentIndex + 1 : 0;
    updateRecommendation();
});

function updateRecommendation() {
    quoteElement.textContent = recommendations[currentIndex].quote;
    authorElement.textContent = recommendations[currentIndex].author;
    authorImageElement.src = recommendations[currentIndex].image;
}

document.getElementById('sendRequestButton').addEventListener('click', () => {
    const button = document.getElementById('sendRequestButton');
    const notification = document.getElementById('notification');

    button.style.transform = 'scale(1.2) rotate(10deg)';
    setTimeout(() => {
        button.style.transform = 'scale(1) rotate(0)';
    }, 300);

    notification.classList.remove('hidden');
});
