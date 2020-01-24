// modified source code from https://www.cyberdelia.party

var W = 50;
var M = Math;

var calculate = function(x, y) {
  var t =+ new Date / W;
  var d = function(a, b) {
    return M.sqrt(M.pow(a - 99, 2) + M.pow(b - 66, 2));
  };

  var v = M.sin(d(x + t, y) / 7) + Math.sin(d(x, y) / 7) + Math.sin(d(x, t / 4) / 7) + Math.sin(d(x, y + t) / 7);
  return(0 | (7 + v)) * 10;
};

var title = document.title;

var chooseChar = function(b){
  return b < 50 ? " " : b < 70 ? "_" : b < 80 ? "=" : b < 100 ? "-" : " ";
};

var p = document.getElementById("p");

if (p != undefined) {
  var displayText = function() {
    var margin = M.trunc((W - title.length) / 2);
    p.innerHTML = "";
    for(k = 0, l = "", x = 0; x < W; x++) {
      l += x == margin - 1 || x == margin + title.length ? "." : x >= margin && x < title.length + margin ? title[k++] : chooseChar(calculate(0, x));
    }
    p.innerHTML += l + "<br>";
  };

  window.onload = Function("","setInterval(displayText, 42)");
}
