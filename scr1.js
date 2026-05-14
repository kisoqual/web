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

const txt1Ev = document.querySelector('.txt1')
txt1Ev.addEventListener('click', () => {
    const flag = document.createElement('div')
    flag.className = 'warnflag'
    flag.innerHTML = `<span>
            unavalible
        </span>`
    document.body.append(flag)
    setTimeout(() => { flag.remove() }, 4096)
})

const bstyDiag = document.querySelector('.b00bsty-ex')
bstyDiag.addEventListener('click', () => {
const dInf = document.createElement('dialog')
    const clBtn = document.querySelector('.clsBtn')
    dInf.className = 'bdInf'
    dInf.innerHTML = `<h2>no tiers available</h2>
        <button class=clsBtn
            onclick=document.querySelector(\'.bdInf\').close();window.location&nbsp;=&nbsp;'cw1QPh';>
            close
        </button>`
    document.body.append(dInf)
    dInf.showModal()
})