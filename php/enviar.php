<?php 

//armazenando valores dos inputs do formulário em variáveis.
include_once('connection.php');

$nome = $_POST["nome"];
$email = $_POST["email"];
$message = $_POST["message"];

//guardamos o comando sql para salvar dados do form em uma variável

$sql = "insert into contact(nome, email, message) values('$nome', '$email', '$message')";

//recupera conexão passando como parametro o servidor, usuário, senha e banco, criados no arquivo connection.
$query = mysqli_query($connection, $sql);

?>