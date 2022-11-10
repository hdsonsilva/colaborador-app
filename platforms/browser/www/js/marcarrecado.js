function marcarrecado(id){
      
            showModal('show');

            $.ajax({
              type: 'GET',
              url : server1 + localStorage.getItem('unidade') + '/' + 'alunos/api/mural/marcar-lido/'+id+'?apitoken='+localStorage.getItem('token')+"&periodo_letivo="+localStorage.getItem('periodoletivo'),
              cache: false,
              timeout: 10000,
              dataType: 'json',
              success:function(ret){
                showModal('hide');
                //Se retornar um token valido de acesso
                
                console.log(ret);
                //Localizou token... fez login
                if(ret.status == 'ok'){
                    ons.notification.toast('Recado marcado como lido.', {timeout: 1500});
                    setTimeout(direcionar, 2000, './app.html');
                  }
                  else{
                    ons.notification.toast('Ocorreu algum erro.', {timeout: 1500});
                    
                  }
              
              },
              error:function(e){
                showModal('hide');
                $('#progress').hide();
                ons.notification.toast('Falha ao conectar. Verifique sua conexão.', {timeout: 3000});
                $('#button').show();
              },
              dataType:'json',
              async: true
          }); 

        return true ;
}