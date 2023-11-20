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
  <div class="container">
    <div class="row utf_sticky_main_wrapper">
      <div class="col-lg-8 col-md-8">
        <div id="titlebar" class="utf_listing_titlebar">
          <div class="utf_listing_titlebar_title">
           <h2>Automatic Solid Brick Making Machine</h2>
           <div class="dtlsec">
           <table><tbody><tr><td class="tdwdt">Brick Type</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Solid</span></div></td></tr><tr><td class="tdwdt">Brick Raw Material</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Concrete</span></div></td></tr><tr><td class="tdwdt">Automation Grade</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Automatic</span></div></td></tr><tr><td class="tdwdt">Tolerance</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">1 mm</span></div></td></tr><tr><td class="tdwdt">Belt Conveyor</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">10 m</span></div></td></tr></tbody></table>
         </div>
         <p>Owing to our technologically updated manufacturing facilities, we have been able to offer a gamut of Brick Making Machine.</p>
         <div style="margin-top: 12px;"><button class="button border contactsupplier">Contact Supplier</button></div>
          </div>
        </div>
        <div id="utf_listing_overview" class="utf_listing_section">
          <h3 class="utf_listing_headline_part margin-top-30 margin-bottom-30">Product Details</h3>
          <h4><b>Product Specification</b></h4>
          <div class="dtlsec">
           <table><tbody><tr><td class="tdwdt">Brick Type</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Solid</span></div></td></tr><tr><td class="tdwdt">Brick Raw Material</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Concrete</span></div></td></tr><tr><td class="tdwdt">Automation Grade</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Automatic</span></div></td></tr><tr><td class="tdwdt">Tolerance</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">1 mm</span></div></td></tr><tr><td class="tdwdt">Belt Conveyor</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">10 m</span></div></td></tr><tr><td class="tdwdt">Cycle Time</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">20-25 sec</span></div></td></tr></tbody></table>
         </div>
         <h4><b>Product Description</b></h4>
          <p>Owing to our technologically updated manufacturing facilities, we have been able to offer a gamut of Brick Making Machine.</p>
          <h4><b>Specifications:</b></h4>
          <div class="dtlsecs">
           <table><tbody><tr><td class="tdwdt">Operation</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">Capacity</span></div></td></tr><tr><td class="tdwdt">Overall Plant Dimension</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">14.5 x 12.5 x 3.8 m</span></div></td></tr><tr><td class="tdwdt">Pallet Size</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">  850 x 550 x18 mm</span></div></td></tr><tr><td class="tdwdt">Brick Stroke (230x105x75mm)</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">14 Nos.</span></div></td></tr><tr><td class="tdwdt">Frequency of Vibrate</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">75-90 Hz</span></div></td></tr><tr><td class="tdwdt">Cycle Time</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">20-25 sec</span></div></td></tr><tr><td class="tdwdt">Installed Capacity kW (HP)</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"> 47.5 kW (64.5 Hp)</span></div></td></tr><tr><td class="tdwdt">Belt Conveyor</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">10 m</span></div></td></tr><tr><td class="tdwdt">Pan Mixer 500 Kg. -02 Nos.</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">1828 x 450 mm</span></div></td></tr><tr><td class="tdwdt">Hydraulic Tank Oil Capacity</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">280 Litre</span></div></td></tr><tr><td class="tdwdt">Maximum Excitation Force</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">70 KN</span></div></td></tr><tr><td class="tdwdt">Tonnage of Hydraulic Pressure</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">10 - 12 Mt</span></div></td></tr></tbody></table>
         </div>
         <h4><b>Additional Information:</b></h4>
          <div class="dtlsecs">
           <table><tbody><tr><td class="tdwdt">Item Code</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">MAC1400-1</span></div></td></tr><tr><td class="tdwdt">Payment Terms</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip">T/T (Bank Transfer)</span></div></td></tr></tbody></table>
         </div>
         <h4>Interested in this product?<br><b>Get Latest Price from the seller</b></h4>
          <div style="margin-top: 12px;"><button class="button border contactsupplier">Contact Supplier</button></div>

          <div id="utf_listing_video" class="utf_listing_section">
          <h3 class="utf_listing_headline_part margin-top-50 margin-bottom-40">Product Video</h3>
          <div class="detail-video">
            <iframe width="835" height="420" src="https://www.youtube.com/embed/9o9TIwHtOJU" allowfullscreen></iframe>
          </div>
        </div>

         <h3 class="utf_listing_headline_part margin-top-30 margin-bottom-30">About the Company</h3>

          <p>Brick Making Machine, Hydraulic Brick Making Machine, Interlocking Brick Making Machine, Paving Block Making Machine, Cement Brick Making Machine, Block Making Machine, Concrete Block Making Machine & Automatic Fly Ash Brick Plant. With an ideal integration of software and hardware, we are able to develop an extensive range of best quality machinery which includes Brick Making Machine, Paver Mold and Batching Plant. Further, our offered line of products is manufactured on highest quality specifications of sturdy construction, robust performance, precision engineered fabrication, environmental sustainability, and cost efficiency. Besides, we are dedicated to providing satisfactory Brick machine maintenance services that feature utmost professionalism, timely execution and competitive price bands.</p>
          <p>Our product line is highly acknowledged by leading builders, construction companies, and civil engineers across the country who are looking for simple yet reliable designs of modern day machines. Our company was founded with a mission to revolutionise the production processes. we, therefore, have implemented leading techniques at our well-integrated work set up. Besides, each business process is backed with the pivotal objective to augment the prolific development of the society, and we do this by conducting rigorous market analysis and by developing products that feature eco-sustainable properties and least environmental footprints.We are presently catering to Construction Industry, Concrete Product Manufacturer, Brick Manufacturer (Clay & Fly Ash Based), Concrete Precast Industries, Stone Crusher Plants, Redix Concrete Plant, Cement Industry PWD Govt Contractor, RMC Plants, Cement Dealers, Civil Contractors, Fly Ash Supplier to name a few.</p>
      <div id="utf_listing_tags" class="utf_listing_section listing_tags_section margin-bottom-10 margin-top-0">          
        <a href="#"><i class="sl sl-icon-phone" aria-hidden="true"></i> +(01) 1123-254-456</a>      
      <a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i> info@example.com</a>  
      <a href="#"><i class="sl sl-icon-globe" aria-hidden="true"></i> www.example.com</a>     
          </div>
        </div>
        <div id="utf_listing_location" class="utf_listing_section">
          <h3 class="utf_listing_headline_part margin-top-60 margin-bottom-40">Location</h3>
          <div id="utf_single_listing_map_block">
            <div id="utf_single_listingmap" data-latitude="36.778259" data-longitude="-119.417931" data-map-icon="im im-icon-Hamburger"></div>
            <a href="#" id="utf_street_view_btn">Street View</a> 
      </div>
        </div>
        <div id="utf_listing_reviews" class="utf_listing_section">
          <h3 class="utf_listing_headline_part margin-top-75 margin-bottom-20">Reviews <span>(08)</span></h3>
          <div class="clearfix"></div>
      <div class="reviews-container">
      <div class="row">
        <div class="col-lg-3">
          <div id="review_summary">
            <strong>4.5</strong>
            <em>Superb Reviews</em>
            <small>Out of 15 Reviews</small>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-2 review_progres_title"><small><strong>Quality</strong></small></div>
            <div class="col-lg-9">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-lg-1 review_progres_title"><small><strong>77</strong></small></div>
          </div>
          <div class="row">
            <div class="col-lg-2 review_progres_title"><small><strong>Space</strong></small></div>
            <div class="col-lg-9">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-lg-1 review_progres_title"><small><strong>15</strong></small></div>
          </div>
          <div class="row">
            <div class="col-lg-2 review_progres_title"><small><strong>Price</strong></small></div>
            <div class="col-lg-9">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-lg-1 review_progres_title"><small><strong>18</strong></small></div>
          </div>
          <div class="row">
            <div class="col-lg-2 review_progres_title"><small><strong>Service</strong></small></div>
            <div class="col-lg-9">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-lg-1 review_progres_title"><small><strong>10</strong></small></div>
          </div>
          <div class="row">
            <div class="col-lg-2 review_progres_title"><small><strong>Location</strong></small></div>
            <div class="col-lg-9">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-lg-1 review_progres_title"><small><strong>05</strong></small></div>
          </div>
        </div>
      </div>
      </div>
          <div class="comments utf_listing_reviews">
            <ul>
              <li>
                <div class="avatar"><img src="images/client-avatar1.jpg" alt="" /></div>
                <div class="utf_comment_content">
                  <div class="utf_arrow_comment"></div>
                  <div class="utf_star_rating_section" data-rating="5"></div>
          <a href="#" class="rate-review">Helpful Review <i class="fa fa-thumbs-up"></i></a>
                  <div class="utf_by_comment">Francis Burton<span class="date"><i class="fa fa-clock-o"></i> Jan 05, 2022 - 8:52 am</span> </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                                    
        </div>
              </li>
              <li>
                <div class="avatar"><img src="images/client-avatar2.jpg" alt="" /> </div>
                <div class="utf_comment_content">
                  <div class="utf_arrow_comment"></div>
                  <div class="utf_star_rating_section" data-rating="4"></div>
          <a href="#" class="rate-review">Helpful Review <i class="fa fa-thumbs-up"></i></a>
                  <div class="utf_by_comment">Francis Burton<span class="date"><i class="fa fa-clock-o"></i> Jan 05, 2022 - 8:52 am</span> </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
        </div>
              </li>
        <li>
                <div class="avatar"><img src="images/client-avatar3.jpg" alt="" /> </div>
                <div class="utf_comment_content">
                  <div class="utf_arrow_comment"></div>
                  <div class="utf_star_rating_section" data-rating="4"></div>                  
                  <div class="utf_by_comment">Francis Burton<span class="date"><i class="fa fa-clock-o"></i> Jan 05, 2022 - 8:52 am</span> </div>
          <a href="#" class="rate-review">Helpful Review <i class="fa fa-thumbs-up"></i></a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
        </div>
              </li>
              <li>
                <div class="avatar"><img src="images/client-avatar1.jpg" alt="" /></div>
                <div class="utf_comment_content">
                  <div class="utf_arrow_comment"></div>
                  <div class="utf_star_rating_section" data-rating="4.5"></div>                  
                  <div class="utf_by_comment">Francis Burton<span class="date"><i class="fa fa-clock-o"></i> Jan 05, 2022 - 8:52 am</span> </div>
          <a href="#" class="rate-review">Helpful Review <i class="fa fa-thumbs-up"></i></a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>
                  <div class="review-images utf_gallery_container"> 
            <a href="images/review-image-01.jpg" class="utf_gallery"><img src="images/review-image-01.jpg" alt=""></a> 
          <a href="images/review-image-02.jpg" class="utf_gallery"><img src="images/review-image-02.jpg" alt=""></a> 
          <a href="images/review-image-03.jpg" class="utf_gallery"><img src="images/review-image-03.jpg" alt=""></a> 
          <a href="images/review-image-01.jpg" class="utf_gallery"><img src="images/review-image-01.jpg" alt=""></a> 
          <a href="images/review-image-02.jpg" class="utf_gallery"><img src="images/review-image-02.jpg" alt=""></a> 
          <a href="images/review-image-03.jpg" class="utf_gallery"><img src="images/review-image-03.jpg" alt=""></a> 
          </div>                  
        </div>
              </li>
        <li>
                <div class="avatar"><img src="images/client-avatar3.jpg" alt="" /> </div>
                <div class="utf_comment_content">
                  <div class="utf_arrow_comment"></div>
                  <div class="utf_star_rating_section" data-rating="4"></div>                  
                  <div class="utf_by_comment">Francis Burton<span class="date"><i class="fa fa-clock-o"></i> Jan 05, 2022 - 8:52 am</span> </div>
          <a href="#" class="rate-review">Helpful Review <i class="fa fa-thumbs-up"></i></a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
        </div>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-12">
              <div class="utf_pagination_container_part margin-top-30">
                <nav class="pagination">
                  <ul>
                    <li><a href="#"><i class="sl sl-icon-arrow-left"></i></a></li>
                    <li><a href="#" class="current-page">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div id="utf_add_review" class="utf_add_review-box">
          <h3 class="utf_listing_headline_part margin-bottom-20">Add Your Review</h3>
          <span class="utf_leave_rating_title">Your email address will not be published.</span>
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="clearfix"></div>
              <div class="utf_leave_rating margin-bottom-30">
                <input type="radio" name="rating" id="rating-1" value="1"/>
                <label for="rating-1" class="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-2" value="2"/>
                <label for="rating-2" class="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-3" value="3"/>
                <label for="rating-3" class="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-4" value="4"/>
                <label for="rating-4" class="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-5" value="5"/>
                <label for="rating-5" class="fa fa-star"></label>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="add-review-photos margin-bottom-30">
                <div class="photoUpload"> <span>Upload Photo <i class="sl sl-icon-arrow-up-circle"></i></span>
                  <input type="file" class="upload" />
                </div>
              </div>
            </div>
          </div>
          <form id="utf_add_comment" class="utf_add_comment">
            <fieldset>
              <div class="row">
                <div class="col-md-4">
                  <label>Name:</label>
                  <input type="text" placeholder="Name" value=""/>
                </div>
                <div class="col-md-4">
                  <label>Email:</label>
                  <input type="text" placeholder="Email" value=""/>
                </div>
                <div class="col-md-4">
                  <label>Subject:</label>
                  <input type="text" placeholder="Subject" value=""/>
                </div>
              </div>
              <div>
                <label>Review:</label>
                <textarea cols="40" placeholder="Your Message..." rows="3"></textarea>
              </div>
            </fieldset>
            <button class="button">Submit Review</button>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
      
      <!-- Sidebar -->
      <div class="col-lg-4 col-md-4 margin-top-75 sidebar-search">
        <div class="utf_box_widget">
          <h3><i class="sl sl-icon-phone"></i>Seller Contact Details</h3>
          <div class="utf_hosted_by_user_title"> <a href="#" class="utf_hosted_by_avatar_listing"><img src="images/dashboard-avatar.jpg" alt=""></a>
            <h4><a href="#">Revomac Industries</a><span>Jigar Patel</span>
              <span><i class="sl sl-icon-location"></i>Plot No. 1 & 2, Shivadhin Industrial Park, Nr. Hpcl Petrol Pump, Chandiyal Ahmedabad - 382433, Gujarat, India</span>
            </h4>
          </div>
          <ul class="utf_listing_detail_sidebar">
            <li><i class="sl sl-icon-globe"></i> <a href="#"> www.example.com</a></li>
            <li><i class="sl sl-icon-phone"></i>View Mobile No</li>
            <li><i class="fa fa-envelope-o"></i> <a href="mailto:info@example.com">info@example.com</a></li>
          </ul>     
        </div>
    <div class="utf_box_widget opening-hours margin-top-35">
          <h3><i class="sl sl-icon-envelope-open"></i>Contact Us</h3>
          <form id="contactform">
            <div class="row">              
              <div class="col-md-12">                
                  <input name="name" type="text" placeholder="Name" required="">                
              </div>
              <div class="col-md-12">                
                  <input name="email" type="email" placeholder="Email" required="">                
              </div>      
        <div class="col-md-12">                
                  <input name="phone" type="text" placeholder="Phone" required="">                
              </div>  
        <div class="col-md-12">
          <textarea name="comments" cols="40" rows="2" id="comments" placeholder="Your Message" required=""></textarea>
        </div>
            </div>            
            <input type="submit" class="submit button" id="submit" value="Submit">
          </form>
        </div>
    <div class="utf_box_widget opening-hours review-avg-wrapper margin-top-35">
          <h3><i class="sl sl-icon-star"></i>  Rating Average </h3>
          <div class="box-inner">
        <div class="rating-avg-wrapper text-theme clearfix">
        <div class="rating-avg">4.8</div>
        <div class="rating-after">
          <div class="rating-mode">/5 Average</div>
          
        </div>
        </div>
        <div class="ratings-avg-wrapper">
        <div class="ratings-avg-item">
          <div class="rating-label">Quality</div>
          <div class="rating-value text-theme">5.0</div>
        </div>
        <div class="ratings-avg-item">
          <div class="rating-label">Location</div>
          <div class="rating-value text-theme">4.5</div>
        </div>
        <div class="ratings-avg-item">
          <div class="rating-label">Space</div>
          <div class="rating-value text-theme">3.5</div>
        </div>
        <div class="ratings-avg-item">
          <div class="rating-label">Service</div>
          <div class="rating-value text-theme">4.0</div>
        </div>
        <div class="ratings-avg-item">
          <div class="rating-label">Price</div>
          <div class="rating-value text-theme">5.0</div>
        </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  
  <section class="fullwidth_block padding-top-20 padding-bottom-50">
    <div class="container">
      <div class="row slick_carousel_slider">
        <div class="col-md-12">
          <h3 class="headline_part centered margin-bottom-25">Find products similar to <b>Automatic Solid Brick Making Machine</b></h3>
        </div>    
    <div class="row">
      <div class="col-md-12">
        <div class="simple_slick_carousel_block utf_dots_nav"> 
          <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/fully-automatic.webp" alt="">
            <div class="utf_listing_item_content">
            <h3>Brick Making Machines Price In India</h3>
            <span>Revomac Industries</span>
            <span><i class="fa fa-map-marker"></i> The Ritz-Carlton, Hong Kong</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
          <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/ECO.webp" alt="">
            <div class="utf_listing_item_content">
            <h3>Semi-Automatic Brick Making Machine</h3>
            <span>Alexcure Lifesciences Private Limited</span>
            <span><i class="fa fa-map-marker"></i>Chandigarh</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
          <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/automatic-rotary.jpg" alt="">
            <div class="utf_listing_item_content">
            <h3>Brick Making Machine</h3>
            <span>M Ramakrishna Glass & Plywoods Private Limited</span>
            <span><i class="fa fa-map-marker"></i>George Town, Chennai, Tamil Nadu</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
            <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/cement-bricks-making-machine.jpg" alt="">
            <div class="utf_listing_item_content">
            <h3>Hollow Brick Machine</h3>
            <span>Biocore Pharmaceuticals</span>
            <span><i class="fa fa-map-marker"></i>Chandigarh</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
            <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/manual-fly-ash-bricks.jpeg" alt="">
            <div class="utf_listing_item_content">
            <h3>Fly Ash Brick Making Machine</h3>
            <span>Khemka Plyland</span>
            <span><i class="fa fa-map-marker"></i>Vijaynagar, Bengaluru, Karnataka</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
          <div class="utf_carousel_item"> <a href="listing_details.html" class="utf_listing_item-container compact">
          <div class="utf_listing_item"> <img src="images/hydraulic-pressing-bricks.webp" alt="">
            <div class="utf_listing_item_content">
            <h3>Vibro Press Block Brick Making Machine</h3>
            <span>Bidu Biotech</span>
            <span><i class="fa fa-map-marker"></i>Mohali, Punjab</span>                 
            </div>            
          </div><div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
          </a> 
          </div>
        </div>
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
  <div id="bottom_backto_top"><a href="#"></a></div>
</div>
</body>

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/listings_single_page_2.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:08 GMT -->
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