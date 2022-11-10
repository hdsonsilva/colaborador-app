function view_agenda(retornos){

    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var conteudobotao = '';
    var imagem_view = '';
     //Alterando título do appc
     console.log(retornos);
    $('#tituloApp').html("Agenda");
    //Preenchendo a lista com cards

    if(retornos['murais']){ 
        conteudo_lista = "<br><br>";
        for(i  in retorno){

            conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelagenda' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' imagem='"+(retorno[i]['arquivo'])+"'" : " "))+"><font class='font_tam3'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;"+(retorno[i]['data_referente'])+"&nbsp;&nbsp;</span>&nbsp;&nbsp;"+(retorno[i]['assunto'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<div id='notimg_"+i+"'><img width='100%' pos='"+i+"' src='./img/icon_image.gif'></div><div id='myimg_"+i+"' ><img width='1%'  class='imagens' pos='"+i+"' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"'></div><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
            if(retorno[i]['extras']){
                for(ii in retorno[i]['extras']){
                    conteudo_lista += "<br><br><font class='font_pergunta'>"+(retorno[i]['extras'][ii]['pergunta'])+"</font>";
                    conteudo_lista += "<br><font class='font_resposta'>"+(retorno[i]['extras'][ii]['resposta'])+"</font>";
                }
            }

            conteudo_lista += "</ons-card>";
        }

        $('#pageAgendaList').html($('#pageAgendaList').html()+conteudo_lista);

        $('#pageAgendaListButton').html("<div class='align_center'><ons-button name='buscar' class='buscamais'  id='pageAgenda' >Buscar Mais</ons-button></div><br>");


        $('.clicavelagenda').click(function(){
            abrirURL($(this).attr('valor'), 1);
            
        });

        $('.imagemview').click(function(){
             
             imagem_view = $(this).attr('imagem');
            document.addEventListener('deviceready', function () {
                //PhotoViewer.show($(this).attr('url'));
               
                PhotoViewer.show(imagem_view,'',{share:true,closeButton: true,copyToReference: true, headers: '',piccasoOptions: { }});
            });
        });

        //Fazendo aparecer as imagens
        
        
            $('.imagens').off('load');
            $('.imagens').on('load',function(){
                let este = $(this);
                let pos = $(this).attr('pos');
                //alert('ok');
                //alert(pos);
                $('#notimg_'+pos).hide();
                este.width('100%');
                $('#myimg_'+pos).show();
            });
        

        //Evento click no botao Ver Mais
        $('.buscamais').unbind('click');
        $('.buscamais').click(function(e){
            agendacontrole = agendacontrole+5 ;
            complemento = agendacontrole+'/';
            controle(e);
        });
    }
    else{
        conteudobotao += "<ons-card><font class='font_tam1'>Nenhum registro encontrado</font></ons-card>";
        $('#pageAgendaListErro').html(conteudobotao);
    }



}

    


