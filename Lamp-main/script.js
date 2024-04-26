var btn = document.getElementById('btn');
var light = document.getElementById('light');
var h = document.getElementById('h');
var bl = document.getElementById('home');
var mo = document.getElementById('modern');
var re = document.getElementById('resource');
var af = document.getElementById('aff');
// var menu=document.getElementById('menu');
function togglebtn(){
    btn.classList.toggle('active');
    light.classList.toggle('on');
    h.classList.toggle('dark');
    bl.classList.toggle('back');
    mo.classList.toggle('back');
    re.classList.toggle('back');
    af.classList.toggle('back');
}
