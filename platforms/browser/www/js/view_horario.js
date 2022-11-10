function view_horario(retornos){

    var retorno = retornos['gradeHoraria'];
    var i, j, tmp ;
    var conteudo_lista = '';
    var conteudobotao = '';
    var imagem_view = '';

    var diasdasemana = new Array();
    
    diasdasemana[0] = 'Segunda-Feira' ; 
    diasdasemana[1] = 'Terça-Feira' ;
    diasdasemana[2] = 'Quarta-Feira';
    diasdasemana[3] = 'Quinta-Feira';
    diasdasemana[4] = 'Sexta-Feira' ;
    diasdasemana[5] = 'Sábado' ;

    //Preenchendo a lista com cards

    if(retornos['gradeHoraria']){ 
        conteudo_lista = "<br><br>";
        for(i  in retorno){
            tmp = retorno[i];
            if(tmp[0]['abreviatura']){
                conteudo_lista += "<ons-card class='clicavelagenda' valor=''><font class='font_tam1'>"+(diasdasemana[i])+"</font>";
                conteudo_lista += "<br><br>";
                conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'><tr>";
                conteudo_lista += "<td width='35%' align='center'><font class='font_notastam1'>Aula</font></td>";
                conteudo_lista += "<td width='65%' align='center'><font class='font_notastam1'>Matéria/ Disciplina</font></td>";
                conteudo_lista += "</tr></table></div><hr>";

                conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'>";
                
                for(j in tmp ){
                    if(tmp[j]['abreviatura'] != false){
                        horario = (parseInt(tmp[j]['aula'])+1)+'º Horário';
                        conteudo_lista += "<tr>";
                        conteudo_lista += "<td width='35%' height='70px' align='center' style='background:#eee;'><div><span class='notification notification--material baloes_blue' >&nbsp;&nbsp;"+horario+"&nbsp;&nbsp;</font></div></td>";
                        conteudo_lista += "<td width='65%' align='center' style='background:#eee;'><font class='font_tam3'>"+tmp[j]['label_nome']+"</font></td>";
                        conteudo_lista += "</tr>";
                    }
                }

                conteudo_lista += "</table></div>";

                conteudo_lista += "<font class='font_text'></font>";
                

                conteudo_lista += "</ons-card>";
            }
        }
        $('#pageHorarioList').html($('#pageHorarioList').html()+conteudo_lista);
    }
    else{
        conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageHorarioList').html($('#pageHorarioList').html()+conteudo_lista);
    }
}