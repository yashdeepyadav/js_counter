let score =0;

let plus = document.querySelector("#plus");

let minus = document.querySelector("#minus");

let start = document.querySelector("#start");

let count = document.querySelector("#count");

start.addEventListener("click",()=>{
  score=0;
  count.innerText=score;
})

plus.addEventListener("click",()=>{
  score++;
  count.innerText=score;
})

minus.addEventListener("click",()=>{
  if(score>0){
    score--;
    count.innerText=score;
  }else if(score===0){
    alert("Can't go below ZERO!!!")
  }
  
})