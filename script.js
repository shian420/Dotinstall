
const num=10;
const winner=Math.floor(Math.random() * num);

for(let i=0;i<num;i++){

const div=document.createElement("div");
div.classList.add("box");
div.textContent=i+1;

div.addEventListener('click',()=>{
if(i === winner){
  div.innerHTML="当たり！";
  div.classList.add("win");
}else{
    div.innerHTML="はずれ";
  div.classList.add("lose");
}
});

document.body.appendChild(div);
}
