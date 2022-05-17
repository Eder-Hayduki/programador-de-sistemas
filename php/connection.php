<?php
    //esses valores são padrão
    $server = 'localhost'; 
    $user = 'root'; 
    $password = '';
    $database = 'contato'; //nome do banco criado

    $connection = mysqli_connect($server, $user, $password, $database);

    if($connection) {
        echo 'SUCESSO';
    } else {
        echo 'VOCE FALHOU!';
    }

?>