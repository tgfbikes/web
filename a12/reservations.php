<?php include 'doctype.php';?>

<title>Pacific Trails Resort :: Reservations</title>

<?php include 'header.php'; ?>

    <div id="content">
    	<h2>
        	Reservations at Pacific Trails
        </h2>
        <h3>
        	Contact Us Today!
        </h3>

        <form method="post" action="reservations.php">
        	<label for="fname">First Name</label>
            	<input type="text" name="fname" id="fname">
            <label for="lname">Last Name</label>
            	<input type="text" name="lname" id="lname">
            <label for="phone">Phone Number</label>
            	<input type="tel" name="phone" id="phone" maxlength="12">
            <label for="email">Email</label>
            	<input type="email" name="email" id="email" maxlength="40">
            <label for="message">Comments</label>
            	<textarea name="message" id="message" rows="2" cols="32">
                </textarea>
            <input type="submit" id="submit" name="submit" value="Submit">
            <?php
				$fname = $_POST['fname'];
				$lname = $_POST['lname'];
				$phone = $_POST['phone'];
				$email = $_POST['email'];
				$message = $_POST['message'];
				$from = 'From: My Contact Form';
				$to = 'tgfbikes@gmail.com';
				$subject = 'Wassup?';
				$body = "From: $fname\n E-Mail: $email\n Message:\n $message";
				if ($_POST['submit']) {
					if (mail ($to, $subject, $body, $from)) {
						echo '<p>Message Sent Successfully!</p>';
					}
					else {
						echo '<p>Ah! Try again, please?</p>';
					}
				}
			 ?>
         </form>
      	<span class="resort"> Pacific Trails Resort </span> <br>
        12010 Pacific Trails Road <br>
        Zephyr, CA 95555 <br><br>
        <a id="mobile" href="tel:888-555-5555">888-555-5555</a>
        <span id="desktop">888-555-5555</span>
        <br><br>
      </div>
   <?php include 'footer.php';?>
