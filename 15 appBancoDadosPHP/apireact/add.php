<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

 
 $query_buscar = $pdo->query("SELECT * from dados where email = '$postjson[email]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'Email já Cadastrado!'));
 	 echo $result;
 	 exit();
 }else{
 	$query = $pdo->prepare("INSERT INTO dados SET nome = :nome, email = :email, senha = :senha ");
  
       $query->bindValue(":nome", $postjson['nome']);
       $query->bindValue(":email", $postjson['email']);
       $query->bindValue(":senha", $postjson['senha']);

      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 }

 
     


?>