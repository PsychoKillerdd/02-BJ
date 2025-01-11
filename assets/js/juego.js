let deck = [];
const tipos =      ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
const crearDeck = () => {
    for(let i = 2;i <= 10;i++){
       for(let tipo of tipos){
        deck.push(tipo + i)
       }
    }
    for( let tipo of tipos){
        for(let especial of especiales)
            {     deck.push( especial + tipo)}
       }
}
crearDeck()
deck = _.shuffle(deck)
console.log(deck)






const pediCarta = () => {
    if(deck.length === 0 ){
        throw 'No hay cartas'
    }
    const carta = deck.pop
    console.log(deck)
  return carta
}
console.log(pediCarta())
console.log(deck)