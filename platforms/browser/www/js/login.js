function login(usuario, senha, registro, app){

        var username = usuario ;
        var password = senha ;
        var ok = 0 ;  
                      
        localStorage.setItem('login_username', username);
        localStorage.setItem('login_password', password);
        localStorage.setItem('login_registro', registro);

        $('#logar').html('Entrando...');
        $('#logar').prop('disabled','1');

      $.ajax({
        type: 'POST',
        timeout: 5000,
         url : server+ '/' + url_auth,
        cache: false,
        data: {
          'cpf'     : username,
          'senha'  : password,
          'registro'  : registro
        },
        success:function(ret){
          //Se retornar um token valido de acesso
         
          if(ret.token){
            auth_check  = 1 ;
            //$('#login_success').show();
             $('#login_error').hide();
              $('#logar').show();
              $('#progress').hide();

            
             //Armazenando o token
            localStorage.setItem('token',ret.token);
            //console.log(ret.token);
            setarOnesignal(username);
            if(!app){
              //alert('direcionando usuario para a pagina  inicial');
              setTimeout(direcionar, 1000, "app.html");
              setTimeout(function(){ $('#logar').html('Entrar'); $('#logar').removeAttr('disabled'); },1500);

              //document.querySelector('ons-modal').show(1500);
              $('#logar').show();
              $('#progress').hide();
            }
            //alert('apos o direcionamento');
            

          }
          else{
            $('#logar').html('Entrar');
            $('#logar').removeAttr('disabled');

            $('#login_error').show();
            $('#login_success').hide();
            $('#logar').show();
            $('#progress').hide();
            
            auth_check = -1 ;
          
          }
          //Se o login der certo, chama a funcao acoes novamente,
          //para carregar a lista de tarefas do usuarios, caso tenha dado falha antes
          //buscaAcoes();
        
        },
        error: function (e){
          $('#logar').html('Entrar');
          $('#logar').removeAttr('disabled');
          $('#login_error').show();
           $('#login_success').hide();
          $('#logar').show();
          $('#progress').hide();
        },
        dataType:'json',
        async: true
    }); 

    return ;
}


function deslogar(){
        showModal('show');
        document.addEventListener('deviceready', function () {
          
          window.plugins.OneSignal.deleteTag("user");
        
        }, false);

        
        setTimeout(direcionar, 2000, './index.html');

        return false ;

    }



function direcionar(url){

  window.location.href = url ;
}