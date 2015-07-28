<?php include 'doctype.php'; ?>

<?php include 'logo&addressbar.php'; ?>

    <header>
    	<div class="ise">
        	<span class="title">
            	CrossFit <span class="blue">Oasis</span>
            </span>
        </div>
    </header>
    
<?php include 'nav.php'; ?>
    <div id="mainContent">
    <!--div id="leftcolumn"-->
    	<h1 class="headerborder">
        	Function Better
        </h1>
        <h3>
        	What Are Your Goals?
        </h3>
        <p>
        	Losing weight, getting stronger, being able to keep up with the grandkids, fitting into those jeans- do any of these sound familiar? We are a community of people achieving goals just like yours. We know that reaching goals is possible with a supportive community around you.
        </p>

    <!--/div-->
    <!--div id="rightcolumn"-->

        <h1 class="headerborder">
           Workout of the Day 
        </h1>
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        </script>
        <div class="fb-page" data-href="https://www.facebook.com/Crossfitoasis" data-width="600" data-height="600" data-hide-cover="true" data-show-facepile="false" data-show-posts="true">
            <div class="fb-xfbml-parse-ignore">
                <blockquote cite="https://www.facebook.com/Crossfitoasis">
                    <a href="https://www.facebook.com/Crossfitoasis">CrossFit Oasis</a>
                </blockquote>
            </div>
        </div>
        <!--h3>
           Mondays 8pm 
        </h3>
        <ul id="bigger">
            <li>Only $10 drop in rate introductory special through January</li>
            <li>Anyone is welcome to attend</li>
            <li>Power Yoga</li>
            <li>Ages 11 and up</li>
            <li>Leave feeling energized, uplifted, and centered!</li>
        </ul-->

        <h3 class="headerborder">
            First CrossFit Class is Free!   
        </h3>
        <p>
            Your first CrossFit class is on us.  We want you to know exactly what we offer and see first hand how we operate.  Our gift to you for giving us a chance.  
        </p> 
        <!--h3 class="headerborder">
        	CrossFit Oasis Founder
        </h3>
        <img src="images/chris.png" width="151" height="145" alt="Founder" id="founder">
        <p id="paragraph">
         "I decided to couple my experience leading physical fitness in the military for about the last decade with my assignment teaching soldiers for the last three years and become a CrossFit trainer. I completed my CrossFit Level 1 Training at the Reebok headquarters in Canton, MA. Since then, I have completed the CrossFit Weightlifting Trainer Course. I can’t wait to make a difference in your life by helping bring your physical fitness level to where you are able to function better in any aspect of your life."
        </p-->
        
    </div>
<?php include 'aside.php'; ?>
<?php include 'footer.php'; ?>
