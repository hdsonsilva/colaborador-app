function view_ajuda(retornos){


    //Preenchendo a lista com cards
    var conteudo_lista = '';
    var conteudo_header = '';

	
	conteudo_header += "<br><br>";
    conteudo_header += '<ons-card>';

    conteudo_header += "<h3>Precisa de Ajuda?</h3>";


    conteudo_header += "</ons-card>";    

  	if(retornos['topicos']){
		for(i in retornos['topicos']){
		    if(retornos['topicos'][i]['tipo'] == 'helpdesk'){
		    	conteudo_lista += '<ons-card>';
			    conteudo_lista += "<table width='100%'><tr>";
			    conteudo_lista += "<td width='50%'><ons-icon icon='fa-users' modifier='material' class='ons-icon fa-users fa'></ons-icon> "+(retornos['topicos'][i]['topico'])+": </td>";
			    conteudo_lista += "<td width='50%' align='right'><a href='#' onclick='helpdesk(\""+(retornos['topicos'][i]['url'])+"\")'>Clique aqui</a></td>";
			    conteudo_lista += "</tr></table>";
			    conteudo_lista += "</ons-card>";
			}

			else{
				conteudo_lista += '<ons-card>';
			    conteudo_lista += "<table width='100%'><tr>";
			    conteudo_lista += "<td width='50%'><ons-icon icon='fa-envelope' modifier='material' class='ons-icon fa-envelope fa'></ons-icon> "+(retornos['topicos'][i]['topico'])+": </td>";
			    conteudo_lista += "<td width='50%' align='right'><a href='#' onclick='mailto(\""+(retornos['topicos'][i]['url'])+"\")'>Clique aqui</a></td>";
			    conteudo_lista += "</tr></table>";
			    conteudo_lista += "</ons-card>";
			}
		}
	}
    
    $('#pageAjudaHeader').html(conteudo_header);
    $('#pageAjudaList').html(conteudo_lista);
}

