<template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/listings_single_page_2.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:08 GMT -->
<head>
<meta name="author" content="">
<meta name="description" content="">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To Search</title>

<!-- Favicon -->
<link rel="shortcut icon" href="images/favicon.png">
<!-- Style CSS -->
<link rel="stylesheet" href="css/stylesheet.css">
<link rel="stylesheet" href="css/mmenu.css">
<link rel="stylesheet" href="css/style.css" id="colors">
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&amp;display=swap&amp;subset=latin-ext,vietnamese" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800" rel="stylesheet" type="text/css">
</head>
<body>
<!-- Wrapper -->
<div id="main_wrapper">
    <header id="header_part" class="fullwidth"> 
    <div id="header">
      <div class="container"> 
        <div class="utf_left_side"> 
          <div id="logo"> <a :href="route('home')"><img src="images/tosearch_logo.png" alt=""></a></div>
          <div class="mmenu-trigger">
      <button class="hamburger utfbutton_collapse" type="button">
        <span class="utf_inner_button_box">
          <span class="utf_inner_section"></span>
        </span>
      </button>
      </div>
          <div class="clearfix"></div>
        </div>
        <div class="utf_right_side">
          <div class="header_widget">  <a href="#login_with_otp" class="button border with-icon popup-with-zoom-anim"><i class="sl sl-icon-bag"></i>Seller Tools</a> <a href="#dialog_signin_part" class="button border sign-in popup-with-zoom-anim"><i class="sl sl-icon-user"></i> Buyer Tools</a>
            <div class="utf_user_menu">
              <div class="utf_user_name"><span><img src="images/dashboard-avatar.jpg" alt=""></span>Hi, John!</div>
              <ul>
                <li><a href="my_profile.html"><i class="sl sl-icon-user"></i> My Profile</a></li>
                <li><a href="business-buyer.html"> <i class="sl sl-icon-user-following"></i>Verified Business Buyer</a></li>
                <li><a :href="route('home')"><i class="sl sl-icon-power"></i>Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div id="login_with_otp" class="zoom-anim-dialog mfp-hide">
          <div class="small_dialog_header">
            <h3>Sign In</h3>
          </div>
          <div class="utf_signin_form style_one">
            <ul class="utf_tabs_nav">
              <li class=""><a href="#tab1">Log In</a></li>
              <li><a href="#tab2">Register</a></li>
            </ul>
            <div class="tab_container alt"> 
              <div class="tab_content" id="tab1" style="display:none;">
                <form method="post" class="register">
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="mobile_num">
                      <input type="text" class="input-text" name="mobile_num" id="mobile_num" value="" placeholder="Mobile Number" />
                    </label>
                  </p>
                   <a href="#login_otp" class="popup-with-zoom-anim">
                  <input type="submit" class="button border fw margin-top-10" value="Submit" /></a>
                </form>
              </div>
              
              <div class="tab_content" id="tab2" style="display:none;">
                <form method="post" class="register">
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="username2">
                      <input type="text" class="input-text" name="username" id="username2" value="" placeholder="Username" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="email2">
                      <input type="text" class="input-text" name="email" id="email2" value="" placeholder="Email" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="mobile_no">
                      <input type="text" class="input-text" name="mobile_no" id="mobile_no" value="" placeholder="Mobile Number" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="password1">
                      <input class="input-text" type="password" name="password1" id="password1" placeholder="Password" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="password2">
                      <input class="input-text" type="password" name="password2" id="password2" placeholder="Confirm Password" />
                    </label>
                  </p>
                  <input type="submit" class="button border fw margin-top-10" name="register" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="login_otp" class="zoom-anim-dialog mfp-hide">
          <div class="small_dialog_header">
            <h3>Verify Your Mobile Number</h3>
          </div>
          <div class="utf_signin_form style_one" style="text-align: center;">
            <h4 style="color: #ff2222;">Please Enter the One Time Password (OTP)<br> to verify your account</h4>
            <div> <span>A code has been sent to</span> <small>*******9897</small> </div>
            <form method="post" class="register">
            
            
            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2" style="display: inline-flex;"> <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>
            <div class="mt-4"></div>
            <div class="utf_row_form">
             <a href="dashboard.html" class="button border with-icon"> Validate</a>
            </div>
            </form>
          </div>
        </div>
        
        <div id="dialog_signin_part" class="zoom-anim-dialog mfp-hide">
          <div class="small_dialog_header">
            <h3>Sign In</h3>
          </div>
          <div class="utf_signin_form style_one">
            <ul class="utf_tabs_nav">
              <li class=""><a href="#tab1">Log In</a></li>
              <li><a href="#tab2">Register</a></li>
            </ul>
            <div class="tab_container alt"> 
              <div class="tab_content" id="tab1" style="display:none;">
                <form method="post" class="register">
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="mobile_num">
                      <input type="text" class="input-text" name="mobile_num" id="mobile_num" value="" placeholder="Mobile Number" />
                    </label>
                  </p>
                   <a href="#login_otp" class="popup-with-zoom-anim">
                  <input type="submit" class="button border fw margin-top-10" value="Submit" /></a>
                </form>
              </div>
              
              <div class="tab_content" id="tab2" style="display:none;">
                <form method="post" class="register">
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="username2">
                      <input type="text" class="input-text" name="username" id="username2" value="" placeholder="Username" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="email2">
                      <input type="text" class="input-text" name="email" id="email2" value="" placeholder="Email" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="mobile_no">
                      <input type="text" class="input-text" name="mobile_no" id="mobile_no" value="" placeholder="Mobile Number" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="password1">
                      <input class="input-text" type="password" name="password1" id="password1" placeholder="Password" />
                    </label>
                  </p>
                  <p class="utf_row_form utf_form_wide_block">
                    <label for="password2">
                      <input class="input-text" type="password" name="password2" id="password2" placeholder="Confirm Password" />
                    </label>
                  </p>
                  <input type="submit" class="button border fw margin-top-10" name="register" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </header>
  <div class="clearfix"></div>
   <div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Terms & Conditions</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: -80px;">
    <div class="row utf_sticky_main_wrapper">
      <div class="col-lg-12 col-md-12">
        <div id="titlebar" class="utf_listing_titlebar">
          <div class="utf_listing_titlebar_title">
           <h2>Terms and conditions of stay</h2>
         <p>These terms and conditions are governed by the laws of the United States of America and the laws of the State of Texas.</p>
         <p>As we already mentioned, it is not necessary to incorporate the local laws and regulations inside the documentation for your specific niche. Then again, if you reside in a particular area and keep the governing laws on the agreement page then it will be a plus for you.</p>
         <p>You can also mention how the disputes will be settled. For example, you can state in your stipulation that any dispute for the use of the website will be dealt with by arbitration procedure.</p>

          <h3>It Constitutes the Handling of the Abuses or Misconduct</h3>
          <p>It’s necessary for you to document what constitutes the abuses or any other misconduct from a user of your directory website. To this end, you can incorporate all the possible solutions by stating the probable solutions in your Terms and Conditions.</p>
          <p>In the cases of spamming other users, unauthorized methods of advertising, providing false information to other users, or using abusive words to any user, you can temporarily or permanently block a user, take any action depending upon the degree of the misconduct, or rectify the user all by yourself.</p>

          <h3>It Limits Your Liability to the Users</h3>
          <p>Technically, if you neglect to add terms and conditions on your website and business owners are selling services or goods via your directory website, then your liability is unlimited.</p>
          <p>For example, it is quite likely that your vendors will supply damaged goods or goods with an expired date. Now, if you do not prevent your liability by specifying the agreement with proper terms and conditions, you are doomed!</p>
          <p>Another example is when you allow your users to post user-generated content, you have to avoid liability by specifying the conditions for such an incident. Because who knows some of the posted content may be violating Google’s rules by plagiarizing or infringing the copyright of a photo.</p>

          <h3>It Sets Expectations on Directory Listings</h3>
          <p>You must make your directory listings type clear on your terms and conditions. This way the business owners will get to know which listing covers what services. Simply put, how much is the pricing for each advertisement they are posting?</p>
          <p>Your terms and conditions should define to listing owners or advertisers what they’re getting from advertising in your directory. For instance. you can mention that the business owners will not enjoy any advanced benefits like featured listings or things like that for any free listing service.</p>

          <h3>Why you should not copy another website’s terms and conditions?</h3>
          <p>Now, you may think that copying other websites’ terms and conditions is just enough to serve your purpose. Unfortunately, it is not going to happen that way! If you just simply copy and paste your directory business name replacing their’s verbatim, it will be a violation of the copyright of the website you are following.</p>
          <p>In this circumstance, you will be asked to remove the content or will be notified to compensate for the damages arising from the infringement. They may also contact your web host to remove content from your website showing adequate evidence.</p>
          <p>Besides, if you copy and paste another website’s terms and conditions replacing your business name then it may not resonate with your brand. Thus, doing so can be potentially dangerous for your directory website.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <!-- Footer -->
  <div id="footer" class="footer_sticky_part"> 
    <div class="container">
      <div class="row">
    <div class="col-md-4 col-sm-12 col-xs-12"> 
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>          
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6">
          <h4>Supplier Tool Kit</h4>
          <ul class="social_footer_link">
            <li><a href="#">Seller Tools</a></li>
            <li><a href="#">Latest BuyLead</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6">
          <h4>Buyers Tool Kit</h4>
          <ul class="social_footer_link">
            <li><a href="#">Post Your Requirement</a></li>
            <li><a href="#">Products You Buy</a></li>
            <li><a href="#">Search Products & Suppliers</a></li>
          </ul>
        </div>

        <div class="col-md-2 col-sm-3 col-xs-6">
          <h4>Useful Links</h4>
          <ul class="social_footer_link">
            <li><a :href="route('home')">Home</a></li>
            <li><a href="#">Listing</a></li>
            <li><a href="#">Join Sale</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6">
          <h4>Help</h4>
          <ul class="social_footer_link">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Complaints</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>        
      </div>
      
      <div class="row">
        <div class="col-md-12">
          <div class="footer_copyright_part">Copyright © 2023 To Search. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </div> 
  <div id="bottom_backto_top"><a href="#"></a></div>
</div>
</body>
</html>
</template>

<!-- Scripts -->
<script>
import $ from 'jquery';

export default {
  mounted() {
    import('@/public/scripts/jquery-3.4.1.min.js').then(() => {
    });
    import('@/public/scripts/bootstrap-select.min.js').then(() => {
    });
    import('@/public/scripts/mmenu.js').then(() => {
    });
    import('@/public/scripts/chosen.min.js').then(() => {
    });
    import('@/public/scripts/slick.min.js').then(() => {
    });
    import('@/public/scripts/rangeslider.min.js').then(() => {
    });
    import('@/public/scripts/magnific-popup.min.js').then(() => {
    });
    import('@/public/scripts/jquery-ui.min.js').then(() => {
    });
    import('@/public/scripts/tooltips.min.js').then(() => {
    });
    import('@/public/scripts/color_switcher.js').then(() => {
    });
    import('@/public/scripts/jquery_custom.js').then(() => {
    });
  }
};
</script>