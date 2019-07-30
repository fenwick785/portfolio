window.addEventListener("DOMContentLoaded", () => {

    const textOutput = document.querySelector('p'),
          phrases = ['tout a bien changé', 'nico est le boss', 'c\'est parti'],
          delay = [2000, 4000, 6000];

    phrases.forEach((phrase, i) => setTimeout(() => textOutput.textContent = phrase, delay[i]));

});
