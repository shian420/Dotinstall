
const num=10;
let array=[1,2,3,4,5,6,7,8,9,10];
array.unshift(0,11);


for(let i=0;i<array.length;i++){

const div=document.createElement("div");
div.classList.add("box");
div.textContent=i+1;

const winner=array[Math.floor(Math.random() * array.length)];

div.addEventListener('click',()=>{

switch(winner){
  case 1:
  case 2:
  div.innerHTML="当たり！";
  div.classList.add("win");
  break;
  case 3:
  case 4:
    div.innerHTML="はずれ";
  div.classList.add("lose");
break;
case 5:
case 6:
  div.innerHTML="はずれ5,6";
div.classList.add("lose");
break;
case 7:
case 8:
  div.innerHTML="はずれ7,8";
div.classList.add("lose");
break;
case 9:
case 10:
  div.innerHTML="はずれ9,10";
div.classList.add("lose");
break;
}
});

document.body.appendChild(div);
}

{
  const a = x => x + 3;
console.log(a(3));


const scores=[10,20,30,40,50];

console.log(scores[0]);
scores.shift();
console.log(scores);
scores.pop();
console.log(scores);
scores.unshift(10,15);
console.log(scores);
scores.push(60,70);
console.log(scores);
scores.splice(3,3);
console.log(scores);
scores.splice(3,0,30,40,50,60);
console.log(scores);

//分割代入
const [z,b,c,d,...other]=scores;
console.log(other);

const summary=(e,f,g,h)=>{
  console.log(e+f+g+h);
}
summary(...other);

console.log(scores);
//scoresから渡される引数↓
scores.forEach((test,index)=>{
  console.log(index);
  console.log(test);
});

//const newScores=scores.map(x => x *2);
//console.log(newScores);

const newScores=scores.filter(x =>{
  if(x >30){
    return true;
  }else{
    return false;
  }
});
console.log(newScores);
}
//ここまで配列

const mario={
  color:"red",
  game:"kart",
  brother:"luigi",
}

const points={
  x:20,
  y:30,
  ...mario,
}
console.log(points.color);

const {x,y,game,...others}=points;
console.log(game + ","  + x + "," + y);
console.log(others);

const newKey=Object.keys(points);
newKey.forEach(key =>{
  console.log("key=>"+ key + ":" + points[key]);
});
