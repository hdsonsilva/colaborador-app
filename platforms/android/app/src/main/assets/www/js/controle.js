function controle(event){
 	
    var tipoenvio = 'GET';
    
    //Se estiver na Home
    if( event.target.matches('#homePage') ){
      dados = {
        'token': localStorage.getItem('token')
        
      }
      
      $('#homePageList').html('');
      buscaAcoes("/api/busca-home", dados, tipoenvio);
      
    }

    //Se estiver na pagina Holerite
    else if(event.target.matches('#pageHolerite')){
      dados = {
        'token': localStorage.getItem('token'),
      }
      $('#pageHoleriteList').html('');
      buscaAcoes("/api/busca-holerite", dados, tipoenvio);
    }

    
    //Se estiver na pagina Academico
    else if(event.target.matches('#pageIrrf')){
      dados = {
        'token': localStorage.getItem('token')
      }
      $('#pageIrrfList').html('');

      buscaAcoes('/api/busca-demonstrativoirrf',dados,tipoenvio);
    }

    //Se estiver na pagina Academico
    else if(event.target.matches('#pageAjuda')){
      
      dados = {
        'token': localStorage.getItem('token')
      }
      buscaAcoes('/api/busca-ajuda',dados,tipoenvio);
      
    }

     //Se estiver na pagina Bilhetes
    else if(event.target.matches('#pageBilhetes') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      if(complemento == ''){
        recadocontrole = 0 ;
        $('#pageBilhetesList').html('');
        $('#pageBilhetesListErro').html('');
      }
      buscaAcoes('alunos/api/mural/ver-recados',dados,tipoenvio);
    }
    //Se estiver na pagina Bilhetes, mas for recado enviado
    else if(event.target.matches('#pageBilhetesEnviado') ){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      $('#pageBilhetesList').html('');
      buscaAcoes('alunos/api/mural/historico-recados',dados,tipoenvio);
    }
    
    

    //Se estiver na pagina Agenda
    else if(event.target.matches('#pageAgenda')){
      dados = {
        'apitoken': localStorage.getItem('token'),
        'periodo_letivo': localStorage.getItem('periodoletivo'),
        'offset' : localStorage.getItem('offset_avisos')
      }
      if(complemento == ''){
        agendacontrole = 0 ;
        $('#pageAgendaList').html('');
        $('#pageAgendaListErro').html('');
      }
      buscaAcoes('alunos/api/mural/ver-agenda',dados,tipoenvio);
    }
   
    //Redimensionando o menu do sistema
    document.addEventListener('deviceready', function () {
      //Alterando altura da barra de menu do app
      if(device.platform.toUpperCase() === 'ANDROID'){
        $('.padding_padrao').height('60px'); 
      }
      else{
        $('.padding_padrao').height('50px');
      }
    });
        
}