function view_academico(retornos){
    let i ;
    
    let conteudo_lista = '';
    let retorno = retornos['notas'];
    //Alterando título do app
    
    $('#tituloApp').html("Notas e Frequência");
   console.log(retornos);
if(retornos['notas']){
    conteudo_lista = "<br><br>";
    //Preenchendo a lista com cards
    conteudo_lista += "<ons-card>";
    conteudo_lista += "";
    conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'><tr>";
    conteudo_lista += "<td width='40%' align='left'><font class='font_notastam1'>Matéria/ Disciplina</font></td>";
    conteudo_lista += "<td width='25%' align='center'><font class='font_notastam1'>Notas</font></td>";
    conteudo_lista += "<td width='20%' align='center'><font class='font_notastam1'>Faltas</font></td>";
    conteudo_lista += "<td width='15%' align='center'><font class='font_notastam1'>Ver</font></td>";
    conteudo_lista += "</tr></table></div>";
    /*conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";*/
    conteudo_lista += "</ons-card>";
    for(i  in retorno){
        tmp = retorno[i];
  		class_cor_nota =  retorno[i]['cor'] == 'danger' ? 'baloes_red' : 'baloes_blue' ;
        conteudo_lista += "<ons-card class='click_detalhe_nota' valor='"+(i)+"'>";
        conteudo_lista += "";
        conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'><tr>";
        conteudo_lista += "<td width='40%' height='80px' align='left'><font class='font_tam3'>"+(retorno[i]['materia'])+"</font></td>";
        conteudo_lista += "<td width='25%' align='center'><span class='notification notification--material "+class_cor_nota+"' >&nbsp;&nbsp;" + retorno[i]['nota'].replace(".",",")+"&nbsp;&nbsp;</span></td>";
        conteudo_lista += "<td width='20%' align='center'><span class='notification notification--material baloes_gray'>&nbsp;&nbsp;<font class='font_tam2'>" + retorno[i]['faltas']+"&nbsp;&nbsp;</font></span></td>";
        conteudo_lista += "<td width='15%' align='center'><ons-button><ons-icon icon='md-plus-circle'></ons-icon></ons-button></td>";
        conteudo_lista += "</tr></table></div>";
        conteudo_lista += "</ons-card>";
    }
    //Exibindo os boletos
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);

    //Adicionando evento click para detalhar
    $('.click_detalhe_nota').click(function(){

        var myNavigator = document.getElementById('myNavigator');
        myNavigator.pushPage('html/page_detalhesnota.html');

        //Se estiver na pagina detalhamento de botas
    
          dados = {
            'apitoken': localStorage.getItem('token'),
            'periodo_letivo': localStorage.getItem('periodoletivo')
          }
          if(complemento == ''){
            agendacontrole = 0 ;
            $('#pageAgendaList').html('');
            $('#pageAgendaListErro').html('');
          }
          //Busca as notas detalhadas.. o tratamento é no view_detalhamento
          buscaAcoes('alunos/api/notas/ver-materia/'+$(this).attr('valor')+"/",dados,'GET');
         
    	
        /* Aguardando carregar a pagina para configurar os eventos após os elementos estarem carregados na tela*/
        setTimeout(function(){
            /* Acao voltar para o app principal */
            $('#bt_voltar_app').click(function(){
                window.location.href = './app.html?objeto=academico';
            });

        }, 1000);
    
    });   
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageNotasList').html($('#pageNotasList').html()+conteudo_lista);
}
}
