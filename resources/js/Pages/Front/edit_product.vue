<template>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from ulisting.utouchdesign.com/ulisting_ltr/dashboard_add_listing.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Oct 2023 04:17:41 GMT -->
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
    
    <!-- Content -->
    <div class="utf_dashboard_content">       
      <div id="titlebar" class="dashboard_gradient">
        <div class="row">
          <div class="col-md-12">
            <h2>Edit Product</h2>
            <nav id="breadcrumbs">
              <ul>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="manageproducts.html">Products</a></li>
                <li>Edit Product</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div id="utf_add_listing_part">   
			
            <div class="add_utf_listing_section margin-top-45"> 
              <div class="utf_add_listing_part_headline_part">
                <h3><i class="sl sl-icon-tag"></i>Basic Details</h3>
              </div>              
              <div class="row with-forms">
                <div class="col-md-6">
                  <h5>Product/Service Name</h5>
                  <input type="text" class="search-field" name="listing_title" id="listing_title" placeholder="Product/Service Name" value="">
                </div>
				<div class="col-md-6">
                  <h5>Price</h5>                  
				  <input type="text" placeholder="Price" data-unit="$"> 
                </div>
              </div>              
              <div class="row with-forms">
                				  				 
				  <div class="col-md-12">
					<h5>Description</h5>
					<textarea name="summary" cols="40" rows="3" id="description" placeholder="Description..." spellcheck="true"></textarea>
				  </div>
              </div>
			   <div class="row with-forms">              
				  <div class="utf_submit_section col-md-4">
				    <h4>Add Photo</h4>
					<form action="https://ulisting.utouchdesign.com/ulisting_ltr/file-upload" class="dropzone"></form>
				  </div>			
              </div> 
            </div>
            
            <div class="add_utf_listing_section margin-top-45"> 
              <div class="utf_add_listing_part_headline_part">
                <h3><i class="sl sl-icon-map"></i> Specification/Additional Details</h3>
              </div>
              <div class="utf_submit_section"> 
                <div class="row with-forms"> 				
                  <div class="col-md-6">
                    <h5>GSM</h5>
                    	<input type="text" class="search-field" name="listing_title" id="listing_title" placeholder="GSM" value="">
                  </div>                  
                  <div class="col-md-6">
                    <h5>Packaging Size</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="Packaging Size" value="">
                  </div> 
                   <div class="col-md-6">
                    <h5>Brand</h5>
                    	<input type="text" class="search-field" name="listing_title" id="listing_title" placeholder="Brand" value="">
                  </div>                  
                  <div class="col-md-6">
                    <h5>Material</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="" value="">
                  </div> 

                  <div class="col-md-6">
                    <h5>Usage/Application</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="" value="">
                  </div>                   
                  <div class="col-md-6">
                    <h5>Roughness</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="" value="">
                  </div>                   
                  <div class="col-md-6">
                    <h5>Packaging Type</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="" value="">
                  </div>                   
                  <div class="col-md-6">
                    <h5>Country of Origin</h5>                    
					<input type="text" class="input-text" name="address" id="address" placeholder="" value="">
                  </div> 
                </div>
              </div>
            </div>
			
            <div class="add_utf_listing_section margin-top-45"> 
              <div class="utf_add_listing_part_headline_part">
                <h3><i class="sl sl-icon-list"></i>Additional Details</h3>
              </div>              
			  <div class="row with-forms">
				  <div class="col-md-6">
					<h5>Minimum Order Quantity</h5>
					<input type="text" placeholder="">
				  </div>	
				  <div class="col-md-6">
					<h5>Production Capacity</h5>
					<input type="text" placeholder="">
				  </div>
				  <div class="col-md-6">
					<h5>Product/Service Code</h5>
					<input type="text" placeholder="">
				  </div>
				  <div class="col-md-6">
					<h5>Delivery Time</h5>
					<input type="text" placeholder="">
				  </div>				  				 
				  <div class="col-md-12">
					<h5>Packaging Details</h5>
					<textarea name="summary" cols="40" rows="3" id="description" placeholder="Packaging Details..." spellcheck="true"></textarea>
				  </div>
			  </div>                
            </div>
                                  
            <a href="#" class="button preview">Save & Preview</a> </div>
        </div>
        <div class="col-md-12">
          <div class="footer_copyright_part">Copyright © 2022 All Rights Reserved.</div>
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