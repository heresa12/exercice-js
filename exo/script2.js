"use strict"

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

const lastExistingParagraph = document.querySelector('main p:last-child');

// Créez un observateur pour le dernier paragraphe existant
const existingObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            // Lorsque le dernier paragraphe est à 200px en dessous du viewport
            addNewParagraphs(); // Appelez la fonction pour ajouter de nouveaux paragraphes
            observer.unobserve(entry.target); // Désactivez la détection
        }
    });
});

// Ajoutez le dernier paragraphe existant à l'observateur
existingObserver.observe(lastExistingParagraph);

// Fonction pour ajouter de nouveaux paragraphes
function addNewParagraphs() {
    const main = document.querySelector('main');
    const newParagraphs = document.createDocumentFragment();

    for (let i = 1; i <= 10; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Nouveau paragraphe ' + i;
        newParagraphs.appendChild(paragraph);
    }

    main.appendChild(newParagraphs);


    const newLastParagraph = document.querySelector('main p:last-child');


    const newObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.5s';
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);


    newObserver.observe(newLastParagraph);
}
let observerActivated = false; // Booléen pour suivre si l'observateur a été activé

// Créez un observateur pour le dernier paragraphe existant et le nouveau dernier paragraphe
const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!observerActivated && !entry.isIntersecting) {
      observerActivated = true; // Marquer l'observateur comme activé
      addNewParagraphs(); // Appelez la fonction pour ajouter de nouveaux paragraphes
      observer.unobserve(entry.target); // Désactivez la détection
    }
  });
});
// Sélectionnez les dix derniers paragraphes (les nouveaux paragraphes)
const newParagraphs = document.querySelectorAll('main p:nth-child(n+11)');


const newObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'opacity 0.5s';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);


newParagraphs.forEach((paragraph) => {
  newObserver.observe(paragraph);
});











