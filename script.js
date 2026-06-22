const quotes = [
  'Život je jako dobrodružství s nečekaným koncem a kočičími přestávkami.',
  'Když se něco pokazí, znamená to jen, že se právě děje něco zajímavého.',
  'Dobrý den začíná u kávy, dobrý den končí u ještě jedné kávy.',
  'Někdy stačí jenom chvíli sedět tiše a všimnout si, že svět je krásně zvláštní.',
  'Kdo má rád humor, ten má rád i život — zvlášť když se z něj stane malá historka.',
  'Mít rád své chvíle znamená umět je i trochu zpříjemnit.',
  'Občas je nejlepší plán ten, který vás přiměje usmát se.',
  'Pravda je často jednoduchá, jenom ji musíme umět slyšet mezi vším hlukem.',
  'Nejhezčí věci nebývají vždycky vidět hned — někdy je potřeba jen trochu trpělivosti.',
  'Když má někdo dobrou náladu, svět vypadá hned o trochu lépe.'
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
