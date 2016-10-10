<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Form</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
</head>
<body>
    
<?php 
if(isset($_POST['submit'])){
    $to = "stvking17@gmail.com";
    $from = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $message = $first_name . " " . $last_name . " wrote you:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    $result = "Your mail was sent successfully. Thank you " . $first_name . ".";
    }
?>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          PHP Form and stuff
        </a>
      </div>
    </div>
  </nav>
  <div class="container">
    <form role="form" action="index.php" method="post">
      <div class="form-group">
        First Name: <input class="form-control" type="text" name="first_name"><br>
      </div>
      <div class="form-group">
        Last Name: <input class="form-control" type="text" name="last_name"><br>
      </div>
      <div class="form-group">
        Email: <input class="form-control" type="text" name="email"><br>
      </div>
      <div class="form-group">
        Message:<br><textarea class="form-control" rows="5" name="message" cols="30"></textarea><br>
      </div>
      <button class="btn btn-default" type="submit" name="submit" value="Submit">Submit</button>
    </form><br><br>
    <div>
      <?php echo isset($result) ? $result: ''; ?>
    </div>
</body>
  
  </div>
</html>