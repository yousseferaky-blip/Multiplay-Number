
let Form = document.querySelector(".Form")
let Score = document.getElementById("Score")
let Multiply = document.getElementById("Multiply")
let Input = document.getElementById("Input")
let btn = document.getElementById("btn")


let Num1 = Math.ceil(Math.random()*10)
let Num2 = Math.ceil(Math.random()*20)

 let ScoreNum = JSON.parse(localStorage.getItem("Result"))

if(!ScoreNum){
     ScoreNum = 0
}

Score.innerText = `Score: ${ScoreNum}`
Multiply.innerText = `What Is ${Num1} Multiply by ${Num2} ?`

let Correct = Num1 * Num2

Form.addEventListener("submit",()=>{

    Value = Input.value

    if(Value == Correct){
        ++ScoreNum
        Storage()

    }else{
        --ScoreNum
        Storage()
    }
    Input.focus()
})

function Storage(){
    localStorage.setItem("Result",JSON.stringify(ScoreNum))
}

