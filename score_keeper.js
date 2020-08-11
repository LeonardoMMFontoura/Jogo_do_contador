let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

p1_pont = 0;
p2_pont = 0;

let gameOver = false;
let venceu = 5;

p1.addEventListener("click", function() {
    if(!gameOver){
        p1_pont++;
        if(p1_pont == venceu){
            gameOver = true;
        }
        p1Display.textContent = p1_pont;
    }
});


p2.addEventListener("click", function() {
    if(!gameOver)
        p2_pont++;
        if(p2_pont == venceu){
            gameOver = true;
        }
    p2Display.textContent = p2_pont;
});