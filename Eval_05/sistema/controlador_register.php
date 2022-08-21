
<?php


if (!empty($_POST["register"])) {

    if (!empty($_POST['nombre']) or !empty($_POST['user']) or !empty($_POST['password']) or !empty($_POST['email'])) {
        
        echo "Uno de los campos esta vacio";


    } else {

        $nombre = $_POST["nombre"];
        $user = $_POST["user"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql=$conn->query("INSERT INTO usuarios(user,Password,Nombre,email) VALUES ('$user','$password','$nombre','$email') ");

        if ($sql==1){

            echo "Los datos han sido almacenados correctamente";
        }else{

            echo "Error al registrar";

        }

    }


}


?>