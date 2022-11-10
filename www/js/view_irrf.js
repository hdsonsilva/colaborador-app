function view_irrf(retornos){

    let retorno = retornos['demonstrativos'];
    
    
    var i ;
    var conteudo_lista = '<br><br>';
    console.log(retorno);
    if(retorno && retorno != ''){    
        
        //Preenchendo a lista com cards
        
        for( i = 2022 ; i >= 2015 ; i--){
            if(retorno[i]){
           
                conteudo_lista += "<ons-card><font class='font_tam3'>Ano "+i+"</font>";
                conteudo_lista += "<div style='text-align:center;width:100%'><table width='100%'>";
                conteudo_lista += "<tr >";
                conteudo_lista += "<td width='100%' align='center' style='padding-top:20px'><a class='clicavel' href='#' onclick=\"downloadd('"+(retorno[i]) +"');\"><ons-icon style='color:blue;vertical-align: bottom;' icon='fa-download' size='16px, material:16px'></ons-icon> Informe de rendimentos para IRRF </a></td>";
                conteudo_lista += "</tr></table></div>";
                conteudo_lista += "</ons-card>";
            }
        }

        $('#pageIrrfList').html(conteudo_lista);
        
    }
}