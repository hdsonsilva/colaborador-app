function view_novobilhete(retornos){
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    $('#tituloApp').html("Recados");
if(retornos['murais']){    
    //Preenchendo a lista com cards
    conteudo_lista = "<br><br>";
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" :"")+"><font class='font_tam1'>"+(retorno[i]['data_referente'])+" - "+(retorno[i]['assunto'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo'])+"'><br>" : "")+(retorno[i]['mensagem'])+"</font>";
        
        conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button class='botaocheck_bilhete' modifier='light'><ons-icon icon='"+(retorno[i]['Lido'] == 'Sim' ? "ion-checkmark-done-outline" : "fa-check")+"'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageBilhetesList').html(conteudo_lista);
}

else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Sem mais recados</font></ons-card>";
    $('#pageBilhetesList').html($('#pageBilhetesList').html()+conteudo_lista);
}

}
