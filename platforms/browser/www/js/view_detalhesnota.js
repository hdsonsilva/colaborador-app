function view_detalhesnotas(retornos){
    var i ;
    var conteudo_lista = '';
    var retorno = retornos['notas'];
    var x , y ;
    //Alterando título do app
    
    $('#tituloApp').html("Notas e Frequência");
   console.log(retornos);
if(retornos['notas']){
    //Preenchendo a lista com cards
    conteudo_lista = "<br><br>";
    for(i  in retorno){
        for(j in retorno[i]){
            if(retorno[i][j]['trimestre']){

                x = parseFloat(retorno[i][j]['distribuido']);
                y = parseFloat(retorno[i][j]['pontuacao']);
                ap = parseInt(y/x*100);

                conteudo_lista += "<ons-card style='border: 5px solid orange;'><font class='font_tam1'>"+(retorno[i][j]['trimestre'])+"</font>";
                conteudo_lista += "<table width='100%'>";
                conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'>Valor</font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Nota</font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Aproveitamento</font></td></tr>";
                
                conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;" + retorno[i][j]['distribuido'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='30%'  align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + retorno[i][j]['pontuacao'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + ap +"%&nbsp;&nbsp;</span></font></td></tr>";
                
                conteudo_lista += "</table>";
                //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
                //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
                conteudo_lista += "</ons-card>";
            }
            
            else{
                x = parseFloat(retorno[i][j]['valor']);
                y = parseFloat(retorno[i][j]['nota']);
                ap = parseInt(y/x*100);
                conteudo_lista += "<ons-card ><font class='font_notastam1'>"+(retorno[i][j]['atividade'])+"</font>";
                conteudo_lista += "<br><div><font class='font_notastam2'>Data: " + retorno[i][j]['data']+"</font></div>";
                conteudo_lista += "<table width='100%'>";
                conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'>Valor</font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Nota</font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Aproveitamento</font></td></tr>";
                
                conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;" + retorno[i][j]['valor'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='30%'  align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + retorno[i][j]['nota'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
                conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + ap+"%&nbsp;&nbsp;</span></font></td></tr>";
                
                conteudo_lista += "</table>";
                
                //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
                //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
                conteudo_lista += "</ons-card>";   
            }   
        }
    }
    x = parseFloat(retornos['totais']['totais']);
    y = parseFloat(retornos['totais']['pontuacao']);
    ap = parseInt(y/x*100);
    conteudo_lista += "<ons-card style='border: 5px solid #4169E1;'><font class='font_tam1' >TOTAL GERAL</font>";
    conteudo_lista += "<table width='100%'>";
    conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'>Valor</font></td>";
    conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Nota</font></td>";
    conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'>Aproveitamento</font></td></tr>";
    
    conteudo_lista += "<tr><td width='30%' align='center'><font class='font_tam2'><span class='baloes_gray notification notification--material'>&nbsp;&nbsp;" + retornos['totais']['totais'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
    conteudo_lista += "<td width='30%'  align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + retornos['totais']['pontuacao'].replace(".",",")+"&nbsp;&nbsp;</span></font></td>";
    conteudo_lista += "<td width='30%' align='center'><font class='font_tam2'><span class='baloes_blue notification notification--material'>&nbsp;&nbsp;" + ap+"%&nbsp;&nbsp;</span></font></td></tr>";
    
    conteudo_lista += "</table>";
    //conteudo_lista += "<br><font class='font_tam2'>Média da turma: " + (retorno[i]['media'])+"</font>";
    //conteudo_lista += "<div class='align_direita'><ons-button class='minhalinhadigitavel'><ons-icon icon='fa-list'></ons-icon> Ver</ons-button> </div>";
    conteudo_lista += "</ons-card>";
    //Exibindo os boletos
    $('#pageDetalhesNotasItens').html($('#pageDetalhesNotasItens').html()+conteudo_lista);

    
}
else{
    
    conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
    $('#pageDetalhesNotasItens').html($('#pageDetalhesNotasItens').html()+conteudo_lista);
}
}
