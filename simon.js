let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "purple"];
let start = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    // one time game start
    if (start == false) {
        console.log("game is started");
        start = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randinx = Math.floor(Math.random() * 3);
    let randcolor = btns[randinx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx) {
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b><br>press any key to start. `;
       document.querySelector("body").style.background="red";
       setTimeout(function(){
        document.querySelector("body").style.background="white";
       },250);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level =0;

}