function view_home(retornos){
    let img = "";
    let tabela ; 

   
    
    //Alterando título do app
    $('#tituloApp').html(appName);


    var i ;
    var conteudo_lista = '';
    
    var i ;
    var conteudo_lista = '';
    var imagem_view = '';
    let imagembusca = '';
    let j = 0 ;
   /* conteudo_lista += "<ons-card ><font class='font_tam1'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;now&nbsp;&nbsp;</span>  <font class='font_tam3'>Video</font> </font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<iframe width='100%' src='https://www.youtube.com/embed/bZwxTX2pWmw?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        conteudo_lista += "</ons-card>";*/

    

    var retorno = retornos['murais'];

 if(retornos['murais']){     
    //Preenchendo a lista com cards
    conteudo_lista = "<br>";
    for(i  in retorno){
        console.log(retorno[i]);

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelhome' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' imagem='"+(retorno[i]['arquivo'])+"'" : " ")  )+"><font class='font_tam1'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;"+(retorno[i]['data_inicio'])+"&nbsp;&nbsp;</span>  <font class='font_tam3'>"+(retorno[i]['assunto'])+"</font> </font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<div id='notimg_"+i+"'><img width='100%' pos='"+i+"' src='./img/carregando.gif'></div><div id='myimg_"+i+"' ><img width='1%'  class='imagens' pos='"+i+"' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"' "+(j <= 2 ? "" : "loading='lazy' " ) +"></div><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
        imagembusca = retorno[i]['arquivo'] ? retorno[i]['arquivo'] : imagembusca ;
        if(retorno[i]['arquivo']){
            j++;
        }
    }



    $('#homePageList').html(conteudo_lista);

    $('.clicavelhome').click(function(){
        
        abrirURL($(this).attr('valor'), 1);
    });
    //Fazendo aparecer as imagens
    
    
        $('body').off('load', '.imagens');
        $('.imagens').on('load',function(){
            let este = $(this);
            let pos = $(this).attr('pos');
            //alert('ok');
            //alert(pos);
            $('#notimg_'+pos).hide();
            este.width('100%');
            $('#myimg_'+pos).show();
        });
    

    $('.imagemview').click(function(){
             
             imagem_view = $(this).attr('imagem');
            document.addEventListener('deviceready', function () {
                //PhotoViewer.show($(this).attr('url'));
               
                PhotoViewer.show(imagem_view,'',{share:true,closeButton: true,copyToReference: true, headers: '',piccasoOptions: { }});
            });
    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Sem avisos</font></ons-card>";
    $('#homePageList').html($('#homePageList').html()+conteudo_lista);
}

}
