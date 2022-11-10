function view_recadoenviado(retornos){
    var retorno = retornos['enviados'];
    var i ;
    var conteudo_lista = '';
     //Alterando título do app
    if(retornos['enviados']){    
        conteudo_lista = "<br><br>";
        //Preenchendo a lista com cards
        for(i  in retorno){

            conteudo_lista += "<ons-card ><font class='font_tam1'>"+(retorno[i]['envio'])+"</font>";
            conteudo_lista += "<br><br>";
            conteudo_lista += "<font class='font_text'>"+quebraLinha(retorno[i]['texto'])+"</font>";      
            conteudo_lista += "<div class='right'; style='text-align:right;'><ons-icon icon='"+(retorno[i]['leitura']  ? "fa-envelope-open" : "fa-envelope")+"'></ons-icon></div>";
            conteudo_lista += "</ons-card>";
        }
        $('#pageBilhetesList').html(conteudo_lista);

    }

    else{
        conteudo_lista += "<ons-card><font class='font_tam1'>Sem  recados</font></ons-card>";
        $('#pageBilhetesList').html($('#pageBilhetesList').html()+conteudo_lista);
    }

    $('.clicavelbilhete').click(function(){
    
        abrirURL($(this).attr('valor'), 1);
    });
    /*Redirecionando para novo recado.. retirando evento click e criando novamente */
    $('#newrecado').unbind('click');
    $('#newrecado').click(function(){
        
        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_novorecado.html');
        /* Aguardando carregar a pagina para configurar os eventos após os elementso estarem carregados na tela*/
        setTimeout(function(){
            /* Acao voltar para o app principal */
            $('#bt_voltar_app').click(function(){
                window.location.href = './app.html';
            });
            /*Acao enviar o recado digitado */
            $('#idcadastrarnovorecado').click(function(){
                $('#button').show();
                /*Verificando se o recado foi digitado e possui mais de 10 caractere */
                if($('#mensagemnovorecado').val() =='' || $('#mensagemnovorecado').val().length < 10 ){
                    ons.notification.toast('Escreva a mensagem antes de enviar.',{'timeout':1500});
                }
                else{
                    cadastronovamensagem($('#mensagemnovorecado').val());
                }

            });

        }, 1000);
    });

    //Criando eventos dos cliques nos botoes superiores
    $('.segment__input').unbind('click');
    
    $('.segment__input').click(function(e){
        complemento = $(this).val();
        controle(e);
    });

}
