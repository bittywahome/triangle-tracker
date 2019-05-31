var trianglelength =parseInt(prompt("enter number1"));
var trianglewidth= parseInt(prompt("enter  number2"));
var trianglebase = parseInt(prompt("enter number3"));

 if(trianglelength == trianglewidth && trianglewidth == trianglebase && trianglebase == trianglelength){
  alert("Equilateral");
}

 else if(trianglelength == trianglewidth||trianglewidth == trianglebase||trianglebase == trianglelength){
alert("isoceles");
 }

else{
 alert("scalene");
 }
