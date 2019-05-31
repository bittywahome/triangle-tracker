function calculate(){
 var L=parseFloat(document.getElementById("l").value);
 var W=parseFloat(document.getElementById("w").value);
 var B=parseFloat(document.getElementById("b").value);

if((L+W)<=B || (W+B)<=L||(B+L)<=W){
 document.getElementById('answer').innerHTML="Not a triangle"
}else if((L == W) && (W == B) && (B == L)){
  document.getElementById('answer') .innerHTML="Equilateral"
}else if((L == W)||(W == B)||(B == L)){
document.getElementById('answer') .innerHTML="isoceles"
}else if ((L!==W) && (W!==B)&&(B!==L)){
  document.getElementById('answer').innerHTML="scalene"
}
};
