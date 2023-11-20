 <template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/index_6.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:16:36 GMT -->
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
                <li><a  :href="route('home')"><i class="sl sl-icon-power"></i>Sign Out</a></li>
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
             <a :href="route('seller_dashboard')" class="button border with-icon"> Validate</a>
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

  <div class="search_container_block home_main_search_part main_search_block search_container_classic_block"  style="background-image: url('images/headerbg.jpg');">
    <div class="main_inner_search_block">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Find & Explore What You Need</h2>
            <!-- <h4>Find great places to stay, eat, shop, or visit the city</h4> -->
            <div class="main_input_search_part">
              <div class="main_input_search_part_item">
                <input type="text" placeholder="What are you looking for?" value=""/>
              </div>
              <div class="main_input_search_part_item location">
                <input type="text" placeholder="Search Location..." value=""/>
                <a href="#"><i class="sl sl-icon-location"></i></a> 
			  </div>
              <div class="main_input_search_part_item intro-search-field">
                <select data-placeholder="All Categories" class="selectpicker default" title="All Categories" data-live-search="true" data-selected-text-format="count" data-size="5">
                  <option>Food & Restaurants </option>
                  <option>Shop & Education</option>
                  <option>Education</option>
                  <option>Business</option>
                  <option>Events</option>
                </select>
              </div>
              <button class="button" onclick="window.location.">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
   <div class="clearfix"></div>
 
  
    <div class="container">
  <div class="row">
      <div class="col-md-12">
        <h3 class="headline_part centered margin-top-45"> Most Popular Categories</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container_categories_box margin-top-5 margin-bottom-30"> 
          <a href="#" class="utf_category_small_box_partss"> <i class="im im-icon-Building" aria-hidden="true"></i>
      <h4>Building & Construction</h4>
          </a> 
          <a href="#" class="utf_category_small_box_partss"> <i class="im im-icon-Drill" aria-hidden="true"></i>
      <h4>Electronics & Electrical</h4>
          </a> 
          <a href="#" class="utf_category_small_box_partss"><i class="im im-icon-DrugsMedicine" aria-hidden="true"></i>
      <h4>Drugs & Pharma</h4>
          </a> 
          <a href="#" class="utf_category_small_box_partss"> <i class="im im-icon-Industrial" aria-hidden="true"></i>
      <h4>Industrial Machinery</h4>
          </a> 
          <a href="#" class="utf_category_small_box_partss"> <i class="im im-icon-Hotel" aria-hidden="true"></i>
      <h4>Industrial Supplies</h4>
          </a> 
          <a href="listings_list_with_sidebar.html" class="utf_category_small_box_partss"> <i class="im im-icon-Cocktail" aria-hidden="true"></i>
      <h4>Food & Agriculture</h4>
          </a>
          <a href="listings_list_with_sidebar.html" class="utf_category_small_box_partss"> <i class="fa fa-bed" aria-hidden="true"></i>
      <h4>Furniture & Supplies</h4>
          </a>
          <a href="listings_list_with_sidebar.html" class="utf_category_small_box_partss"> <i class="fa fa-book" aria-hidden="true"></i>
      <h4>Books & Stationery</h4>
          </a>  
          <a href="listings_list_with_sidebar.html" class="utf_category_small_box_partss"> <i class="fa fa-tv" aria-hidden="true"></i>
      <h4>Computer & IT Solutions</h4>
          </a>
          <a href="listings_list_with_sidebar.html" class="utf_category_small_box_partss"> <i class="fa fa-leaf" aria-hidden="true"></i>
      <h4>Herbal & Ayurvedic Product</h4>
          </a>   
    </div>
    <div class="col-md-12 centered_content"> <a href="#" class="button border margin-top-20">View More</a> </div>
      </div>
    </div>
  </div>

  <section class="fullwidth_block padding-top-75 padding-bottom-75" data-background-color="#ffffff">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline_part"> Building Construction Material & Equipment</h3>
        </div>
      </div>
      <div class="row">
          <div class="col-md-6 col-lg-12">
            <div class="utf_listing_item-container list-layout" style="border: 0px !important;"> <a :href="route('listingscategories')"  class="utf_listing_item" style="height: 575px !important" >
              <div class="utf_listing_item-image"> 
          <img src="images/building-construction.jpg" alt=""> 
          <div class="utf_listing_prige_block utf_half_list">
            <ul>
              <li>Prefabricated Houses</li>
              <li>Scaffolding Planks & Plates</li>
              <li>Construction Machines</li>
              <li>Crushing Machines & Plants</li>
            </ul>
            <button :href="route('listingscategories')"  class="button border with-icon" style="margin-left: 15px;margin-top: 20px;">View All</button>
          </div>
        </div>
              <div class="utf_listing_item_content">
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/brick-making-machines.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Brick Making Machines</b></h5>
        <ul>
          <li>Fly Ash Brick Making Machine</li>
          <li>Clay Brick Making Machine</li>
          <li>Cement Brick Making Machine</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/passenger-lifts.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Passenger Lifts</b></h5>
        <ul>
          <li>Residential Elevator</li>
          <li>Kone Passenger lift</li>
          <li>Stair Lift</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/tmt-bars.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>TMT Bars</b></h5>
        <ul>
          <li>TMT Steel Bars</li>
          <li>TATA TMT Bars</li>
          <li>Kamdhenu TMT Bars</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/plywoods.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Plywoods</b></h5>
        <ul>
          <li>Shuttering Plywood</li>
          <li>Laminated Plywood</li>
          <li>Waterproof Plywood</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
        <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/hydraulic-excavator.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Excavator</b></h5>
        <ul>
          <li>Hitachi Excavator</li>
          <li>Hyundai Excavator</li>
          <li>Komatsu Excavator</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
        <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/emulsion-paint.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Emulsion Paints</b></h5>
        <ul>
          <li>Asian Emulsion Paints</li>
          <li>Berger Emulsion Paints</li>
          <li>Nerolac Emulsion Paints</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/emulsion-paint.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Wooden Door</b></h5>
        <ul>
          <li>Designer Wooden Door</li>
          <li>Plywood Door</li>
          <li>Wooden Flush Doors</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/pvc-pipes.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>PVC Pipes</b></h5>
        <ul>
          <li>Finolex Pipes</li>
          <li>Rigid PVC Pipes</li>
          <li>Flexible PVC Pipes</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/building-brick.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Building Brick</b></h5>
        <ul>
          <li>Red Brick</li>
          <li>Fly Ash Bricks</li>
          <li>Cement Brick</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
              </div>
              </a> 
      </div>
          </div>
        
        </div>
    </div>
  </section>

  <section class="fullwidth_block padding-top-15 padding-bottom-75" data-background-color="#ffffff">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline_part">Pharmaceutical Drug, Medicine, Medical Care & Consultation</h3>
        </div>
      </div>
      <div class="row">
          <div class="col-md-6 col-lg-12">
            <div class="utf_listing_item-container list-layout" style="border: 0px !important;"> <a :href="route('listingscategories')" class="utf_listing_item" style="height: 575px !important" >
              <div class="utf_listing_item-image"> 
          <img src="images/electronics-electrical-goods.jpg" alt=""> 
          <div class="utf_listing_prige_block utf_half_list">
            <ul>
              <li>Pharma Raw Material</li>
              <li>Pharmaceutical Chemical</li>
              <li>Clinical Trial Services</li>
              <li>x-ray-services</li>
            </ul>
            <button :href="route('listingscategories')"  class="button border with-icon" style="margin-left: 15px;margin-top: 20px;">View All</button>
          </div>
        </div>
              <div class="utf_listing_item_content">
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/pharmaceutical-drug.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Pharmaceutical Drug</b></h5>
        <ul>
          <li>Antiparasitic Drug</li>
          <li>Antibiotic Tablets, Capsule & Syrup</li>
          <li>Antifungal Injection, Tablet & Syrup</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/nutritional-supplements.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Nutraceuticals</b></h5>
        <ul>
          <li>Vitamin Tablets & Capsules</li>
          <li>Weight Loss Supplement</li>
          <li>Dietary Supplements</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/thinq-mass-gainer.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Fitness Supplements</b></h5>
        <ul>
          <li>Weight Gain Nutrition</li>
          <li>Weight Gain Capsule</li>
          <li>Pre workout Supplements</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/multidisciplinary-care.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Medical Treatment Services</b></h5>
        <ul>
          <li>Dental Treatment Services</li>
          <li>Medical Surgery Services</li>
          <li>Eye Treatment</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
        <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/med.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Medical Test Services</b></h5>
        <ul>
          <li>CT Scan Services</li>
          <li>Ultrasound Services</li>
          <li>ECHO Cardiography</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
        <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/medi.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>PCD Pharma Franchise</b></h5>
        <ul>
          <li>Pharma Franchise</li>
          <li>Allopathic PCD Pharma Franchise</li>
          <li>Veterinary PCD Pharma Franchise</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/cefpodoxime.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Wooden Door</b></h5>
        <ul>
          <li>Designer Wooden Door</li>
          <li>Plywood Door</li>
          <li>Wooden Flush Doors</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
       <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
     <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/allopathic-pcd-pharma.jpg" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>PVC Pipes</b></h5>
        <ul>
          <li>Finolex Pipes</li>
          <li>Rigid PVC Pipes</li>
          <li>Flexible PVC Pipes</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-2 col-lg-4">
      <div class="card mb-3" style="max-width: 540px; border: 1px solid rgba(0, 0, 0, 0.08);margin-bottom: 15px;margin-right: -15px;height: 181px;">
  <div class="row">
    <div class="col-md-4" style="padding-right: 0px!important;">
      <img src="images/neonatal-portable.webp" class="" alt="..." style="margin-top: 30px;margin-left: 10px;width: 75px;">
    </div>
    <div class="col-md-8">
      <div class="card-body cat">
        <h5 class="card-title"><b>Medical Imaging Machine</b></h5>
        <ul>
          <li>X Ray Machine</li>
          <li>Ultrasound Machines</li>
          <li>ECG Machine</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
              </div>
              </a> 
      </div>
          </div>
        
        </div>
    </div>
  </section>

<section class="fullwidth_block margin-bottom-0 padding-top-0 padding-bottom-50" data-background-color="linear-gradient(to bottom, #f9f9f9 0%, rgba(255, 255, 255, 1))">
  <div class="container">
      <div class="row">
        <div class="col-md-12">
        <h3 class="headline_part centered margin-bottom-35 margin-top-70">Explore related products from Premium Brands</h3>
      </div>
      </div>
    <div class="row">
      <div class="col-md-12">
        <div class="companie-logo-slick-carousel utf_dots_nav">
          <div class="item">
            <img src="images/logoband1.webp" alt="">
          </div>
          <div class="item">
            <img src="images/asian-paints.png" alt="">
          </div>
          <div class="item">
            <img src="images/band22.webp" alt="">
          </div>
          <div class="item">
            <img src="images/band23.webp" alt="">
          </div>
          <div class="item">
            <img src="images/schneider-lio-life.webp" alt="">
          </div>    
          <div class="item">
            <img src="images/logoband25.webp" alt="">
          </div>  
          <div class="item">
            <img src="images/asian-paints.png" alt="">
          </div>          
        </div>
      </div>
    </div>
  </div>
  </section>
   <div class="container">
  <div class="row">
      <div class="col-md-12">
        <h3 class="headline_part centered margin-top-45">Trusted by To Search</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container_categories_box margin-top-5 margin-bottom-30"> 
          <a href="#" class="utf_category_small_box_part">
             <img src="images/logo121.jpg" alt="">
          </a> 
          <a href="#" class="utf_category_small_box_part">
             <img src="images/logo122.jpg" alt="">
          </a> 
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo123.jpg" alt="">
          </a> 
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo124.jpg" alt="">
          </a> 
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo125.jpg" alt="">
          </a> 
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo126.jpg" alt="">
          </a>
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo127.jpg" alt="">
          </a>
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo128.jpg" alt="">
          </a>  
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo129.jpg" alt="">
          </a>
          <a href="#" class="utf_category_small_box_part">
            <img src="images/logo1210.jpg" alt="">
          </a>   
    </div>
    <div class="col-md-12 centered_content"> <a href="#" class="button border margin-top-20">View More</a> </div>
      </div>
    </div>
  </div>
    <section class="fullwidth_block padding-bottom-45">
	  <div class="container">
		<div class="row">
		  <div class="col-md-8 col-md-offset-2">
			<h2 class="headline_part centered margin-top-80">More for you</h2>
		  </div>
		</div>
		<div class="row container_icon"> 
		  <div class="col-md-6 col-sm-6 col-xs-12">
			<div class="box_icon_two box_icon_with_line"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
			  <h3>Connect with verified sellers</h3>
			  <p>Tell us your requirement & let our experts find verified sellers for you.</p>
			   <a class="button border" href="#">Get verified sellers</a> 
			</div>
		  </div>
		   <div class="col-md-6 col-sm-6 col-xs-12">
			<div class="box_icon_two box_icon_with_line">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/></svg>
			  <h3>Sell on TO Search for free</h3>
			  <p>Reach out to more than 4 crore buyers. Sell with us.</p>
			   <a class="button border" href="#">Start Selling</a> 
			</div>
		  </div>
		</div>
	  </div>
  </section>
<section class="fullwidth_block padding-bottom-15">
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-8">
  <div id="utf_add_review" class="utf_add_review-box">
          <h3 class="utf_listing_headline_part margin-bottom-20">Tell us what you need, and we'll help you get quotes</h3>
          <span class="utf_leave_rating_title"></span>
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="clearfix"></div>
              <div class="clearfix"></div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
            </div>
          </div>
          <form id="utf_add_comment" class="utf_add_comment">
            <fieldset>
              <div class="row">
                <div class="col-md-12">
                  <label>I want quotes for</label>
                  <input type="text" placeholder="Enter Product / Service name" value=""/>
                </div>
                <div class="col-md-12">
                  <label>Briefly describe your requirement</label>
                  <input type="text" placeholder="Additional details about your requirement..." value=""/>
                </div>
              </div>
            </fieldset>
            <button class="button">Submit Requirement</button>
            <div class="clearfix"></div>
          </form>
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
            <li><a :href="route('termsandcondition')">Terms and Condition</a></li>
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

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/index_6.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:16:36 GMT -->
</html>
</template>

<script>
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import 'magnific-popup';

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
    // You can use jQuery here
    $(document).ready(function() {

    $('.companie-logo-slick-carousel').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, 
      {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
      {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        var $tabsNav = $('.utf_tabs_nav'),
            $tabsNavLis = $tabsNav.children('li');
        $tabsNav.each(function() {
            var $this = $(this);
            $this.next().children('.tab_content').stop(true, true).hide().first().show();
            $this.children('li').first().addClass('active').stop(true, true).show();
        });
        $tabsNavLis.on('click', function(e) {
            var $this = $(this);
            $this.siblings().removeClass('active').end().addClass('active');
            $this.parent().next().children('.tab_content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
            e.preventDefault();
        });
        var hash = window.location.hash;
        var anchor = $('.utf_tabs_nav a[href="' + hash + '"]');
        if (anchor.length === 0) {
            $(".utf_tabs_nav li:first").addClass("active").show();
            $(".tab_content:first").show();
        } else {
            anchor.parent('li').click();
        }
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    });
  }
}
</script>
<style>.box_icon_two svg{fill:#ff2222}</style>