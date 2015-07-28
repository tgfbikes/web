<?php include 'doctype.php'; ?>

<?php include 'logo&addressbar.php'; ?>

    <header>
    	<div class="esc">
        	<span class="title">
            	Contact
            </span>
        </div>
    </header>
    
<?php include 'nav.php'; ?>

	<div id="mainContent">
        <h1 class="headerborder">    	
            Contact
        </h1>
        <p>
        	We are conveniently located in the Dixie Sunset Plaza at:
        <blockquote>
        	<strong>CrossFit Oasis</strong><br>
        	1812 W Sunset Blvd<br>
            St. George, UT 84770<br>
            info@crossfitoasis.com<br>
            435-625-1080
        </blockquote>
        <p>
        	If you have any additional questions please feel free to call us or send us an email.  Fill out the below form and we will get back to you as soon as possible.
        </p>
        <h2 id="contacth2">
        	Contact Us
        </h2>
        <form method="post" id="cntctfrm_contact_form" action="http://crossfitoasis.com/contact-2/" enctype="multipart/form-data">
            <div style="text-align: left; padding-top: 5px;">
                <label for="cntctfrm_contact_name">Name: </label>
            </div>
            <div style="text-align: left;">
                <input class="text" type="text" size="40" value="" name="cntctfrm_contact_name" required="required" id="cntctfrm_contact_name" placeholder="First & Last Name" style="text-align: left; margin: 0;">
            </div>
            <div style="text-align: left;">
                <label for="cntctfrm_contact_email">Email Address: </label>
            </div>
            <div style="text-align: left;">
                <input class="text" type="email" size="40" value="" name="cntctfrm_contact_email" id="cntctfrm_contact_email" placeholder="Email" style="text-align: left; margin: 0;">
            </div>
            <div style="text-align: left;">
                <label for="cntctfrm_contact_subject">Subject: </label>
            </div>
            <div style="text-align: left;">
                <input class="text" type="text" placeholder="Subject" size="40" value="" name="cntctfrm_contact_subject" id="cntctfrm_contact_subject" style="text-align: left; margin: 0;">
            </div>
            <div style="text-align: left;">
                <label for="cntctfrm_contact_message">Message: </label>
            </div>
            <div style="text-align: left;">
                <textarea rows="5" cols="30" placeholder="Enter Your Message Here" name="cntctfrm_contact_message" id="cntctfrm_contact_message"></textarea>
            </div>
            <div style="text-align: left; padding-top: 8px;">
                <input type="hidden" value="send" name="cntctfrm_contact_action">
                <input type="hidden" value="Version: 3.30">
                <input type="hidden" value="en" name="cntctfrm_language">
                <input type="submit" value="Submit" style="cursor: pointer; margin: 0pt; text-align: center;margin-bottom:10px;"> 
                    </div>
        </form>
        </div>
<?php include 'aside.php'; ?>   
<?php include 'footer.php'; ?>
