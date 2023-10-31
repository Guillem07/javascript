function verificar(){
    var data = new Date()

    var ano = data.getFullYear()
    var texto = document.getElementById('txtano').value
    var resp = document.querySelector('div#res')

    if(texto.length == 0 || texto > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(texto)
        
        var genero = '';
        if (sex[0].checked){
            genero = 'Homem'
        }
        else if(sex[1].checked){
            genero = 'Mulher'
        }
        resp.style.textAline = 'center';
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       
    }
}
