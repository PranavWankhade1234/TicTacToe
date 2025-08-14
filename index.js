let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-button");
let newGame = document.querySelector(".new-button");
let messageCotainer = document.querySelector(".winner");
let turn0 = true;
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const EnableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const ResetGame = () => {
    EnableBoxes();
    messageCotainer.classList.add("hide");
    let pText = document.querySelector(".winnerMessage");
                pText.innerText = "";
    for (let box of boxes) {
        box.innerText = "";
        turn0 = true;
    }
}
const winPattern = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        WinnerCheck();
    });
});
const WinnerCheck=()=>{
    for (let pattern of winPattern) {
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("WINNER IS " + pos1Val);
                disableBoxes();
                messageCotainer.classList.remove("hide");
                let pText = document.querySelector(".winnerMessage");
                pText.innerText = `CONGRATULATIONS WINNER IS ${pos1Val}`;
            }
        }
        
 
    }
}
newGame.addEventListener("click", ResetGame);
resetBtn.addEventListener("click", ResetGame);
// const resetGame = () => {
    
// }
