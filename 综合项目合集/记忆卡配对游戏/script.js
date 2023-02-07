(function () {
    startGame();
    $(".newGame").on("click", (e) => {
        console.log(1111);
        startGame();
    })
    $("#card-container").on("click", ".card:not(.confirm)", (e) => {
        if (trigger) {
            clickCard(e);
        }
    })
})()

let cardMatch = [];
let trigger = true;

function startGame() {
    var icons = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    let cards = $(".card");
    $(".card").removeClass("choose");
    $(".card").removeClass("confirm");
    $(".card").addClass("start")
    for (var i = 0; i < cards.length; i++) {
        var randomIndex = Math.floor(Math.random() * icons.length);
        var icon = icons[randomIndex];
        cards[i].innerHTML = icon;
        cards[i].setAttribute("data-num", icon);
        icons.splice(randomIndex, 1);
    }

}

function clickCard(e) {
    console.log(cardMatch);
    console.log(111);
    cardMatch.push(e.target)
    if (cardMatch.length == 2) {
        $(e.target).addClass("choose");
        console.log(222);
        console.log(cardMatch);
        if (cardMatch[0].dataset.num == cardMatch[1].dataset.num) {
            console.log("ok", cardMatch[0].dataset.num, cardMatch[0].dataset.num);
            for (let index = 0; index < cardMatch.length; index++) {
                const element = cardMatch[index];
                $(element).addClass("confirm");
                $(element).removeClass("animate");
                setTimeout(() => {
                    $(element).addClass("animate");
                }, 20)


            }
            cardMatch = [];
        } else {
            trigger = false;
            const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            timeout(1000).then(() => {
                console.log("不对");
                for (let index = 0; index < cardMatch.length; index++) {
                    const element = cardMatch[index];
                    console.log("element");
                    $(element).removeClass("choose");
                    $(element).removeClass("confirm");
                }
                cardMatch = [];
                trigger = true;
            });
        }



    } else {
        $(e.target).addClass("choose");
    }
    if ($('.card').not('.confirm').length === 0) {
        const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        timeout(200).then(() => {
            alert("你获得了胜利，可以点击newgame开始新的游戏")
        });

    }
}