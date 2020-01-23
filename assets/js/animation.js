// for a commented version go to http://www.cyberdelia.xyz/annotated.js

var W = 50;
var M = Math;

var calculate = function(x, y) {
  var t =+ new Date / W;
  var d = function(a, b) {
    return M.sqrt(M.pow(a - 99, 2) + M.pow(b - 66, 2))
  };

  var v = M.sin(d(x + t, y) / 7) + Math.sin(d(x, y) / 7) + Math.sin(d(x, t / 4) / 7) + Math.sin(d(x, y + t) / 7);

  return(0 | (7 + v)) * 23;
};

var title = document.title;

var chooseChar = function(b){
  // return b < 70 ? " " : b < 100 ? "." : b < 175 ? "o" : b < 200 ? "O" : "@";
  return b < 70 ? " " : b < 100 ? "_" : b < 175 ? "-" : b < 200 ? "+" : "@";
};

var displayText = function() {
  var margin = M.trunc((W - title.length) / 2);
  console.log("margin: " + margin);

  p.innerHTML = "";
  // for(y = 1; y--;) {
    for(k = 0, l = "", x = 0; x < W; x++) {
      // l += y==10 && x > 31 && x < 50 ? title[k++] : chooseChar(calculate(y, x));
        l += x == margin - 1 || x == margin + title.length ? "." : x >= margin && x < title.length + margin ? title[k++] : chooseChar(calculate(0, x));
    }
    p.innerHTML += l + "<br>";
  // }
};

window.onload = Function("","setInterval(displayText, 42)");
