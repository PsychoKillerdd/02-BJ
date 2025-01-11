let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    deck = []; // Reinicia el deck
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo); 
        }
    }
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }
};

// Función de barajado 
const barajarDeck = () => {
    deck = deck.sort(() => Math.random() - 0.5); 
};

crearDeck();
barajarDeck();
console.log(deck);

const pediCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas';
    }

    const carta = deck.pop(); 
    console.log('Quedan en el deck:', deck.length);
    return carta;
};

const Valorcarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); 
    return isNaN(valor) // Si no es un número
        ? (valor === 'A') ? 11 : 10 
        : parseInt(valor); 
};

// Ejemplo de uso:
try {
    const carta = pediCarta(); // Obtén una carta del deck
    const valor = Valorcarta(carta);
    console.log({ carta, valor });
} catch (error) {
    console.error(error);
}
