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

