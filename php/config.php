<?php

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword ='28070511Ma!';
$dbName = 'formulari-login'

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName)

if ($conexao->connect_errno)
{
    echo "erro";
}
else "conexão efetuada com sucesso";
?>