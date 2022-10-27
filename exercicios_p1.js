
function carregar(){

var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data= new Date()
var hora=  18// data.getHours()

msg.innerHTML= ` Agora são ${hora} horas`

if (hora>=0 && hora<12){
    
    imagem.src="_imagens/manha.jpg"
    document.body.style.backgroundColor='rgb(254,224,16)'

    }   else {if (hora<18) {

        img.src="_imagens/tarde.jpg"
        document.body.style.backgroundColor='rgb(251,146,2)'
        
    } else{ img.src="_imagens/noite.jpg"  
    document.body.style.backgroundColor='rgb(72,75,92)'
    
    }

                
    }
    
}




