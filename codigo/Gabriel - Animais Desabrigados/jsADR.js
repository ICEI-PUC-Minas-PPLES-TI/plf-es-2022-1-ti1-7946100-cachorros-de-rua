





















$(function(){
    
    var texto = 1;
    var string;
    
    setInterval(function(){
        switch(texto) {
            case 1: string = "Informações"; break;
            case 2: string = "Alteração de cadastro"; break;
            case 3: string = "Contatos"; break;
        }
    
        $('.texto').html(string);
       
        texto != 3 ? texto++ : texto = 1;
    }, 3000);
    });










   

    











    






     
