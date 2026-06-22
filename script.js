const quotes = [
  'Život je jako lesní stezka, kde se beruška vždycky najde i po dešti.',
  'Když se něco pokazí, znamená to jen, že se právě rozjelo nové dobrodružství.',
  'Dobrý den začíná u sluníčka a končí u ještě jedné beruščí radosti.',
  'Někdy stačí jen chvíli sedět tiše a všimnout si, jak svět má krásně beruščí barvy.',
  'Kdo má rád humor, ten má rád i život — zvlášť když se z něj stane malá příhoda.',
  'Mít rád své chvíle znamená umět je trochu ozdobit drobným úsměvem.',
  'Občas je nejlepší plán ten, který vás přiměje podívat se na svět s větší radostí.',
  'Pravda je často jednoduchá, jen ji musíme uslyšet mezi vším šelestem trávy.',
  'Nejhezčí věci nebývají vidět hned — někdy je potřeba jen trochu trpělivosti a světla.',
  'Když má někdo dobrou náladu, celý den vypadá hned o trochu beruškověji.'
];

const quoteElement = document.getElementById('quote');
const quoteButton = document.getElementById('quoteButton');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
  quoteElement.animate(
    [
      { opacity: 0.2, transform: 'translateY(8px) scale(0.98)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' }
    ],
    {
      duration: 350,
      easing: 'ease-out'
    }
  );
}

quoteButton.addEventListener('click', getRandomQuote);

getRandomQuote();
