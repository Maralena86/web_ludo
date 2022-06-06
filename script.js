// const title = document.querySelector('.changeType');
// const txt = ["Microscopy, Optique, Analyse image, Fablab"]

// function typewriter(word, index){

//     if(index < word.length) {
//         setTimeout(() => {
//             title.innerHTML += `<span>${word[index]}</span>`;
//             typewriter(txt, index + 1);
//         }, 50);
//     }
// }

// setTimeout(() => {
//     typewriter(txt, 0)
// }, 900);
// var index=0;
// var xiaBiao= 0;
// var huan = true;

// setInterval(function(){


   
//     if(huan){

   
//         text.innerHTML = txt[xiaBiao].slice(0,++index);
//         console.log(index);
//     }
//     else{


//         text.innerHTML = txt[xiaBiao].slice(0,index--);
//         console.log(index);
//     }

//     if(index==txt[xiaBiao].length+3)
//     {


//         huan = false;
//     }
//     else if(index<0)
//     {


//         index = 0;
//         huan = true;
//         xiaBiao++;
//         if(xiaBiao>=txt.length)
//         {


//             xiaBiao=0; 
//         }
//     }

// },200)
const text = document.querySelector('.changeType');
        const txt  =["Microscopy","Optique","Analyse d'image", "Fablab"]; 
        
        var index=0;
        var xiaBiao= 0;
        var huan = true;
     
        setInterval(function(){
            if(huan){
                text.innerHTML = txt[xiaBiao].slice(0,++index);    
            }
            else{
                text.innerHTML = txt[xiaBiao].slice(0,index--);               
            }
            if(index==txt[xiaBiao].length+1)
            {   
                huan = false;
            }
            else if(index<0)
            { 
                index = 0;
                huan = true;
                xiaBiao++;
                if(xiaBiao>=txt.length)
                {
                    xiaBiao=0; 
                }
            }

        },200)
/*----Posters------*/
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  /*-----------*/ 