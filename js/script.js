/* window.confirm('Deseja visualizar o conteúdo?');
var user = window.prompt("Digite seu Usuário");
var senha = window.prompt("Digite sua senha");
var senha_valida = 'admin123';

if(senha === senha_valida) {
    window.alert(`Seja bem vindo (a) ${user}`);
} else {
    window.alert('Senha incorreta');
} 

document.getElementById('nome_user').style.color = '#013482';
document.getElementById('email_user').style.color = '#013482';
document.getElementById('msg_user').style.color = '#013482';
    document.getElementById('msg_user').style.fontFamily = 'Arial, sans-serif';
*/

function validar() {
  let typeName = document.getElementById("nome_user").value;
  let typeEmail = document.getElementById("email_user").value;
  let typeMsg = document.getElementById("msg_user").value;
  if (typeName == "" || typeEmail == "" || typeMsg == "") {
    alert("Por favor preencha todos os campos");
  } else {
    alert(`Seja bem vindo ${typeName}`);
  }
}
