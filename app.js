let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#mybutton");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");
let turn0 = true;
//playerx // playero
let count = 0;
let flag = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// 4.
const disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
} 
const drawMatch = ()=>
{
    msgContainer.classList.remove("hide");
    msg.innerText = "Match is Draw";
    container.classList.add("hide");
    disableBoxes();
}
// 5.
const enableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
} 

// 6.
const resetGame = ()=>
{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
    count = 0;
}


// 3.
const showWinner = (winner)=>
{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
    disableBoxes();

}

// 2.
const checkWinner = (count)=>
    {
        for(pattern of winPatterns )
        {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            // console.log(pattern[0] , pattern[1] , pattern[2]);
            // console.log(pos1 , pos2, pos3);

            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 === pos2 &&  pos2 === pos3)
                {
                    flag =1;
                    // alert("winner" , pos1);

                    return showWinner(pos1);

                }
            }
            if(count == 9 && flag == 0)
            {
                count = 0;
                return drawMatch();


            }
           
        }
        
    };



    // 1.
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        // console.log("box was clicked");

        // box.innerText = "x";
        // box.style.fontSize = "5rem"
        count++;
        if(turn0) 
        {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = "true";
        console.log(count);
        checkWinner(count);
       

    }
    )
});



newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
