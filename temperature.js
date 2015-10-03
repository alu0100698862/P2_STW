"use strict";
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i;

  var m = temp.match(regex);

  if(m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + " Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result + " Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML ="ERROR! Try something like '-4.2C' instead";
  }
}
