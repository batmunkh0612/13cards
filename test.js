const cards = [
    // <<<--- Diamond Start --->>>
    {
        id: 'A',
        name: 'diamond',
        img: '',
        rank: 12,
    },
    {
        id: 'K',
        name: 'diamond',
        img: '',
        rank: 11,
    },
    {
        id: 'Q',
        name: 'diamond',
        img: '',
        rank: 10,
    },
    {
        id: 'J',
        name: 'diamond',
        img: '',
        rank: 9,
    },
    {
        id: '10',
        name: 'diamond',
        img: '',
        rank: 8,
    },
    {
        id: '9',
        name: 'diamond',
        img: '',
        rank: 7,
    },
    {
        id: '8',
        name: 'diamond',
        img: '',
        rank: 6,
    },
    {
        id: '7',
        name: 'diamond',
        img: '',
        rank: 5,
    },
    {
        id: '6',
        name: 'diamond',
        img: '',
        rank: 4,
    },
    {
        id: '5',
        name: 'diamond',
        img: '',
        rank: 3,
    },
    {
        id: '4',
        name: 'diamond',
        img: '',
        rank: 2,
    },
    {
        id: '3',
        name: 'diamond',
        img: '',
        rank: 1,
    },
    {
        id: '2',
        name: 'diamond',
        img: '',
        rank: 13,
    },
    // <<<--- Diamond End --->>>
    // <<<--- Club Start --->>>
    {
        id: 'A',
        name: 'club',
        img: '',
        rank: 12,
    },
    {
        id: 'K',
        name: 'club',
        img: '',
        rank: 11,
    },
    {
        id: 'Q',
        name: 'club',
        img: '',
        rank: 10,
    },
    {
        id: 'J',
        name: 'club',
        img: '',
        rank: 9,
    },
    {
        id: '10',
        name: 'club',
        img: '',
        rank: 8,
    },
    {
        id: '9',
        name: 'club',
        img: '',
        rank: 7,
    },
    {
        id: '8',
        name: 'club',
        img: '',
        rank: 6,
    },
    {
        id: '7',
        name: 'club',
        img: '',
        rank: 5,
    },
    {
        id: '6',
        name: 'club',
        img: '',
        rank: 4,
    },
    {
        id: '5',
        name: 'club',
        img: '',
        rank: 3,
    },
    {
        id: '4',
        name: 'club',
        img: '',
        rank: 2,
    },
    {
        id: '3',
        name: 'club',
        img: '',
        rank: 1,
    },
    {
        id: '2',
        name: 'club',
        img: '',
        rank: 13,
    },
    // <<<--- Club End --->>>
    // <<<--- Heart Start --->>>
    {
        id: 'A',
        name: 'heart',
        img: '',
        rank: 12,
    },
    {
        id: 'K',
        name: 'heart',
        img: '',
        rank: 11,
    },
    {
        id: 'Q',
        name: 'heart',
        img: '',
        rank: 10,
    },
    {
        id: 'J',
        name: 'heart',
        img: '',
        rank: 9,
    },
    {
        id: '10',
        name: 'heart',
        img: '',
        rank: 8,
    },
    {
        id: '9',
        name: 'heart',
        img: '',
        rank: 7,
    },
    {
        id: '8',
        name: 'heart',
        img: '',
        rank: 6,
    },
    {
        id: '7',
        name: 'heart',
        img: '',
        rank: 5,
    },
    {
        id: '6',
        name: 'heart',
        img: '',
        rank: 4,
    },
    {
        id: '5',
        name: 'heart',
        img: '',
        rank: 3,
    },
    {
        id: '4',
        name: 'heart',
        img: '',
        rank: 2,
    },
    {
        id: '3',
        name: 'heart',
        img: '',
        rank: 1,
    },
    {
        id: '2',
        name: 'heart',
        img: '',
        rank: 13,
    },
    // <<<--- Heart End --->>>
    // <<<--- Spade Start --->>>
    {
        id: 'A',
        name: 'spade',
        img: '',
        rank: 12,
    },
    {
        id: 'K',
        name: 'spade',
        img: '',
        rank: 11,
    },
    {
        id: 'Q',
        name: 'spade',
        img: '',
        rank: 10,
    },
    {
        id: 'J',
        name: 'spade',
        img: '',
        rank: 9,
    },
    {
        id: '10',
        name: 'spade',
        img: '',
        rank: 8,
    },
    {
        id: '9',
        name: 'spade',
        img: '',
        rank: 7,
    },
    {
        id: '8',
        name: 'spade',
        img: '',
        rank: 6,
    },
    {
        id: '7',
        name: 'spade',
        img: '',
        rank: 5,
    },
    {
        id: '6',
        name: 'spade',
        img: '',
        rank: 4,
    },
    {
        id: '5',
        name: 'spade',
        img: '',
        rank: 3,
    },
    {
        id: '4',
        name: 'spade',
        img: '',
        rank: 2,
    },
    {
        id: '3',
        name: 'spade',
        img: '',
        rank: 1,
    },
    {
        id: '2',
        name: 'spade',
        img: '',
        rank: 13,
    },
    // <<<--- Spade End --->>>
]
const p1Arr = [];
const p2Arr = [];
const p3Arr = [];
const saveCard = [];
const saveCard1 = [];
const saveCard2 = [];
const player1Use = [];
const player2Use = [];
const player3Use = [];
const player4Use = [];
`saveCard yagaad ashiglaj bga ve geheer player1-d 13 ni card taraagaad ter
cardnuud ni 0-51 hoorond ynz buriin bairlalaas awch bga bolhoor ter
bairluudiig sanaj awah array hereg bolj bga daraa ni ter songogdson 13
cardiig undsen 52 card-naas hashiin tuld`
//player1 13card
//player-d ochih 13 card-iin bairlaliig togtooj awah;
let loopNum = 14;
for (let i = 1; i < loopNum; i++) {
    let rNum = Math.floor(Math.random() * (52 - 1 + 1)) + 1
    if (rNum === 53 || rNum === 0) {
        loopNum++;
        continue;
    } else if (-1 != saveCard.indexOf(rNum)) {
        loopNum++;
        continue;
    }
    saveCard.push(rNum) //bairlaliig sanah uildel
    p1Arr.push(cards[rNum - 1]); //songogdson 13 card-iig player1-ruu oruulah uildel
}
`bairluudiin ni hamaagui daraalaltai bga bolhoor sort hiij daraalald oruulna`
saveCard.sort(function(a, b) { return a - b });
//allCardsaas player-iin 13 cardiig hasah uildel
for (let i = saveCard.length - 1; i >= 0; i--) {
    cards.splice(saveCard[i] - 1, 1)
}

`dawtaltiin toog dahin oruulaj ogohgui bol global huvisag ch uchir oorchlogdson bga`
loopNum = 14;
//dahin 39card-naas player2-t 13 card-iig huwaah uildel
for (let i = 1; i < loopNum; i++) {
    let rNum = Math.floor(Math.random() * (39 - 1 + 1)) + 1
    if (rNum === 39 || rNum === 0) {
        loopNum++;
        continue;
    } else if (-1 != saveCard1.indexOf(rNum)) {
        loopNum++;
        continue;
    }
    saveCard1.push(rNum) //mon 0-38 card-iin bairlaliig sanaj awah uildel
    p2Arr.push(cards[rNum - 1]); //songogdson 13 card-iig player2 taraah uildel
}
`player2-iin bairluudiin ni hamaagui daraalaltai bga  bolhoor sort hiij daraalald oruulna`
saveCard1.sort(function(a, b) { return a - b });
//undesen 39 card-aas player2-iin 13 card-iig hasah uildel 
for (let i = saveCard1.length - 1; i >= 0; i--) {
    cards.splice(saveCard1[i] - 1, 1);
}
//player3
loopNum = 14;
for (let i = 1; i < loopNum; i++) {
    let rNum = Math.floor(Math.random() * (26 - 1 + 1)) + 1
    if (rNum === 26 || rNum === 0) {
        loopNum++;
        continue;
    } else if (-1 != saveCard2.indexOf(rNum)) {
        loopNum++;
        continue;
    }
    saveCard2.push(rNum) //bairlaliig sanah uildel
    p3Arr.push(cards[rNum - 1]); //songogdson 13 card-iig player1-ruu oruulah uildel
}
`bairluudiin ni hamaagui daraalaltai bga bolhoor sort hiij daraalald oruulna`
saveCard2.sort(function(a, b) { return a - b });
//allCardsaas player-iin 13 cardiig hasah uildel
for (let i = saveCard2.length - 1; i >= 0; i--) {
    cards.splice(saveCard2[i] - 1, 1)
}

//player4
let p4Arr = cards;


//zurah uildel
//player1-iin 13 card-iig html deer zurah uildel

for (const i of p1Arr) {
    let $card = document.createElement('div');
    let $id = document.createElement('p');
    let $name = document.createElement('p');
    $card.classList.add('card');
    $id.innerText = i.id;
    $name.innerText = i.name;
    $card.append($id, $name);
    $card.onclick = () => {
        if (player1Use.indexOf(i) != -1) {
            return 0;
        };
        if (player1Use.length === 5) {
            return 0;
        }
        player1Use.push(i);
        document.querySelector('.player1Use').append($card);
        let DeleteNum = p1Arr.indexOf(i);
        p1Arr.splice(DeleteNum, 1);
    }
    document.querySelector('.player1').append($card);
}
//player2-iin 13 card-iig html deer zurah uildel
for (const i of p2Arr) {
    let $card = document.createElement('div');
    let $id = document.createElement('p');
    let $name = document.createElement('p');
    $card.classList.add('card');
    $id.innerText = i.id;
    $name.innerText = i.name;
    $card.append($id, $name);
    $card.onclick = () => {
        if (player2Use.indexOf(i) != -1) {
            return 0;
        };
        if (player2Use.length === 5) {
            return 0;
        }
        player2Use.push(i);
        document.querySelector('.player2Use').append($card);
        let DeleteNum = p2Arr.indexOf(i);
        p2Arr.splice(DeleteNum, 1);
    }
    document.querySelector('.player2').append($card);
}
for (const i of p3Arr) {
    let $card = document.createElement('div');
    let $id = document.createElement('p');
    let $name = document.createElement('p');
    $card.classList.add('colCard');
    $id.innerText = i.id;
    $name.innerText = i.name;
    $card.append($id, $name);
    $card.onclick = () => {
        if (player3Use.indexOf(i) != -1) {
            return 0;
        };
        if (player3Use.length === 5) {
            return 0;
        }
        player3Use.push(i);
        document.querySelector('.player3Use').append($card);
        let DeleteNum = p3Arr.indexOf(i);
        p3Arr.splice(DeleteNum, 1);
    }
    document.querySelector('.player3').append($card);
}
for (const i of p4Arr) {
    let $card = document.createElement('div');
    let $id = document.createElement('p');
    let $name = document.createElement('p');
    $card.classList.add('colCard');
    $id.innerText = i.id;
    $name.innerText = i.name;
    $card.append($id, $name);
    $card.onclick = () => {
        if (player4Use.indexOf(i) != -1) {
            return 0;
        };
        if (player4Use.length === 5) {
            return 0;
        }
        player4Use.push(i);
        document.querySelector('.player4Use').append($card);
        let DeleteNum = p4Arr.indexOf(i);
        p4Arr.splice(DeleteNum, 1);
    }
    document.querySelector('.player4').append($card);
}







//check use
// id: 'A',
// name: 'diamond',
//first Player1-iin garagsan card-iig tooloh

let clone = 0
let combo = false;
`3 ijil card-iig {set}
2 ijil card-iig {hos}
1 card-iig {gants}
4 card-iig {bongo}
5 card-iig {straight,flush,pul}`
const player1Check = document.querySelector('.checkPlayer1').onclick = () => {
    if (player1Use.length === 3) {
        clone = 1;
        for (let i = 1; i < player1Use.length; i++) {
            if (player1Use[0].id === player1Use[i].id) {
                clone++;
            }
        }
        if (clone === 3) {
            console.log('ene bol set ni unen bn');
        }
        console.log(`ene bol set`);
    } else if (player1Use.length === 2) {
        if (player1Use[0].id === player1Use[1].id) {
            console.log('ene bol hos ni unen bn');
        }
        console.log(`ene bol hos`);
    } else if (player1Use.length === 1) {
        console.log('ene bol ugaasaa bat unen bn gants gedeg ni');
        console.log('ene bol gants');
    } else if (player1Use.length === 5) {
        //flush shalgalt
        clone = 1;
        for (let i = 1; i < player1Use.length; i++) {
            if (player1Use[0].name === player1Use[i].name) {
                clone++;
            }
        }
        if (clone === 5) {
            console.log('ene bol flush ni une bn');
        }
        //pul shalgalt
        let a;
        clone = 1;
        for (let i = 1; i < player1Use.length; i++) {
            if (player1Use[0].name === player1Use[i].name) {
                clone++;
            } else {
                a = i;
            }
        }
        if (clone === 2) {
            clone = 1;
            for (let i = 0; i < player1Use.length; i++) {
                if (a === i) {
                    continue;
                }
                if (player1Use[a].name === player1Use[i].name) {
                    clone++;
                }
            }
            if (clone === 3) {
                console.log('pul ni unen bn');
            }
        } else if (clone === 3) {
            clone = 1;
            for (let i = 0; i < player1Use.length; i++) {
                if (a === i) {
                    continue;
                }
                if (player1Use[a].name === player1Use[i].name) {
                    clone++;
                }
            }
            if (clone === 2) {
                console.log('pul ni unen bn');
            }
        }


        //straight shalgalt




        console.log(`ene bol straight,flush,pul ene 3-iin ali neg ni baih ystoi`);
    }


    if (clone === 5) {
        combo = true;
    } else {
        console.log(clone)
        clone = 1;
    }
    console.log(combo)

    for (let i = 0; i < player1Use.length; i++) {
        for (let j = i + 1; j < player1Use.length; j++) {
            if (player1Use[j].id === player1Use[i].id) {
                clone++;
                i++;
            };
        }
    }
    console.log(clone)
};