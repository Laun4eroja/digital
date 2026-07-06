const heroElements = [
    ".header__title",
    ".header__text",
    ".header__btn"
];

heroElements.forEach((selector,index)=>{

    setTimeout(()=>{

        document
            .querySelector(selector)
            .classList.add("show");

    },index*300);

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });

},{
    threshold:.25
});

document.querySelectorAll(".title").forEach(title=>observer.observe(title));



const reviewCards = document.querySelectorAll('.reviews__card');
const reviewsSection = document.querySelector('.reviews');

const reviewsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        reviewCards.forEach((reviewCard, index) => {

            setTimeout(() => {
                reviewCard.classList.add('show');
            }, index * 120);

        });

        reviewsObserver.disconnect();

    });

}, {
    threshold: 0.2
});

reviewsObserver.observe(reviewsSection);





const phone = document.querySelector('.app__image');
const appSection = document.querySelector('.app');

window.addEventListener('scroll', () => {

    const rect = appSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.bottom < 0 || rect.top > windowHeight) return;
    
    const progress = (windowHeight + rect.top) / (windowHeight + rect.height);
    
    const y = (progress - 0.5) * 700;
    
    phone.style.transform = `translateY(${y}px)`;
    phone.classList.add('vis');

});


// const phone = document.querySelector('.app__image');
// const appSection = document.querySelector('.app');

// window.addEventListener('scroll', () => {
//     const rect = appSection.getBoundingClientRect();

//     const center = rect.top + rect.height / 2;
//     const screenCenter = window.innerHeight / 2;

//     let progress = (center - screenCenter) / (window.innerHeight / 2);

//     // ограничиваем диапазон
//     progress = Math.max(-1, Math.min(1, progress));

//     const maxMove = 120;

//     phone.style.transform = `translateY(${-progress * maxMove}px)`;
// });












const headerTab = document.querySelectorAll('.categories__list-item');
const itemTab = document.querySelectorAll('.categories__cards');

for (let item of headerTab) {
    item.addEventListener('click', function () {
       
        for (let head of headerTab) {
            head.classList.remove('active');
        }

        item.classList.add('active');


        for (let element of itemTab) {
            element.classList.add('hidden');
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden');

        const cards = content.querySelectorAll('.categories__card');
        cards.forEach(card => {
            card.classList.add('hide');
        });
        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.remove('hide');

            }, index * 200);

        });

    })
}


