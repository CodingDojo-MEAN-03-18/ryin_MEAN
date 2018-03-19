class Deck{

    constructor(){
        this.deck = [];
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        for (const suit in suits){
            for (const rank in ranks){
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
        // console.log(this.deck);
    }

    reset(){
        this.deck.length = 0;
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        for (const suit in suits){
            for (const rank in ranks){
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
        return this;
    }

    shuffle(){
        let deckLength = this.deck.length;
        let temp;
        let randomCard;
        while(deckLength){
            randomCard = Math.floor(Math.random()*deckLength--)
            //Swapping card places in the array
            temp = this.deck[deckLength]
            this.deck[deckLength] = this.deck[randomCard];
            this.deck[randomCard] = temp;
        }
        // console.log(this.deck);
        return this;
    }

    deal(){
        let card = this.deck.pop();
        console.log(card);
        return card;
    }

    dealRand(){
        let randDraw = Math.floor(Math.random() * this.deck.length);
        let randCard = this.deck.splice(randDraw, 1);
        return randCard;
    }
}

class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = [];
    }    
    
    takeCard(deck){
        this.hand.push(deck.deal());
        console.log(`${this.name} took a card, ${deck.deck.length} cards left in the deck`);
        return this
    }
    
    discard(index){
        if (index < 0 || index > this.hand.length-1){
            return console.log('you must select a card from your hand to discard');
        }
        let card = this.hand.splice(index, 1);
        console.log(`${this.name} discarded a ${card}`)
        return this;
    }
}


const deck = new Deck();
const player = new Player('007');
deck.shuffle();
// deck.deal();
// deck.dealRand();
// deck.shuffle();
// deck.reset();
player.takeCard(deck).takeCard(deck).takeCard(deck);
player.discard(0);




