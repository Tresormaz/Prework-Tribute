

var pics = [
    "imgs/walter1.jpg",
    "imgs/walter2.jpg",
    "imgs/walter3.jpg",
    "imgs/walter4.jpg",
    "imgs/walter5.jpg",
    "imgs/walter6.jpg",
    "imgs/walter7.jpg",
    "imgs/walter8.jpg",
    "imgs/walter9.jpg",
    "imgs/walter10.jpg",
    "imgs/walter12.jpg",
    "imgs/walter13.jpg",
   ,
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if(counter === 9) {
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter+1;
});