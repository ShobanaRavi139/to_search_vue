<template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/dashboard_my_profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:43 GMT -->
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
      <div class="row">
      <div class="col-md-12">
		  <div class="style-1 element_tab">
			<ul class="utf_tabs_nav">
			  <li class="active"><a href="#tab1b">Your Catalog Views</a></li>
			  <li><a href="#tab2b">My Activities</a></li>
			</ul>
			<div class="tab_container">
			  <div class="tab_content" id="tab1b">
			  	  <div class="col-lg-12 col-md-12">
			  	<div class="listing_filter_block">
			  	 <p style="margin-left: 12px;">These buyers visited your catalog/product pages. Contact them to get more business.</p>
          <div class="col-md-10 col-xs-10">
          	 <div class="sort-by" style="float: left;">
              <div class="utf_sort_by_select_item sort_by_margin">
                <select data-placeholder="Sort by Listing" class="utf_chosen_select_single" style="display: none;">
                  <option>Filter by Location</option>
				  <option>India</option>
				  <option>Tamilnadu</option>
                </select>
              </div>
            </div>
          	 <div class="sort-by" style="float: left;">
              <div class="utf_sort_by_select_item sort_by_margin">
                <select data-placeholder="Sort by Listing" class="utf_chosen_select_single" style="display: none;">
                  <option>Filter By Time</option>
				  <option>Today</option>
				  <option>Yesterday</option>
				  <option>This Week</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-xs-2">
            <div class="utf_layout_nav"></div>
          </div>
        </div>
        </div>

         <div class="col-lg-12 col-md-12">
        	<div class="utf_listing_titlebar">
          <div class="utf_listing_titlebar_title">
          	<div class="row">
          		<div class="col-md-3">
           <h3>Suresh</h3>
            <span><i class="fa fa-building-o" style="color: #da1a8f !important"></i>&nbsp;		Success Vision</span><br>
            <span> <a href="#utf_listing_location" class="listing-address"> <i class="sl sl-icon-location" style="color: #da1a8f !important"></i>&nbsp;Idukki, Kerala</a> </span><br><span class="date"><i class="fa fa-clock-o" style="color: #da1a8f !important"></i>&nbsp;11 Oct 2023 at 05:32 PM</span><br>
             <p>Pages Viewed<br><b>Products And Services</b></p>
            <p style="margin-top: -12px;">Catalog Page<br><b>2 Views</b></p>
          </div>
          <div class="col-md-4">
          	<div class="dtlsec">
           <table style="width: auto !important; margin-top: 12px;"><tbody><tr><th>Buyer Details</th></tr><tr><td class="tdwdt">Member since</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>6 Years</b></span></div></td></tr><tr><td class="tdwdt">Business Type</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>Wholesaler</b></span></div></td></tr><tr><td class="tdwdt">Requirements till now</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>	52</b></span></div></td></tr><tr><td class="tdwdt">Products of Interest</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>	Part Load Service, Herbal Raw Material+</b></span></div></td></tr><tr><td class="tdwdt">Recently viewed products</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>Automotive Spare Parts, Cotton Bath Towel+</b></span></div></td></tr><tr><td class="tdwdt">Calls / Replies</td><td class="tdwdt1 color6"><div class="dsf pr"><span class="datatooltip"><b>36 / 2</b></span></div></td></tr></tbody></table>
           <a href="#" class="button border">View Contact</a>
           <a href="#" class="button border">View Email Id</a>
         </div>
          	
          </div>
          <div class="col-md-5">
          	<section id="contact" style="background-color: #fdfdfd;">
          <h4>Send an instant message</h4>          
          <form id="contactform">
            <div class="row">
			  <div class="col-md-12">
				  <textarea name="comments" cols="40" rows="2" id="comments" placeholder="Your Message" required=""></textarea>
			  </div>
            </div>            
            <input type="submit" class="submit button" id="submit" value="Send Message">
          </form>
        </section>
          </div>
        </div>	
          </div>
        </div>
      </div>
        	

			  	
			  </div>
			  <div class="tab_content" id="tab2b">
			  	<div class="col-lg-12 col-md-12">
          <div class="utf_dashboard_list_box with-icons margin-top-20">
            <h4>Today</h4>
            <div class="dashboard-list-box table-responsive invoices with-icons">
        <table class="table table-hover">
        <tbody>
          <tr>
          <td>Today 03:20 pm</td>
          <td>Viewed BusinessFeed Section<br><a href="#" style="color: #004A95!important;cursor: pointer;">View Again</a></td>
          </tr>
        </tbody>
        </table>
        <table class="table table-hover">
        <tbody>
          <tr>
          <td>Today 03:20 pm</td>
          <td>Viewed BusinessFeed Section<br><a href="#" style="color: #004A95!important;cursor: pointer;">View Again</a></td>
          </tr>
          <tr>
          <td>Today 03:40 pm</td>
          <td>Viewed BusinessFeed Section<br><a href="#" style="color: #004A95!important;cursor: pointer;">View Again</a></td>
          </tr>
          <tr>
          <td>Today 03:50 pm</td>
          <td>Viewed BusinessFeed Section<br><a href="#" style="color: #004A95!important;cursor: pointer;">View Again</a></td>
          </tr>
          <tr>
          <td>Today 03:34 pm</td>
          <td>Viewed BusinessFeed Section<br><a href="#" style="color: #004A95!important;cursor: pointer;">View Again</a></td>
          </tr>
        </tbody>
        </table>
      </div>
          </div>
        </div>

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
    try {
	var jscr1 = $('.js-scrollbar');
	if (jscr1[0]) {
		const ps1 = new PerfectScrollbar('.js-scrollbar');

	}
    } catch (error) {
        console.log(error);
    }
    });
  }
}
</script>