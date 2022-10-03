
function darkred()
{
    let header = document.querySelector(".header");
    header.style.cssText = "background: linear-gradient(180deg, #970d1a, #4e204d);";
    let button = document.getElementById("dark");
    let button2 = document.getElementById("blue");

    button.style.cssText = "background: linear-gradient(180deg, #970d1a, #4e204d);";
     button2.style.cssText = "background: linear-gradient(180deg, #970d1a, #4e204d);";
    let about = document.querySelector(".about");
    about.style.cssText = "background: #970d1a;";
    let shop = document.querySelector(".custom-shape-divider-bottom-1664613842 .shape-fill");
    shop.style.cssText = "fill:#970d1a;";
    let work = document.querySelector(".work");
    document.body.style.background = "rgb(60 11 15)";
    let card3 = document.querySelectorAll(".card");
    for (let i = 0; i < card3.length; i++) {
        card3[i].style.cssText = "background: #970d1a;";
        let footer = document.getElementById("footer");
        footer.style.cssText="background: linear-gradient(180deg, #970d1a, #4e204d);";
    }
    
    let img2 = document.querySelector(".img2");
    img2.style.cssText = "background:rgb(60, 11, 15);left:0%;opacity:1;";
    
    let pspan = document.querySelectorAll(".progres span");
    pspan.forEach((span) => {
        span.style.background = "rgb(151, 13, 26)";
    })
    let sk2 = document.querySelectorAll(".sk2");
    for (let i = 0; i < sk2.length; i++) {
        sk2[i].style.background="rgb(151, 13, 26)";
    }
    
    
}
function bluedark()
{
    let header = document.querySelector(".header");
    header.style.cssText = "background: linear-gradient(530deg, #2d4356, #596c7a);";

    let button = document.getElementById("dark");
    button.style.cssText = "background: #607d8b;";
    let button2 = document.getElementById("blue");
    button2.style.cssText = "background: #607d8b;";
    let about = document.querySelector(".about");
    about.style.cssText = "background: linear-gradient(530deg, #2d4356, #596c7a);";

    let shop = document.querySelector(".custom-shape-divider-bottom-1664613842 .shape-fill");
    shop.style.cssText = "fill: #4e6271;";
    let work = document.querySelector(".work");
    document.body.style.background = " #0a1334";
    let card3 = document.querySelectorAll(".card");
    for (let i = 0; i < card3.length; i++) {
        card3[i].style.cssText = "background: #152252ed;";
         let footer = document.getElementById("footer");
        footer.style.cssText="background: #4e6271;"
    }
    
     let pspan = document.querySelectorAll(".progres span");
    pspan.forEach((span) => {
        span.style.background = "#2d4356";
    })
    let sk2 = document.querySelectorAll(".sk2");
    for (let i = 0; i < sk2.length; i++) {
        sk2[i].style.background="#2d4356";
    }
    
  
}
  



    
    


function cick1()
{
    var img1 = document.getElementById("img1");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0020.jpg");

}
function cick2()
{
    var img1 = document.getElementById("img2");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0022.jpg");

}
function cick3()
{
    var img1 = document.getElementById("img3");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0028.jpg");

}

    function cick4()
{
    var img1 = document.getElementById("img4");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0028.jpg");

}
function cick5()
{
    var img1 = document.getElementById("img5");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0029.jpg");

}
function cick6()
{
    var img1 = document.getElementById("img6");
    img1.style.display = "block";
    window.open("photo//IMG-20220930-WA0030.jpg");

}
function cick7()
{
    var img1 = document.getElementById("img7");
    img1.style.display = "block";
    window.open("photo/IMG-20220930-WA0031.jpg");

}

let our = document.querySelector(".our");
let pspan = document.querySelectorAll(".progres span");
let img = document.getElementById("img");

   
window.onscroll = function () {
    if (window.scrollY >= our.offsetTop - 400) {
        
        pspan.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    if (window.scrollY >= img.offsetTop - 100) {
        img.style.cssText = "left:0%;opacity:1;"

    }
    
    
        
   
}
    
    // start translate
let trans = document.querySelector(".trans");
trans.addEventListener('click', () => {


    
    let transe = document.querySelectorAll(".ar");
    for (let i = 0; i < transe.length; i++) {
        transe[0].innerHTML = "حول";
        transe[1].innerHTML = "أعمالي"
        transe[2].innerHTML = "خبراتي";
        transe[3].innerHTML = "تواصل معي";

    }
    let name = document.querySelector(".name");
    name.innerHTML = "اسمي خالد سلطانة ، أعمل شيف وبدأت العمل في عام 2014 حتى الآن";
    let zoom = document.querySelectorAll(".zoom");
    for (let i = 0; i < zoom.length; i++) {
        zoom[i].innerHTML = "أعرض الصورة ";
    }
    let tr = document.querySelector(".tr");
    tr.innerHTML = "دورات تدريبية";
}
);
let trans4 = document.querySelector(".trans4");
trans4.addEventListener('click', () => {


    
    let transe = document.querySelectorAll(".ar");
    for (let i = 0; i < transe.length; i++) {
        transe[0].innerHTML = "About"
        transe[1].innerHTML = "mywork"
        transe[2].innerHTML = "skills";
        transe[3].innerHTML = "contact";

    }
    let name = document.querySelector(".name");
    name.innerHTML = "My name is Khaled Sultana, I work as a chef and I started working in 2014 until now";
    let zoom = document.querySelectorAll(".zoom");
    for (let i = 0; i < zoom.length; i++) {
        zoom[i].innerHTML = "zoom img ";
    }
    let tr = document.querySelector(".tr");
    tr.innerHTML = "Training courses";
}
);
let container = document.querySelectorAll(".container");
for (let i = 0; i < container.length; i++)
{
    container[i].style.opacity = 0;
    }
 window.onload = function () {
            var loade = document.getElementById("id");
             document.body.style.overflow = "hidden";
             setTimeout(function () {
                 loade.style.display = "none";

                 document.body.style.overflow = "auto";
                 for (let i = 0; i < container.length; i++)
{
    container[i].style.opacity = 1;
    }
                 
         }, 5000);
         }
    

