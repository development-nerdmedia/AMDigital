<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    style="
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
  <?php 
$myemails = 'development@nerdmedia.pe, alonso@nerdmedia.pe';
$name = $_POST['name'];
$tel = $_POST['telephone'];
$message = $_POST['message'];

$cuerpo = '
<html>  
<body>  
<h1>Hola AM Digital!</h1> 
<p>Tienes un nuevo mensaje:</p>
<p> <b>Nombre :</b> '.$name .'</p>
<p> <b>Teléfono :</b> '.$tel .'</p>
<p> <b>Mensaje :</b> '.$message .'</p>
</body> 
</html> 
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

$to = $myemails;
$email_subject = "Contacto AM Digital";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Mensaje: \n $message";
$headers .= "From: amdigital.com";


mail($to, $email_subject, $cuerpo, $headers);
?>
    <p style="color: #fff; font-size: 6vw">Gracias por escribirnos</p>
  </body>
</html>
