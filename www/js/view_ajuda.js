function view_ajuda(retornos){


    //Preenchendo a lista com cards
    var conteudo_lista = '';
    var conteudo_header = '';

	
	conteudo_header += "<br><br>";
    conteudo_header += '<ons-card>';

    conteudo_header += "<h3>Precisa de Ajuda?</h3>";


    conteudo_header += "</ons-card>";    

    
    conteudo_lista += '<ons-card>';
    conteudo_lista += "<table width='100%'><tr>";
    conteudo_lista += "<td width='50%'>Benefícios: </td>";
    conteudo_lista += "<td width='50%' align='right'><a href='#' onclick='mailto(\"beneficios@doctum.edu.br\")'>Clique aqui</a></td>";
    conteudo_lista += "</tr></table>";
    conteudo_lista += "</ons-card>";

    conteudo_lista += '<ons-card>';
    conteudo_lista += "<table width='100%'><tr>";
    conteudo_lista += "<td width='50%'>Plano de Saúde: </td>";
    conteudo_lista += "<td width='50%' align='right'><a href='#' onclick='mailto(\"beneficios@doctum.edu.br\")'>Clique aqui</a></td>";
    conteudo_lista += "</tr></table>";
    conteudo_lista += "</ons-card>";

    conteudo_lista += '<ons-card>';
    conteudo_lista += "<table width='100%'><tr>";
    conteudo_lista += "<td width='50%'>Folha de Pagamento: </td>";
    conteudo_lista += "<td width='50%' align='right'><a href='#' onclick='mailto(\"folhadepagamento@doctum.edu.br\")'>Clique aqui</a></td>";
    conteudo_lista += "</tr></table>";
    conteudo_lista += "</ons-card>";
    
    $('#pageAjudaHeader').html(conteudo_header);
    $('#pageAjudaList').html(conteudo_lista);
}

