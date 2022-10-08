let textHedaer = document.querySelector(".header");
let boxes = document.querySelectorAll(".box");
let resultX = document.querySelector(".result .x span");
let resultO = document.querySelector(".result .o span");


let n = "x"
let scoreX = 0;
let scoreO = 0;

let storX  = sessionStorage.getItem("X")
let storO  = sessionStorage.getItem("O")
if (storX != null) {
    scoreX = storX
}
if (storO != null) {
    scoreO = storO
}

let storage = sessionStorage.getItem("winner")
if (storage != null) {
    n = storage
}

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (n === "x" && e.target.innerHTML === "") {
            e.target.innerHTML = "x"
            textHedaer.innerHTML = "o"
            n = "o"
        }else if (n === "o" && e.target.innerHTML === "") {
            e.target.innerHTML = "o"
            textHedaer.innerHTML = "x"
            n = "x"
        }
        boxF()
    })
})

function boxF() {
    if (boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML != "") {
        game(0, 1, 2)
    }else if (boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[6].innerHTML != "") {
        game(6, 7, 8)
    }else if (boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML != "") {
        game(3, 4, 5)
    }else if (boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML != "") {
        game(0, 3, 6)
    }else if (boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML != "") {
        game(1, 4, 7)
    }else if (boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML != "") {
        game(2, 5, 8)
    }else if (boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML != "") {
        game(0, 4, 8)
    }else if (boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML != "") {
        game(2, 4, 6)
    } else if (boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "" && boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "" && boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") {
        out()
    }
}

function game(num1, num2, num3) {
    boxes[num1].style.backgroundColor = "black"
    boxes[num2].style.backgroundColor = "black"
    boxes[num3].style.backgroundColor = "black"

    boxes.forEach((ele) => {
        ele.classList.add("true")
    })

    textHedaer.innerHTML = `{${boxes[num1].innerHTML}} Is winner`
    setInterval(() => {
        textHedaer.innerHTML += "."
    }, 1000);
    setTimeout(() => {
        window.location.reload()
    }, 3000);

    if (boxes[num1].innerHTML === "x") {
        scoreX++
    }else {
        scoreO++
    }

    resultX.innerHTML = scoreX
    resultO.innerHTML = scoreO
    
    sessionStorage.setItem("winner", boxes[num1].innerHTML)
    sessionStorage.setItem("X", scoreX)
    sessionStorage.setItem("O", scoreO)
    
}

function out() {
    textHedaer.innerHTML = "No one won"
        setInterval(() => {
            textHedaer.innerHTML += "."
        }, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 3000);
}

resultX.innerHTML = scoreX
resultO.innerHTML = scoreO