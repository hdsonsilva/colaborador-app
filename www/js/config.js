var server = 'https://colaborador.doctum.edu.br';

//var server = 'http://localhost/colaborador.doctum.edu.br';

//Nome do Aplicativo
var appName = 'Colaborador Doctum' ;

//URL AUTENTICACAO
var url_auth =  'api/geratoken';
var url_verify =  'api/validatoken';
var url_print = 'impressao';
var url_down = 'download';
var url_changepasswd = 'senha' ;


var idonesignal = "de2bae19-d92e-4db8-bb7f-622b0877f027";
var debug = 0 ;

var controle_mensagem_atualizar = 1;

//Complemento para ser usado nos servicos chamados via GET
var complemento = '';

//Controle de paginacao agenda
var agendacontrole = 0 ;

//Controle de paginacao recados
var recadocontrole = 0 ;

localStorage.setItem('app_timeverify_auth', 180000);
localStorage.setItem('idonesignal', idonesignal);