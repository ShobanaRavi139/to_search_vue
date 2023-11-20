<template>
<!DOCTYPE html>
<html lang="zxx">
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
          <div class="header_widget"> <a href="#login_with_otp" class="button border with-icon popup-with-zoom-anim"><i class="sl sl-icon-bag"></i>Seller Tools</a> <a href="#dialog_signin_part" class="button border sign-in popup-with-zoom-anim"><i class="sl sl-icon-user"></i> Buyer Tools</a>
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
<section class="fullwidth_block padding-65 padding-bottom-70" data-background-color="#f9f9f9" style="background: rgb(249, 249, 249);">
  <div class="bgf2 pdtb50">
    <div class="dfx wdth jcSb alnCt">
      <div>
        <h2 class="imClr fw fs36 lh54 ttu">Become Verified Business Buyer</h2>
        <div class="mb10" id="first_mobile">
          <div class="pr dib">
              <div class="col-md-2" style="padding-right: 10px;">
                <input id="couponCode" placeholder="+91" required="" type="text">
              </div>
              <div class="col-md-10" style="padding-left: 0px;">
                <input id="couponCode" placeholder="9468658796" required="" type="text">
              </div>
          </div>
          </div>
        <a href="#" class="button buyer-verified-continue" style="margin-top: 4px;margin-left: 15px;">Continue <i class="fa fa-arrow-circle-right"></i></a>
      </div>
      <img src="images/buyer.png">
    </div>
  </div>
</section>
 <section class="fullwidth_block padding-top-75" data-background-color="#ffffff">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4 class="headline_part centered margin-bottom-50">Verified Business Buyer Program helps buyers to build trust profile by verifying their business identity with To-Search. A large number of sellers prefer such buyers with faster response.</h4>
        </div>
      </div>
      <div class="row" style="padding: 40px;margin-top: -50px;">
        <div class="buyer-info">
        <div class="verify-how">
          <span class="verifybuyer">How to be a Verified Buyer?</span><br>
          Share these details and<br>get verified
        </div>
        <ul class="verifyul">
          <li class="dfx alnCt mb20"><i class="sbg dib hicn1"></i>Mobile Number</li>
          <li class="dfx alnCt mb20"><i class="sbg dib hicn2"></i>Company Name</li>
          <li class="dfx alnCt"><i class="sbg dib hicn3"></i>Email Id</li>
          <li class="dfx alnCt"><i class="sbg dib hicn4"></i>GST</li>
        </ul>
      </div>
       <a href="#" class="button buyer-verified-start" style="margin-top: 4px;margin-left: 470px;">Get Started</a>
      </div>
    </div>
  </section>
  <section class="fullwidth_block padding-bottom-45">
    <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
      <h2 class="headline_part centered margin-top-80 imClr">Benefits for Verified Business Buyers
      <span class="hArrb sbg pa hCntr"></span></h2>
      </div>
    </div>
    <div class="dfx alnCt jcSb" style="margin-top: 40px;">
      <div class="wd33 lh26 fs18 cl58" style="text-align: center;"><i class="db mrA sbg bIcnw bIcn1"></i><span class="db imClr fw fs20 mt10 mb10" style="text-align: ce">Trust Profile</span>Preferred by sellers</div>
      <div class="wd33 lh26 fs18 cl58" style="text-align: center;"><i class="db mrA sbg bIcnw bIcn2"></i><span class="db imClr fw fs20 mt10 mb10">Verification Status Display </span>Easier recognition by sellers</div>
      <div class="wd33 lh26 fs18 cl58" style="text-align: center;"><i class="db mrA sbg bIcnw bIcn3"></i><span class="db imClr fw fs20 mt10 mb10">Preferential Seller Selection</span>Better pricing responses by sellers</div>
    </div>
    </div>
  </section>
<section class="fullwidth_block padding-bottom-45">
  <div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 utf_listing_payment_section">
      <div class="utf_booking_listing_section_form margin-bottom-40">
      <h3><i class="fa fa-check"></i>Become Verified Business Buyer</h3>
      <div class="row">
        <div class="col-md-6">
        <label>Mobile Number</label>
        <input type="text" value="" placeholder="Mobile Number">
        </div>
        <div class="col-md-6">
        <label>Name</label>
        <input type="text" value="" placeholder="Name">
        </div>
        <div class="col-md-6">
        <label>Company Name</label>
        <input type="text" value="" placeholder="Company Name">
        </div>
        <div class="col-md-6">
        <div class="medium-icons">
          <label>Email ID</label>
          <input type="text" value="" placeholder="Email">
        </div>
        </div>
        <div class="col-md-6">
        <div class="medium-icons">
          <label>Pan Number</label>
          <input type="text" value="" placeholder="Pan Number">
        </div>
        </div>
        <div class="col-md-6">
        <div class="medium-icons">
          <label>GST</label>
          <input type="text" value="" placeholder="GST">
        </div>
        </div>
        <div class="col-md-6">
        <div class="medium-icons">
          <label>Aadhar Number</label>
          <input type="text" value="" placeholder="Aadhar Number">
        </div>
        </div>
      </div>
      <a href="" class="button utf_booking_confirmation_button margin-top-20 margin-bottom-10" style="margin-left: 485px;">Continue<i class="fa fa-arrow-right" style="margin-left: 10px;"></i></a>  
    </div>
    </div>
  </div>
</div>
</section>




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