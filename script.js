let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissor=document.querySelector("#scissor")
let p=document.querySelector("#game")
let result=document.querySelector("#result")




let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")

var player=0;
var com=0;
var comp;

rock.addEventListener("click",()=>{
    comp=compMove();
    p.innerText=`You choose rock \nComputer choose ${comp}`
    console.log(comp)
    if(comp=="paper"){
        result.innerText="You loss"
        com++;
        score();

    }
    else if(comp=="scissor"){
        result.innerText="You win"
        player++
        score();
    }
    else
        result.innerText="Draw"

})
paper.addEventListener("click",()=>{
    comp=compMove();
    console.log(comp)
    p.innerText=`You choose paper \nComputer choose ${comp}`
    if(comp=="paper")
        result.innerText="Draw"
    else if(comp=="scissor"){
        result.innerText="You loss"
        com++
        score();
    }
    else{
        result.innerText="You win"
        player++;
        score();
    }
})
scissor.addEventListener("click",()=>{
    comp=compMove();
    console.log(comp)
    p.innerText=`You choose scissor \nComputer choose ${comp}`
    if(comp=="paper"){
        result.innerText="You win"
        player++;
        score();
    }
    else if(comp=="scissor")
        result.innerText="Draw"
    else{
        result.innerText="You loss"
        com++;
        score();
    }
})

const compMove=()=>{
    let choices=["rock","paper","scissor"]
    let choice=choices[Math.floor((Math.random()) * 3)]
    
    return choice;
}

const score=()=>{
    p1.innerText=player;
    p2.innerText=com;
}