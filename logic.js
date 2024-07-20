let btn =Array.from( document.getElementsByClassName("btn") )
//btn=[btn,btn,btn,btn,btn,btn,btn,btn,btn] converts into array with unique location
let restartBtn = document.getElementById("btn-restart")
let spaces = Array(9).fill(null)// to wheter the elment was visited earlier
const x_turn ="X"
const o_turn ="O"
let currentPlayer = x_turn
let wonMsg = document.getElementById("won-msg")


console.log(btn)

btn.forEach(function(box)
{
    box.addEventListener('click',btnClicked)
    //goes through each btn to check which btn was clicked
})

function btnClicked(e)//e conatins information about the element that triggerd the event
{
    console.log("clicked")
    console.log(e.target)

    const id=e.target.id//to store id of target element

    if(!spaces[id])//null = false ! changes it to true
   {
    spaces[id]=currentPlayer
    e.target.innerText=currentPlayer   
    //check if any player has won the game 
    if (playerHasWon())
        {
          wonMsg.textContent = `${currentPlayer}  won!!!`
        }
    

        //changing player
    if (currentPlayer===x_turn)
    {
        currentPlayer=o_turn
    }
    else
    {
        currentPlayer=x_turn
    }

   }
}

//restart btn
restartBtn.addEventListener('click', function()
    {
    spaces.fill(null)
    btn.forEach(function(box)
    {
      box.textContent=''
    }
    )
    currentPlayer=x_turn
}
)
// store the win combination
const winCombo = [
    [0,1,2],[3,4,5],[6,7,8]
    [0,3,6],[1,4,7],[2,5,8]
    [0,4,8],[2,4,6]
]

function playerHasWon()
{
  
}
