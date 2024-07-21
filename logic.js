let btn =Array.from( document.getElementsByClassName("btn") )
//btn=[btn,btn,btn,btn,btn,btn,btn,btn,btn] converts into array with unique location
let restartBtn = document.getElementById("btn-restart")
// let spaces = Array(9).fill(null)// to wheter the elment was visited earlier


let spaces = Array(9).fill("")
const x_turn ="X"
const o_turn ="O"
let currentPlayer = x_turn
let wonMsg = document.getElementById("won-msg")
let drawMsg = document.getElementById("draw-msg")
let xColor = document.getElementById("x-turn")
let oColor = document.getElementById("o-turn")
// xColor.style.backgroundColor = "blue"


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
          wonMsg.innerHTML = `<span>${currentPlayer}</span>  won! 🎊🎉`
        }
    if (checkDraw())
    {
         drawMsg.innerText = `Game Draw!!` 
    }
    

        //changing player
    if (currentPlayer===x_turn)
    {
        currentPlayer=o_turn
        xColor.style.backgroundColor = "#29dbba"
        oColor.style.backgroundColor = "#d90368"
    }
    else
    {
        currentPlayer=x_turn
        xColor.style.backgroundColor = "#d90368"
        oColor.style.backgroundColor = "#29dbba"
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
    wonMsg.textContent = ''
    drawMsg.textContent= ''
    xColor.style.backgroundColor = "#d90368"
    oColor.style.backgroundColor = "#29dbba"

    btn.forEach(function(box)
{
    box.style.backgroundColor ="#29dbba"
})
}
)


// store the win combination
const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon()
{
    let winStatus = false
    for(let i = 0 ; i <winCombo.length ; i++)
    {      
           
           let aID = winCombo[i][0]//storing the id 
           let a = spaces[aID]
           let bID = winCombo[i][1]
           let b = spaces[bID]
           let cID = winCombo[i][2]
           let c = spaces[cID]
           
           if(a===currentPlayer && b===currentPlayer && c===currentPlayer)
           {
            winStatus = true
            spaces.fill("true")
            btn[aID].style.backgroundColor= '#d90368'
            btn[bID].style.backgroundColor= '#d90368'
            btn[cID].style.backgroundColor= '#d90368'
            
            break
           }

     }
    return winStatus
}

function checkDraw()
{
   let count = 0
   for(let i=0 ; i<9 ;i++)
   {
        if(spaces[i]==="X" || spaces[i]==="O")
        {
            count++
            console.log(count)
        }
   }
   if(count===9)
   {
    console.log(count)
    return true

   }
   return false
}
