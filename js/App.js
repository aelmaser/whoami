alert("Welcome to my website!");

function clock(){
    window.rt=1000;r=0;
    document.getElementById('t-0').textContent=new Date().toLocaleDateString(); // today
    var m=setInterval(function(){
        if(r>84600){clearInterval(m);}
        r++;
        document.getElementById('t-2').textContent=new Date().toLocaleTimeString(); // clock
    }, window.rt);
}