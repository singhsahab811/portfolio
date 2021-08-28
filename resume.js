var slideIndex=1;
function plusSlides(n) {
    showSlides();
  }

  function showSlides() {
var i;
var slides = document.getElementsByClassName("slides");
let newSlides=[];
let a,b,c;
a=slides[1]; b=slides[2]; c=slides[0];
newSlides.push(a);newSlides.push(b);newSlides.push(c);

let container=document.getElementById("carousel");
container.replaceChildren(...newSlides);
}

function minusSlides(n) {
showMinus();
}

function showMinus() {
var i;
var slides = document.getElementsByClassName("slides");
let newSlides=[];
let a,b,c;
a=slides[2]; b=slides[0]; c=slides[1]
newSlides.push(a);newSlides.push(b);newSlides.push(c);

let container=document.getElementById("carousel");
container.replaceChildren(...newSlides);
}

 function hireMe(){
    location.href="mailto:tkrajput312@gmail.com";
 }
function resumeDownload(){
  
       location.href="pdfs/resume_tushar.pdf";
      
}
function newPage(){
    document.getElementById("traditional").addEventListener("click", function(){
            window.location = "https://singhsahab811.github.io/Traditional_Calculator/";});
    document.getElementById("cyberkanpur").addEventListener("click", function(){
            location.href = "pdfs/report_pentest.pdf";});
    document.getElementById("portfolioDesign").addEventListener("click", function(){
            location.href = "images/portfolio.png";});
    document.getElementById("foodRunner").addEventListener("click", function(){
            location.href = "food_runner.apk";});
    document.getElementById("collegeProject").addEventListener("click", function(){
            windows.location = "https://cybcrypt.tech/webadmin/login.php";});
    document.getElementById("guessGame").addEventListener("click", function(){
            window.location = "https://singhgame.netlify.app/";});
    document.getElementById("daanDaata").addEventListener("click", function(){
            location.href = "#";});
    document.getElementById("blogs").addEventListener("click", function(){
            location.href = "https://blogs-tushar.netlify.app/";});
    document.getElementById("interestCalculater").addEventListener("click", function(){
            window.location = "https://singhsahab811.github.io/SIcalculator/;"});
    document.getElementById("dtLabs").addEventListener("click", function(){
            window.location = "https://bit.ly/38mT6hQ";});
    document.getElementById("drdo").addEventListener("click", function(){
            location.href = "#";});
    document.getElementById("innvocon").addEventListener("click", function(){
            location.href = "#";});
    document.getElementById("eict").addEventListener("click", function(){
            location.href = "pdfs/Cyber_Security.pdf";});
    document.getElementById("internshaala").addEventListener("click", function(){
            location.href = "pdfs/android.pdf";});
    
}