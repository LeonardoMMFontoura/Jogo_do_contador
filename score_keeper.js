let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
p1_pont = 0;



p1.addEventListener("click", function() {
    p1_pont++;
    p1Display.textContent = p1_pont;
});