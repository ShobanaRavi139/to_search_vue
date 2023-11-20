<template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:39 GMT -->
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
<link rel="stylesheet" href="css/perfect-scrollbar.css">
<link rel="stylesheet" href="css/style.css" id="colors">
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&amp;display=swap&amp;subset=latin-ext,vietnamese" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>

<!-- Wrapper -->
<div id="main_wrapper"> 
  <header id="header_part" class="fixed fullwidth_block dashboard"> 
    <div id="header" class="not-sticky">
      <div class="container"> 
        <div class="utf_left_side"> 
          <div id="logo"> <a href="dashboard.html"><img src="images/tosearch_logo.png" alt=""></a> <a href="dashboard.html" class="dashboard-logo"><img src="images/tosearch_logo.png" alt=""></a> </div>
          <div class="mmenu-trigger">
			<button class="hamburger utfbutton_collapse" type="button">
				<span class="utf_inner_button_box">
					<span class="utf_inner_section"></span>
				</span>
			</button>
		  </div>
          <nav id="navigation" class="style_one">
            <ul id="responsive">
            <li class="example">
                <input type="text" class="search" placeholder="Enter product / service to search" name="search">
                <button type="submit" style="padding: 9px;"><i class="fa fa-search">&nbsp;Search</i></button>
            </li>            
            </ul>
          </nav>
          <div class="clearfix"></div>
        </div>
        <div class="utf_right_side"> 
          <div class="header_widget">
			<div class="dashboard_header_button_item">
				  <ul class="menuss" style="display: flex; margin-left: -268px;">
              <li class="menu_listss"><a  href="#"><i class="sl sl-icon-speech menu-list-iconss"></i><br>Lead Manager</a></li>
               <li class="menu_listss"><a :href="route('buy_leads')"><i class="sl sl-icon-graph menu-list-iconss"></i><br>BuyLeads</a></li>
               <li class="menu_listss"><a :href="route('manageproducts')"><i class="sl sl-icon-basket-loaded menu-list-iconss"></i><br>Products</a></li>
               <li class="menu_listss"><a  href="#"><i class="sl sl-icon-question menu-list-iconss"></i><br>Help</a></li>
            </ul>
			</div>
            <div class="utf_user_menu">
              <div class="utf_user_name"><span><img src="images/dashboard-avatar.jpg" alt=""></span>Hi, John!</div>
              <ul>
                <li><a :href="route('seller_dashboard')"><i class="sl sl-icon-layers"></i> Dashboard</a></li>
                <li><a :href="route('seller_my_profile')"><i class="sl sl-icon-user"></i> My Profile</a></li>
                <h5 style="margin-left: 10px;"><b>SELLER TOOLS</b></h5>
                <li><a href="#"><i class="fa fa-comments-o"></i>  Lead Manager</a></li>
                <li><a :href="route('buy_leads')"><i class="fa fa-area-chart"></i>BuyLeads</a></li>
                <li><a :href="route('manageproducts')"><i class="fa fa-shopping-cart"></i>Manage Products</a></li>
                <li><a href="#"><i class="fa fa-line-chart"></i>Performance Reports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="clearfix"></div>
  
  <!-- Dashboard -->
  <div id="dashboard"> 
    <a href="#" class="utf_dashboard_nav_responsive"><i class="fa fa-reorder"></i> Dashboard Sidebar Menu</a>
    <div class="utf_dashboard_navigation js-scrollbar">
      <div class="utf_dashboard_navigation_inner_block">
        <ul>
      <li><a :href="route('seller_dashboard')" class="text-center"><i class="sl sl-icon-layers"></i><br>Dashboard</a></li>       
		  <li><a href="#" class="text-center"><i class="sl sl-icon-diamond"></i><br>Paid Services</a></li>
      <li><a :href="route('seller_my_profile')" class="text-center"><i class="sl sl-icon-user"></i><br>My Profile</a></li>

      <li><a href="#" class="text-center"><i class="sl sl-icon-speech"></i><br>Lead Manager</a></li>

		<li><a :href="route('buy_leads')" class="text-center"><i class="sl sl-icon-graph"></i><br> BuyLeads</a></li>

		  <li><a :href="route('manageproducts')" class="text-center"><i class="sl sl-icon-basket-loaded"></i><br>Products</a></li>

		  <li><a :href="route('catalog_views')" class="text-center"><i class="sl sl-icon-list"></i><br> Catalog Views</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-cloud-upload"></i><br> Photos & Docs</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-bag"></i><br> Buyer Tools</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-settings"></i><br> Settings</a></li>
      <li><a href="#" class="text-center"><i class="sl sl-icon-power"></i><br>Logout</a></li>
        </ul>
      </div>
    </div>    
	<div class="utf_dashboard_content"> 
      <div id="titlebar" class="dashboard_gradient">
        <div class="row">
          <div class="col-md-12">
            <h2>Dashboard</h2>
            <nav id="breadcrumbs">
              <ul>
                <li><a href="index_1.html">Home</a></li>
                <li>Dashboard</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div class="card margin-bottom-30">
            <div class="card-body">
              <h3><b>Add New Products</b></h3>
            <p>Adding more products with photos will increase your visibility among buyers.</p>
            <a href="add_product.html" class="button border">Click here to add</a></div>
		        </div>
        </div>
      </div>
        <div class="row" style="margin-bottom: 25px;">
          <div class="col-lg-4 col-md-4">
            <div class="card">
            <div class="card-header" style="height: 76px;"><div class="stats_box_cover p-icon">
                </div><a class="text-center"><h1>5</h1><h4>MESSAGES</h4></a></div>
          <div class="card-body">
          <ul class="star_list"><li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">Rajesh R</p>
                <p class="region_detail">Kovai Engineering, Coimbatore</p>
                <p class="detail_text">You have sent an enquiry to this se..</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>20th Oct</p>
            </div></li>
            <li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">Jigar Patel</p>
                <p class="region_detail">Revomac Industries, Ahmedabad</p>
                <p class="detail_text">Hi, you visited our catalog Revomac..</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>20th Oct</p>
            </div>
            </li>
            <li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">Pramod K. Singh</p>
                <p class="region_detail">Anest Iwata Motherson Limited, Noida</p>
                <p class="detail_text">You have sent an enquiry to this se..</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>19th Oct</p>
            </div>
          </li>
        </ul>
            </div>
            <div class="card-footer text-center"><a href="#" class="btn btn-primaryss text-center" style="color: #007bff; font-size: 15px">View All</a></div>
        </div>
            
          </div>
          <div class="col-lg-4 col-md-4">
               <div class="card">
            <div class="card-header" style="height: 76px;"><div class="bl_box p-icon">
                    </div><a class="text-center"><h1>24</h1><h4>RELEVANT BUYLEADS</h4></a></div>
            <div class="card-body">
               <ul class="star_list"><li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">Copy Gold Paper 75 Gsm</p>
                <p class="region_detail">Coimbatore, India</p>
                <p class="detail_text">I am interested in buying Copy Gold Paper 75 GSM.</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>20th Oct</p>
            </div></li>
            <li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">A4 Size Paper</p>
                <p class="region_detail">Kottayam, India</p>
                <p class="detail_text"><strong>Quantity: </strong>1000 Box</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>20th Oct</p>
            </div>
            </li>
            <li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">A4 Size Copier Paper</p>
                <p class="region_detail">Alappuzha, India</p>
                <p class="detail_text">My Requirement is for A4 Size Copier Paper.</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>19th Oct</p>
            </div>
          </li>
        </ul>
            </div>
            <div class="card-footer text-center"><a href="#" class="btn btn-primaryss text-center" style="color: #007bff; font-size: 15px">View All</a></div>
        </div>
          </div>
          <div class="col-lg-4 col-md-4">
               <div class="card">
            <div class="card-header" style="height: 76px;"><div class="catalog_box  p-icon">
                </div><a class="text-center"><h1>3</h1><h4>CATALOG VIEWS</h4></a></div>
            <div class="card-body">
               <ul class="star_list"><li>
            <div class="stat_info">
              <a href="#">
                <p class="heading_read">Suresh </p>
                <p class="region_detail">Idukki, India</p>
                <p class="detail_text">viewed your catalog</p>
              </a>
            </div>
            <div class="stat_timestamp">
              <p>20th Oct</p>
            </div></li>
          <li class="no-info_last single-view" id="catalog_no_info">
          <div class="no_info">
            <div class="no_info_desc">
              <p>Improve your catalog visibility to get more Catalog Views</p>
              <a href="#" target="__blank">Learn More</a>
            </div>
          </div>
        </li></ul>
            </div>
            <div class="card-footer text-center"><a href="#" class="btn btn-primaryss text-center" style="color: #007bff; font-size: 15px">View All</a></div>
        </div>
          </div>
         </div>
      <div class="row">
      <div class="col-lg-12 col-md-12 mb-4">
      <div class="utf_dashboard_list_box table-responsive recent_booking">
      <h4>Recommended products for you to sell. Add to your catalog to get more enquiries and BuyLeads alerts.</h4>
      <div class="dashboard-list-box table-responsive invoices with-icons">
        <div class="Dash_m6">
          <ul class="SLC_dflx" style="row-gap: 30px">
            <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/jk-copier-paper-125x125.jpg"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>JK Copier Paper</span></a></div>
              </div></li>
              <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/jk-a4-paper-125x125.webp"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>JK A4 Paper</span></a></div>
              </div></li>
              <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/aa-a4-paper-125x125.png"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>AA A4 Size Paper</span></a></div>
              </div></li>
              <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/paper-one-a4-paper-125x125.webp"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>Paper One A4 Size Paper</span></a></div>
              </div></li>
              <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/kraft-paper-125x125.webp"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>Kraft Paper</span></a></div>
              </div></li>
              <li style="" class="Dash_PrdPrice_w1">
              <div class="Dash_PrdPrice_cont">
                <a class="Dash_PrdPrice_ImC">
                <img src="images/absorbent-cotton-125x125.webp"></a>
                <div class="Dash_PrdPrice_nfav"><a style="text-decoration: none" class="SLC_cp"><span>Absorbent Cotton</span></a></div>
              </div></li><li>
                <a href="#" class="button gray">Add to Catalog</a><br><br>
                <a href="#" class="button gray">View All</a><br>
              </li></ul></div>
       
      </div>
      </div>
    </div>
  </div>

      <div class="row"> 
        <div class="col-lg-6 col-md-12">
          <div class="utf_dashboard_list_box with-icons margin-top-20">
            <h4>Active Services</h4>
            <div class="dashboard-list-box table-responsive invoices with-icons">
        <table class="table table-hover">
        <thead>
          <tr>
          <th colspan="3" align="left">BuyLeads Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Available Leads Balance</td>
          <td>Not Available</td>
          <td><a>Subscribe Now</a></td>
          </tr>
        </tbody>
        </table>
        <table class="table table-hover">
        <thead>
          <tr>
          <th colspan="3" align="left">Additional Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Click to SMS</td>
          <td>Enabled</td>
          <td><a>Settings</a></td>
          </tr>
          <tr>
          <td>Tender Alerts</td>
          <td>Enabled</td>
          <td><a>Settings</a></td>
          </tr>
          <tr>
          <td>BuyLeads Alert</td>
          <td>Enabled</td>
          <td><a>Settings</a></td>
          </tr>
          <tr>
          <td>Enquiry Alert on SMS</td>
          <td>Enabled</td>
          <td><a>Settings</a></td>
          </tr>
        </tbody>
        </table>
      </div>
          </div>
        </div>
		<div class="col-lg-6 col-md-12">
          <div class="utf_dashboard_list_box invoices with-icons margin-top-20">
            <h4>Business Card</h4>
            <div id="front" class="card_tab-content card_current">
              <a href="#" class="no-card"><p>Add Business Card</p></a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="utf_dashboard_list_box invoices with-icons">
            <h4>Tell us what you need, and we'll help you get quotes</h4>
            <div id="front" class="card_tab-content card_current">
          <div id="utf_add_review" class="utf_add_review-boxss">
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
                  <input type="text" placeholder="Enter Product / Service name" value="">
                </div>
                <div class="col-md-12">
                  <label>Briefly describe your requirement</label>
                  <input type="text" placeholder="Additional details about your requirement..." value="">
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
        <div class="col-md-12">
          <div class="footer_copyright_part">Copyright © 2023 To Search All Rights Reserved.</div>
        </div>
      </div>
    </div>    
  </div>  
</div>
</body>

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:41 GMT -->
</html>

</template>

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
    // You can use jQuery here
    $(document).ready(function() {
        $('.utf_user_menu').on('click', function() {
            $(this).toggleClass('active');
        });
    });
  }
}
</script>
<style>
.container {
    max-width: none;
}
.header_widget{
    left: 200px;
}

</style>