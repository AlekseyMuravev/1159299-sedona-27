var minus = document.querySelector(".minus-adults");
var plus = document.querySelector(".plus-adults");
var number = document.querySelector(".persone-adults").value;


minus.addEventListener("click" ,function(ent) {
    if(number>0&&number<=10) {
        number = Number(number)-1;
    }
    document.querySelector(".persone-adults").value = number;
})

plus.addEventListener("click" ,function(evt) {
    if(number>=0&&number<10) {
        number = Number(number)+1;
    }
    document.querySelector(".persone-adults").value = number;
})
