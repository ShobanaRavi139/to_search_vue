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
      <div id="titlebar" class="dashboard_gradient">
        <div class="row">
          <div class="col-md-12">
            <h2>Profile</h2>
            <nav id="breadcrumbs">
              <ul>
                <li><a href="index_1.html">Home</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li>Profile</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col-md-12">
		  <div class="style-1 element_tab">
			<ul class="utf_tabs_nav">
			  <li class="active"><a href="#tab1b">Contact Details</a></li>
			  <li><a href="#tab2b">Business Profile</a></li>
			</ul>
			<div class="tab_container">
			  <div class="tab_content" id="tab1b">
			  <div class="col-lg-12 col-md-12">
          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Contact Information</h4>
            <div class="utf_dashboard_list_box-static"> 
              <div class="edit-profile-photo"> <img src="images/user-avatar.jpg" alt="">
                <div class="change-photo-btn">
                  <div class="photoUpload"> <span><i class="fa fa-upload"></i> Upload Photo</span>
                    <input type="file" class="upload" />
                  </div>
                </div>
              </div>
              <div class="my-profile">
			    <div class="row with-forms">
					<div class="col-md-4">
						<label>Contact Person Name</label>						
						<input type="text" class="input-text" placeholder="Alex Daniel" value="">
					</div>
					<div class="col-md-4">
						<label>Designation</label>						
						<input type="text" class="input-text" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label>Mobile Number</label>						
						<input type="text" class="input-text" placeholder="(123) 123-456" value="">
					</div>
					<div class="col-md-4">
						<label>Alternate Mobile Number</label>						
						<input type="text" class="input-text" placeholder="(123) 123-456" value="">
					</div>
					<div class="col-md-4">
						<label>Email</label>						
						<input type="text" class="input-text" placeholder="testss@example.com" value="">
					</div>
					<div class="col-md-4">
						<label>Alternate Email</label>						
						<input type="text" class="input-text" placeholder="test@example.com" value="">
					</div>
					<div class="col-md-4">
						<label>Landline Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Alternate Landline Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>
          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Additional Contact Details</h4>
            <div class="utf_dashboard_list_box-static"> 
          <div class="my-profile">
			    <div class="row with-forms">
					<div class="col-md-4">
						<label>Division</label>						
						<input type="text" class="input-text" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label>Contact Person Name</label>						
						<input type="text" class="input-text" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label>Mobile Number</label>						
						<input type="text" class="input-text" placeholder="(123) 123-456" value="">
					</div>
					<div class="col-md-4">
						<label>Country</label>						
						<input type="text" class="input-text" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label>Address</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>E-mail</label>						
						<input type="text" class="input-text" placeholder="testss@example.com" value="">
					</div>
					<div class="col-md-4">
						<label>Landline Number</label>						
						<input type="text" class="input-text" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label>Toll Free Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Fax Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>
        </div>
			  	
			  </div>
			  <div class="tab_content" id="tab2b">
			  	 <div class="col-lg-12 col-md-12">
          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Company Details</h4>
            <div class="utf_dashboard_list_box-static"> 
              <div class="my-profile">
			    <div class="row with-forms">
					<div class="col-md-4">
						<label>Company Name</label>						
						<input type="text" class="input-text" placeholder="ABC Company" value="">
					</div>
					<div class="col-md-4">
						<label>Year of Establishment</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>CEO Name</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Website URL</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Facebook</label>						
						<input type="text" class="input-text" placeholder="https://www.facebook.com" value="">
					</div>
					<div class="col-md-4">
						<label>Google</label>
						<input type="text" class="input-text" placeholder="https://plus.google.com" value="">						
					</div>
					<div class="col-md-4">
						<label>Instagram</label>
						<input type="text" class="input-text" placeholder="http://instagram.com" value="">						
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>
          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Address</h4>
            <div class="utf_dashboard_list_box-static"> 
              <div class="edit-profile-photo"> <img src="images/user-avatar.jpg" alt="">
                <div class="change-photo-btn">
                  <div class="photoUpload"> <span><i class="fa fa-upload"></i>Company Logo</span>
                    <input type="file" class="upload" />
                  </div>
                </div>
              </div>
              <div class="my-profile">
			    <div class="row with-forms">
					<div class="col-md-4">
						<label>PIN Code</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>City</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>State</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Country</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Address (Building No/floor)</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Address (Area/Street)</label>
						<input type="text" class="input-text" placeholder="--" value="">						
					</div>
					<div class="col-md-4">
						<label>Locality</label>
						<input type="text" class="input-text" placeholder="" value="">						
					</div>
					<div class="col-md-4">
						<label>Landmark</label>
						<input type="text" class="input-text" placeholder="" value="">						
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>

          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Bank Account Details</h4>
            <div class="utf_dashboard_list_box-static">
              <div class="my-profile">
			    <div class="row with-forms">
					<div class="col-md-4">
						<label>Account Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Re-enter Account Number</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>A/c Holder Name</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>IFSC Code</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Bank Name(As Per IFSC Code)</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>


          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i>Nature of Business</h4>
            <div class="utf_dashboard_list_box-static">
              <div class="my-profile">
			    <div class="row with-forms">
			    	<div class="col-md-4">
						<label>Primary Business Type</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Ownership Type</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Number Of Employees</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-4">
						<label>Annual Turnover</label>						
						<input type="text" class="input-text" placeholder="--" value="">
					</div>
					<div class="col-md-12">
						<h5>Secondary Business</h5>
					<div class="checkboxes in-row amenities_checkbox">
                <ul>
					<li>
						<input id="check-a" type="checkbox" name="check">
						<label for="check-a">Importer</label>
					</li>
					<li>
						<input id="check-b" type="checkbox" name="check">
						<label for="check-b">Exporter</label>
					</li>
					<li>
						<input id="check-c" type="checkbox" name="check">
						<label for="check-c">Retailer</label>
					</li>
					<li>
						<input id="check-a" type="checkbox" name="check">
						<label for="check-a">Buyer-Company</label>
					</li>
					<li>
						<input id="check-b" type="checkbox" name="check">
						<label for="check-b">Non Profit Organization</label>
					</li>
					<li>
						<input id="check-c" type="checkbox" name="check">
						<label for="check-c">Trader</label>
					</li>
					<li>
						<input id="check-a" type="checkbox" name="check">
						<label for="check-a">Distributor</label>
					</li>
					<li>
						<input id="check-b" type="checkbox" name="check">
						<label for="check-b">Service Provider</label>
					</li>
					<li>
						<input id="check-c" type="checkbox" name="check">
						<label for="check-c">Buying House</label>
					</li>
					<li>
						<input id="check-a" type="checkbox" name="check">
						<label for="check-a">Association</label>
					</li>
					<li>
						<input id="check-b" type="checkbox" name="check">
						<label for="check-b">Supplier</label>
					</li>
					<li>
						<input id="check-c" type="checkbox" name="check">
						<label for="check-c">Wholesaler</label>
					</li>
					<li>
						<input id="check-b" type="checkbox" name="check">
						<label for="check-b">Manufacturer</label>
					</li>
					<li>
						<input id="check-c" type="checkbox" name="check">
						<label for="check-c">Buyer-Individual</label>
					</li>

				</ul>				
              </div> 
					</div>
				  </div>	
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>


            <div class="add_utf_listing_section margin-top-45"> 
              <div class="utf_add_listing_part_headline_part">
                <h3><i class="sl sl-icon-picture"></i> Business Card</h3>
              </div>			  
              <div class="row with-forms">              
				  <div class="utf_submit_section col-md-6">
				    <h4>Front View</h4>
					<form action="https://ulisting.utouchdesign.com/ulisting_ltr/file-upload" class="dropzone">
						<div class="dz-default dz-message"><span><i class="sl sl-icon-cloud-upload"></i> Drag &amp; Drop Files Here</span></div>
					</form>
				  </div>
				  <div class="utf_submit_section col-md-6">
					<h4>Back View</h4>
					<form action="https://ulisting.utouchdesign.com/ulisting_ltr/file-upload" class="dropzone">
						<div class="dz-default dz-message"><span><i class="sl sl-icon-cloud-upload"></i> Drag &amp; Drop Files Here</span></div>
					</form>
				  </div>
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