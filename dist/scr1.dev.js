"use strict";

// there's a script initiation

/*
(() => {
    var script = document.createElement('script');
    //script.src = "https://code.jquery.com/jquery-4.0.0.slim.min.js";
    //script.src = "https://cdn.jsdelivr.net/npm/eruda@3.4.3/eruda.min.js";
    document.body.append(script);
    // that's for eruda
    script.onload = () => {
        eruda.init(); 
    } 
})();
*/
console.log("for adding script like jquery, you need insert script from scr1.js and paste n launch to console");
console.log("https://so.bang.cl/neurocom");
var txt1Ev = document.querySelector('.txt1');
txt1Ev.addEventListener('click', function () {
  var flag = document.createElement('div');
  flag.className = 'warnflag';
  flag.innerHTML = "<span>\n            unavalible\n        </span>";
  document.body.append(flag);
  setTimeout(function () {
    flag.remove();
  }, 4096);
});
var bstyDiag = document.querySelector('.b00bsty-ex');
bstyDiag.addEventListener('click', function () {
  var dInf = document.createElement('dialog');
  var clBtn = document.querySelector('.clsBtn');
  dInf.className = 'bdInf';
  dInf.innerHTML = "<h2>no tiers available</h2>\n        <button class=clsBtn\n            onclick=document.querySelector('.bdInf').close();window.location&nbsp;=&nbsp;'cw1QPh';>\n            close\n        </button>";
  document.body.append(dInf);
  dInf.showModal();
});