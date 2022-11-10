function view_holerite(retornos){
    var i ;
    var conteudo_lista = '<br><br>';
    var retorno = retornos['anos'];
    var anterior, class_venc, realcar_venc ;
    var datas, ano, data_cada ;

    var meses = ['Zero','Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    //Alterando título do app
    
    $('#tituloApp').html("Holerites");

    i = 2021 ;
    if(retornos['anos'] ){
        
        //Preenchendo a lista com cards
        for(i = 2022 ; i >= 2021 ; i-- ){
            conteudo_lista += "<ons-card><font class='font_tam3'>Ano "+i+"</font>";
            conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'>";
            for(j = 1 ; j <= 11 ; j+=2){

                conteudo_lista += "<tr >";
                conteudo_lista += "<td width='50%' align='center' style='padding-top:20px'><a class='clicavel' href='#' onclick='imprimir("+i+", "+j+");'>"+(retorno[i][j] ? "<ons-icon style='color:black;vertical-align: bottom;' icon='fa-calendar' size='48px, material:48px'></ons-icon><br>"+meses[(j)] : '')+"</a></td>";
                conteudo_lista += "<td width='50%' align='center' style='padding-top:20px'><a class='clicavel' href='#' onclick='imprimir("+i+", "+(j+1)+");'>"+(retorno[i][j+1] ? "<ons-icon style='color:black;vertical-align: bottom;' icon='fa-calendar' size='48px, material:48px'></ons-icon><br>"+meses[(j+1)] : '')+"</a></td></tr>";
                
            }
            conteudo_lista += "</tr></table></div>";
            conteudo_lista += "</ons-card>";
        }

        $('#pageHoleriteList').html($('#pageHoleriteList').html()+conteudo_lista);
        
    }
    else{
        conteudo_lista += "<ons-card><font class='font_tam1'>Nenhuma informação encontrada</font></ons-card>";
        $('#pageHoleriteList').html($('#pageHoleriteList').html()+conteudo_lista);
    }

}
