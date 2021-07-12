document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'blue',
            img: 'img/blue.png'  
        },
        {
            name: 'blue',
            img: 'img/blue.png'  
        },
        {
            name: 'green',
            img: 'img/green.png'  
        },
        {
            name: 'green',
            img: 'img/green.png'  
        },
        {
            name: 'orange',
            img: 'img/orange.png'  
        },
        {
            name: 'orange',
            img: 'img/orange.png'  
        },
        {
            name: 'purple',
            img: 'img/purple.png'  
        },
        {
            name: 'purple',
            img: 'img/purple.png'  
        },
        {
            name: 'red',
            img: 'img/red.png'  
        },
        {
            name: 'red',
            img: 'img/red.png'  
        },
        {
            name: 'yellow',
            img: 'img/yellow.png'  
        },
        {
            name: 'yellow',
            img: 'img/yellow.png'  
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.getElementById('result')
    var cards_chosen = []
    var cardsChosenId = []
    var cardsWon = []

    function create_board() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/black.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flip_card)
            grid.append(card)
        }
    }


    //check for matches
    function checkForMatch() {
        cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image!')
            cards[optionOneId].setAttribute('src', 'img/black.png')
        } else if (cards_chosen[0] == cards_chosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cards_chosen[0])
            cards[optionOneId].removeEventListener('click', flip_card)
            cards[optionTwoId].removeEventListener('click', flip_card)
        } else {
            cards[optionOneId].setAttribute('src', 'img/black.png')
            cards[optionTwoId].setAttribute('src', 'img/black.png')
            alert('Sorry, try again')
        }
        cardsChosenId = []
        cards_chosen = []
        resultDisplay.innerHTML = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratualtions, you won!"
        }
    }

    //flip your card
    function flip_card() {
        let card_ID = this.getAttribute('data-id')
        cards_chosen.push(cardArray[card_ID].name)
        cardsChosenId.push(card_ID)
        this.setAttribute('src', cardArray[card_ID].img)
        if (cards_chosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    create_board()

})