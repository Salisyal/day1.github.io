 STORE "massa" with 600kg
 STORE "acceleration" with 2 m/s2
 STORE "area" without any value

 CALCULATE "massa" times "acceleration"
 SET "area" value with calculation result

 DISPLAY "area"


 var m = 600;
 var a = 2;
 CALCULATE = m * a;
 console.log(CALCULATE);