<template>
  <!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/listings_grid_with_sidebar.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:16:45 GMT -->
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
   <div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Brick Making Machines</h2>
          <nav id="breadcrumbs">
            <ul>
              <li><a :href="route('home')">Home</a></li>
              <li>Brick Making Machines</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-8 listing_grid_item">
        <div class="listing_filter_block">
          <div class="col-md-2 col-xs-2">
            <div class="utf_layout_nav"> <a href="#" class="grid active"><i class="fa fa-th"></i></a> <a :href="route('listingscategories')" class="list"><i class="fa fa-align-justify"></i></a> </div>
          </div>
          <div class="col-md-10 col-xs-10">
            <div class="sort-by">
              <div class="utf_sort_by_select_item sort_by_margin">
                <select data-placeholder="Sort by Listing" class="utf_chosen_select_single">
                  <option>Sort by Listing</option>
          <option>Latest Listings</option>
          <option>Popular Listings</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Highest Reviewe</option>
          <option>Lowest Reviewe</option>                  
                  <option>Newest Listing</option>
                  <option>Oldest Listing</option>
          <option>Random Listings</option>
                </select>
              </div>
            </div>
            <div class="sort-by">
              <div class="utf_sort_by_select_item sort_by_margin">
                <select data-placeholder="Categories:" class="utf_chosen_select_single">
          <option>Categories</option>
          <option>Restaurant</option>
                  <option>Health</option>
                  <option>Hotels</option>
                  <option>Real Estate</option>                  
          <option>Fitness</option>                  
                  <option>Shopping</option>
          <option>Travel</option>
          <option>Shops</option>
          <option>Nightlife</option>
          <option>Events</option>
                </select>
              </div>
            </div>
            <div class="sort-by">
              <div class="utf_sort_by_select_item utf_search_map_section">
                <ul>
                  <li><a class="utf_common_button" href="#"><i class="fa fa-dot-circle-o"></i>Near Me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-lg-6 col-md-12"> <a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/fully-automatic.webp" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Brick Making Machines Price In India</h3>
        <span>Revomac Industries</span>
        <span><i class="fa fa-map-marker"></i> The Ritz-Carlton, Hong Kong</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
      </div>
      <div class="col-lg-6 col-md-12"> <a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/ECO.webp" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Semi-Automatic Brick Making Machine</h3>
        <span>Alexcure Lifesciences Private Limited</span>
        <span><i class="fa fa-map-marker"></i>Chandigarh</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
      </div>
       <div class="col-lg-6 col-md-12"> <a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/automatic-rotary.jpg" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Brick Making Machine</h3>
        <span>M Ramakrishna Glass & Plywoods Private Limited</span>
        <span><i class="fa fa-map-marker"></i>George Town, Chennai, Tamil Nadu</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
      </div>
      <div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/cement-bricks-making-machine.jpg" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Hollow Brick Machine</h3>
        <span>Biocore Pharmaceuticals</span>
        <span><i class="fa fa-map-marker"></i>Chandigarh</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
      </div>
      <div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/manual-fly-ash-bricks.jpeg" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Fly Ash Brick Making Machine</h3>
        <span>Khemka Plyland</span>
        <span><i class="fa fa-map-marker"></i>Vijaynagar, Bengaluru, Karnataka</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
      </div>
       <div class="col-lg-6 col-md-12"><a href="#" class="utf_listing_item-container" data-marker-id="1">
        <div class="utf_listing_item"> <img src="images/hydraulic-pressing-bricks.webp" alt="">
        <div class="utf_listing_item_content"> 
        <h3>Vibro Press Block Brick Making Machine</h3>
        <span>Bidu Biotech</span>
        <span><i class="fa fa-map-marker"></i>Mohali, Punjab</span> 
        </div>
        </div>
        <div style="text-align: center;"><button class="button border contactsupplier" style="width: 100%;">Contact Supplier</button></div>
        </a> 
       </div>
      </div>
        <div class="clearfix"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="utf_pagination_container_part margin-top-20 margin-bottom-70">
              <nav class="pagination">
                <ul>
                  <li><a href="#"><i class="sl sl-icon-arrow-left"></i></a></li>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sidebar -->
      <div class="col-lg-4 col-md-4">
        <div class="sidebar">
          <div class="utf_box_widget margin-bottom-35">
            <h3><i class="sl sl-icon-direction"></i> Filters</h3>     
            <div class="row with-forms">
              <div class="col-md-12">
                <input type="text" placeholder="What are you looking for?" value=""/>
              </div>
            </div>            
            <div class="row with-forms">
              <div class="col-md-12">
                <div class="input-with-icon location">
                  <input type="text" placeholder="Search Location..." value=""/>
                  <a href="#"><i class="sl sl-icon-location"></i></a> </div>
              </div>
            </div>
          <button class="button fullwidth_block margin-top-5">Update</button>
          </div>
          <div class="utf_box_widget margin-top-35 margin-bottom-75">
            <h3><i class="sl sl-icon-folder-alt"></i> Categories</h3>
            <ul class="utf_listing_detail_sidebar">
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Plywoods</a></li>
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Laminate Sheets</a></li>
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Wood Boards</a></li>
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Wall Panels</a></li>
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Hardwood</a></li>
              <li><i class="fa fa-angle-double-right"></i> <a href="#">Particle Board</a></li>
            </ul>
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

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/listings_grid_with_sidebar.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:16:45 GMT -->
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