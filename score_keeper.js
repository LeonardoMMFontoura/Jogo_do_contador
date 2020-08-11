let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

p1_pont = 0;
p2_pont = 0;


p1.addEventListener("click", function() {
    p1_pont++;
    p1Display.textContent = p1_pont;
});


p2.addEventListener("click", function() {
    p2_pont++;
    p2Display.textContent = p2_pont;
});