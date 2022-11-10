function setarPeriodoLetivo(){

  localStorage.setItem('periodoletivo', $('#periodo_letivo').val());

  setTimeout(function(){window.location.href = './app.html';},500);
}

function exibeMensagem(page){
  if(page == 'tarefas'){
    if(controle_mensagem_atualizar == 0){
      $('#pending-list').append("<ons-list class='buscar' id='reloadpending'><ons-list-item modifier='nodivider'><p style='text-align:center;width:100%'><label class='center' for='inner-highlight-input'>Clique  no botão <ons-icon icon='fa-undo'></ons-icon> para atualizar  </label></p></ons-list-item></ons-list-item></ons-list>");
      controle_mensagem_atualizar == 1;
    }
    //$('#reloadpending').unbind();
    /*$('#reloadpending').click(function(){
      buscaAcoes();
    });*/
  }
}

function direcionar(url){

  window.location.href = url;
}

function retornaparametro(){
  var query = location.search.slice(1);
  var partes = query.split('&');
  var valor ;
  var aux ;
  aux = partes[0].split("=");
  valor = aux[1] ;

  return valor ;
  /*
  partes.forEach(function (parte) {
      var chaveValor = parte.split('=');
      var chave = chaveValor[0];
      var valor = chaveValor[1];
      return valor;
  });
  */
}
function quebraLinha(str){
  str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return str ;
}
function exibirtab(tab){
  
  switch(tab){
    case 'avisos' : document.getElementById('myTabbar').setActiveTab(0); break ;
    case 'agenda' : document.getElementById('myTabbar').setActiveTab(1); break ;
    case 'horario' : document.getElementById('myTabbar').setActiveTab(2); break ;
    case 'academico' : document.getElementById('myTabbar').setActiveTab(3); break ;
    case 'financeiro' : document.getElementById('myTabbar').setActiveTab(4); break ;
    case 'bilhetes' : document.getElementById('myTabbar').setActiveTab(5); break ;
  }
  
}

function buscaSolicitacaoEmbarque(){
  let temp ,i; 
  let url = server + localStorage.getItem('unidade') + '/alunos/api/embarque/retorna-solicitacao';
  dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo' : localStorage.getItem('periodoletivo')
  };
  $.ajax({
        type: 'get',
        dataType: 'json',
        url: url,
        cache: false, //Nao fazer cache
        timeout: 10000, //10 segundos
        data: dados,
        async: true, //Esperar retorno para continuar codigo
        success: function (ret) {
          // /alert(JSON.stringify(ret));
          console.log(ret);
            if(ret.retorno.retorno == 'success'){
              habilitado = 1;
              temp = ret.retorno.solicitacoes;
              //alert(JSON.stringify(temp));
              for(i in temp){
                 if(temp[i].status == 'ativo'){     
                    solicitacaoEmbarque = temp[i].id;

                    initMap();
                    $('#iniciarbusca').css('background-color','red');
                    $('#iniciarbusca').html('Cancelar');
                    break;

                 } 
              }
              
              return 1;
            }
            /*se nao der erro, significa que encontrou solicitacao ativa*/
            else{
              habilitado = 0
              //colocar codigo para pegar a solicitacao
              initMap();
              $('#iniciarbusca').html('Embarcar/Desembarcar'); 
              $('#iniciarbusca').css('background-color','#006e9c');
            }
        },
        error: function (e, erro) {
            console.log('erro');
        }
        
    });
}

function novaSolicitacaoEmbarque(){
  let mensagemerro = '';
  let url = server + localStorage.getItem('unidade') + '/alunos/api/embarque/cadastra-solicitacao?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo');
  dados = {
        'nome_responsavel': 'pai',
        'observacao': ''
  };
  $.ajax({
        type: 'post',
        dataType: 'json',
        url: url,
        cache: false, //Nao fazer cache
        timeout: 10000, //10 segundos
        data: dados,
        async: true, //Esperar retorno para continuar codigo
        success: function (ret) {
          if(ret.retorno.retorno == 'success'){
            solicitacaoEmbarque = ret.retorno.id;
            habilitado = 1;
            initMap();
             $('#iniciarbusca').html('Cancelar');
             $('#iniciarbusca').css('background-color','red');
          }
          else{
            if(ret.retorno.retorno == 'erro'){
              mensagemerro = ret.retorno.erros[0];
              ons.notification.alert(mensagemerro,{'title':'Ocorreu um erro'});
            }
            solicitacaoEmbarque = 0 ;
            habilitado = 0;
            initMap();
            $('#iniciarbusca').html('Embarcar/Desembarcar'); 
            $('#iniciarbusca').css('background-color','#56c2cd');
          }
          $('#iniciarbusca').prop( 'disabled', 0);
        },
        error: function (e, erro) {
            solicitacaoEmbarque = 0 ;
            habilitado = 0;
            initMap();
            $('#iniciarbusca').prop( 'disabled', 0);
        }
        
    });
}

function cancelaSolicitacaoEmbarque( id ){
  let url = server + localStorage.getItem('unidade') + '/alunos/api/embarque/cancela-solicitacao?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo');
  dados = {
        'id_solicitacao': id
  };
  
  $.ajax({
        type: 'post',
        dataType: 'json',
        url: url,
        cache: false, //Nao fazer cache
        timeout: 10000, //10 segundos
        data: dados,
        async: true, //Esperar retorno para continuar codigo
        success: function (ret) {
          
          if(ret.retorno.retorno == 'success'){
            solicitacaoEmbarque = 0;
            habilitado = 0;
            initMap();
            $('#iniciarbusca').html('Embarcar/Desembarcar'); 
            $('#iniciarbusca').css('background-color','#56c2cd');
          }
          else{
            habilitado = 1;
            initMap();
          }
          $('#iniciarbusca').prop( 'disabled', 0);
        },
        error: function (e, erro) {
            solicitacaoEmbarque = 0 ;
            habilitado = 0;
            initMap();
            $('#iniciarbusca').prop( 'disabled', 0);
        }
        
    });
}
function atualizaSolicitacaoEmbarque(id, lat, long){
  let url = server + localStorage.getItem('unidade') + '/alunos/api/embarque/atualiza-localizacao?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo');
  dados = {
        'id_solicitacao': id,
        'latitude': lat,
        'longitude' : long
  };
  $.ajax({
        type: 'post',
        dataType: 'json',
        url: url,
        cache: false, //Nao fazer cache
        timeout: 10000, //10 segundos
        data: dados,
        async: true, //Esperar retorno para continuar codigo
        success: function (ret) {
          
          if(ret.retorno.retorno == 'success'){
            //alert(JSON.stringify(ret));
            initMap(lat,long, "Você está aqui");
          }
          else{
            
          }
        },
        error: function (e, erro) {
            
        }
        
    });
}
/*
function abrirURL( pagina , sem_token){
  if( pagina.indexOf('?') > 0 ){
    localStorage.setItem('pagina_externa',pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'));
  }
  else{
   localStorage.setItem('pagina_externa',pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo')); 
  }

  window.location.href='./html/page_externa.html'; 
    
}*/
function imprimir(ano, mes){

  cordova.InAppBrowser.open(server+'/'+url_print+'?mes='+mes+'&ano='+ano+'&token='+localStorage.getItem('token'),'_system');

}
function abrirNavigator( pagina , forcar_ios){
      let tipo ;

      if(debug == 1){
        if( pagina.indexOf('?') > 0 ){
          window.open(pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),'_blank');
        }
        else{
          window.open(pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),'_blank');
        }
        return true;
      }
      if(forcar_ios != 'forcar'){
        tipo = '_blank';
      }
      else{
        tipo = '_system';
      }
      //Retirado verificacao se é sem token ou nao... sempre envia token
      
      if (device.platform.toUpperCase() === 'ANDROID') {
        if( pagina.indexOf('?') > 0 ){
          cordova.InAppBrowser.open(pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_system", "location=yes");
        }
        else{
          cordova.InAppBrowser.open(pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_system", "location=yes"); 
        }
      }
      else{ 
        if( pagina.indexOf('?') > 0 ){
          cordova.InAppBrowser.open(pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),tipo, "location=yes");
        }
        else{
          cordova.InAppBrowser.open(pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),tipo, "location=yes"); 
        } 
      }
}

function abrirURL( pagina , sem_token){
      
      
      
      //Retirado verificacao se é sem token ou nao... sempre envia token
      
      if (device.platform.toUpperCase() === 'ANDROID') {
        if( pagina.indexOf('?') > 0 ){
          cordova.InAppBrowser.open(pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_blank", "location=yes");
        }
        else{
          cordova.InAppBrowser.open(pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_blank", "location=yes"); 
        }
      }
      else{ 
        if( pagina.indexOf('?') > 0 ){
          cordova.InAppBrowser.open(pagina+"&apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_blank", "location=yes");
        }
        else{
          cordova.InAppBrowser.open(pagina+"?apitoken="+localStorage.getItem("token")+"&periodo_letivo="+localStorage.getItem('periodoletivo'),"_blank", "location=yes"); 
        } 
      }
}

function showModal(controle) {
  var modal = document.querySelector('ons-modal');
  if(controle == 'show'){
    modal.show(500);
  
    setTimeout(function() {
      modal.hide(1000);
    }, 12000);
  }
  else{
    modal.hide();
  }
}

    
    function verifica_auth(controle){
      $.post(
            server +'/' + url_verify,
              {
                'token'     : localStorage.getItem('token'),
              },
              function(ret){
                if(ret.identificador){
                  //OK! o token é valido
                  //ons.notification.alert(localStorage.getItem('login_username'));
                  localStorage.setItem('login_nome', ret.nome);
                  let nome1;
                  nome1 = ret.nome.split(' ');
                  $('#tituloApp_').html("Olá, "+nome1[0] + "!");

                }
                else{
                 
                  login( localStorage.getItem('login_username'),  localStorage.getItem('login_password'), localStorage.getItem('login_registro'), 'app');
                  
                }
                //Exibindo o botao se o login der errado
                $('#button').show();
                $('#progress').hide();
              },
              'json'
            );
    }

    function removeItem(dados){
      //ons.notification.alert(dados.idacess_ws_acao);
       showModal('show');
      $.ajax({
              type: 'POST',
              url : server_action,
              cache: false, //Nao fazer cache
              timeout: 10000, //10 segundos
              data: {
                'token'  : localStorage.getItem('token'),
                'action' : 'OCULTAR',
                'idacao' : dados.idacess_ws_acao
              },
              success:function(ret){
                showModal('hide');
              },
              error:function(e, erro){
                //Se retornar um token valido de acesso
                showModal('hide');
                ons.notification.alert("Ocorreu um erro ao processar sua solicitação. Atualize a lista e verifique se a ação foi concluida.");
              },
              dataType:'json',
              async:true //Não esperar retorno para continuar codigo
          }); 
    }