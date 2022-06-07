const text = document.querySelector('.changeType');
        const txt  =["Microscopy","Optics","Image analys", "Fablab"]; 
        
        var index=0;
        var texte= 0;
        var show = true;
     
        setInterval(function(){
            if(show){
                text.innerHTML = txt[texte].slice(0,++index);    
            }
            else{
                text.innerHTML = txt[texte].slice(0,index--);               
            }
            if(index==txt[texte].length+1)
            {   
                show = false;
            }
            else if(index<0)
            { 
                index = 0;
                show = true;
                texte++;
                if(texte>=txt.length)
                {
                    texte=0; 
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