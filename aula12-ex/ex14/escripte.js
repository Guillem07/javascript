function carregar() {
    var msg = document.getElementsByClassName('msg')[0];
    var imgs = document.getElementById('imagem');
    var data = new Date();
    // var hora = data.getHours();
    var hora = 1
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        imgs.src = "fotos/foto-manha.webp"

        document.body.style.background = 
        '#897000'
        document.body.style.color = "#897000"
    }
    else if (hora >= 12 && hora <18){
        imgs.src = "fotos/foto-tarde.webp"

        document.body.style.background = 
        '#7A2D29'

        document.body.style.color = "#7A2D29"
    }
    else{
        imgs.src = "fotos/foto-noite.webp"

        document.body.style.background = "#003040"

        document.body.style.color = "#003040"
    }

    
    }
