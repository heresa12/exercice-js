"use strict";

const paragraphs = document.querySelectorAll('main p');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.5s';
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
});

let observerActivated = false;

const existingObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!observerActivated && !entry.isIntersecting) {
            observerActivated = true;
            addNewParagraphs();
            observer.unobserve(entry.target);
        }
    });
});

const lastExistingParagraph = document.querySelector('main p:last-child');
existingObserver.observe(lastExistingParagraph);

function addNewParagraphs() {
    const main = document.querySelector('main');
    const newParagraphs = document.createDocumentFragment();
  
    for (let i = 1; i <= 10; i++) {
      const paragraph = document.createElement('p');
      paragraph.textContent = loremIpsum.generateSentences(1); // Génère un paragraphe de Lorem Ipsum
      newParagraphs.appendChild(paragraph);
    }
  
    main.appendChild(newParagraphs);
    
    
  
function addNewParagraphs() {
    const main = document.querySelector('main');
    const newParagraphs = document.createDocumentFragment();

    for (let i = 1; i <= 10; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Nouveau paragraphe ' + i;
        newParagraphs.appendChild(paragraph);
    }

    main.appendChild(newParagraphs);

    const newParagraphsList = document.querySelectorAll('main p:nth-child(n+11)');


    const newObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.5s';
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);


    newParagraphsList.forEach((paragraph) => {
        newObserver.observe(paragraph);
    });
}
}