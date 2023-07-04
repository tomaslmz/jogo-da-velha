const blocos = [document.getElementById("bloco1"), document.getElementById("bloco2"), document.getElementById("bloco3"), document.getElementById("bloco4"), document.getElementById("bloco5"), document.getElementById("bloco6"), document.getElementById("bloco7"), document.getElementById("bloco8"), document.getElementById("bloco9")];
var vez = true;
var isGameRunning = true;
var contador = 0;

blocos[0].addEventListener("click", () => {
    if(blocos[0].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[0].innerHTML = "X";
            vez = false;
        } else {
            blocos[0].innerHTML = "O";
            vez = true;
        }
    }

    blocos[0].style.cursor = "default";
});

blocos[1].addEventListener("click", () => {
    if(blocos[1].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[1].innerHTML = "X";
            vez = false;
        } else {
            blocos[1].innerHTML = "O";
            vez = true;
        }
    }

    blocos[1].style.cursor = "default";
});

blocos[2].addEventListener("click", () => {
    if(blocos[2].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[2].innerHTML = "X";
            vez = false;
        } else {
            blocos[2].innerHTML = "O";
            vez = true;
        }
    }

    blocos[2].style.cursor = "default";
});

blocos[3].addEventListener("click", () => {
    if(blocos[3].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[3].innerHTML = "X";
            vez = false;
        } else {
            blocos[3].innerHTML = "O";
            vez = true;
        }
    }

    blocos[3].style.cursor = "default";
});

blocos[4].addEventListener("click", () => {
    if(blocos[4].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[4].innerHTML = "X";
            vez = false;
        } else {
            blocos[4].innerHTML = "O";
            vez = true;
        }
    }

    blocos[4].style.cursor = "default";
});

blocos[5].addEventListener("click", () => {
    if(blocos[5].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[5].innerHTML = "X";
            vez = false;
        } else {
            blocos[5].innerHTML = "O";
            vez = true;
        }
    }

    blocos[5].style.cursor = "default";
});

blocos[6].addEventListener("click", () => {
    if(blocos[6].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[6].innerHTML = "X";
            vez = false;
        } else {
            blocos[6].innerHTML = "O";
            vez = true;
        }
    }

    blocos[6].style.cursor = "default";
});

blocos[7].addEventListener("click", () => {
    if(blocos[7].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[7].innerHTML = "X";
            vez = false;
        } else {
            blocos[7].innerHTML = "O";
            vez = true;
        }
    }

    blocos[7].style.cursor = "default";
});

blocos[8].addEventListener("click", () => {
    if(blocos[8].innerHTML == '' && isGameRunning) {
        if(vez) {
            blocos[8].innerHTML = "X";
            vez = false;
        } else {
            blocos[8].innerHTML = "O";
            vez = true;
        }
    }

    blocos[8].style.cursor = "default";
});

document.querySelector("main").addEventListener("click", () => {
    contador++;
    if(((blocos[0].innerHTML == 'X' && blocos[1].innerHTML == 'X' && blocos[2].innerHTML == 'X') || (blocos[3].innerHTML == 'X' && blocos[4].innerHTML == 'X' && blocos[5].innerHTML == 'X') || (blocos[6].innerHTML == 'X' && blocos[7].innerHTML == 'X' && blocos[8].innerHTML == 'X') || (blocos[0].innerHTML == 'X' && blocos[4].innerHTML == 'X' && blocos[8].innerHTML == 'X') || (blocos[2].innerHTML == 'X' && blocos[4].innerHTML == 'X' && blocos[6].innerHTML == 'X') || (blocos[1].innerHTML == 'X' && blocos[4].innerHTML == 'X' && blocos[7].innerHTML == 'X') || (blocos[0].innerHTML == 'X' && blocos[3].innerHTML == 'X' && blocos[6].innerHTML == 'X') || (blocos[2].innerHTML == 'X') && blocos[5].innerHTML == 'X' && blocos[8].innerHTML == 'X') && isGameRunning) {
        document.querySelector("h1").innerHTML = "o X ganhou!";
        isGameRunning = false;
    } else if(((blocos[0].innerHTML == 'O' && blocos[1].innerHTML == 'O' && blocos[2].innerHTML == 'O') || (blocos[3].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[5].innerHTML == 'O') || (blocos[6].innerHTML == 'O' && blocos[7].innerHTML == 'O' && blocos[8].innerHTML == 'O') || (blocos[0].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[8].innerHTML == 'O') || (blocos[2].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[6].innerHTML == 'O') || (blocos[1].innerHTML == 'O' && blocos[4].innerHTML == 'O' && blocos[7].innerHTML == 'O') || (blocos[0].innerHTML == 'O' && blocos[3].innerHTML == 'O' && blocos[6].innerHTML == 'O') || (blocos[2].innerHTML == 'O') && blocos[5].innerHTML == 'O' && blocos[8].innerHTML == 'O') && isGameRunning) {
        document.querySelector("h1").innerHTML = "o O ganhou!";
        isGameRunning = false;
    }

    if(contador >= 9) {
        for(let i = 0; i<9; i++) {
            blocos[i].style.cursor = 'default';
        }
        isGameRunning = false;
        document.querySelector("h1").innerHTML = "Empate!"
    }

    if(!isGameRunning) {
        for(let i = 0; i<9; i++) {
            blocos[i].style.cursor = 'default';
        }
        contador = 0;
        document.querySelector("aside").style.display = "flex";
    }
});

const reiniciar = () => {
    for(let i = 0; i<9; i++) {
        blocos[i].style.cursor = "pointer";
        blocos[i].innerHTML = '';
    }
    isGameRunning = true;
    vez = true;
    document.querySelector("aside").style.display = "none";
}
