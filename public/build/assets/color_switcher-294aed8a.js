jQuery(document).ready(function(e){e("#color_switcher_preview .stylesheet").click(function(){return e("#colors").attr("href","css/colors_version/style.css"),!1}),e("#color_switcher_preview .stylesheet_1").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_1.css"),!1}),e("#color_switcher_preview .stylesheet_2").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_2.css"),!1}),e("#color_switcher_preview .stylesheet_3").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_3.css"),!1}),e("#color_switcher_preview .stylesheet_4").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_4.css"),!1}),e("#color_switcher_preview .stylesheet_5").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_5.css"),!1}),e("#color_switcher_preview .stylesheet_6").click(function(){return e("#colors").attr("href","css/colors_version/stylesheet_6.css"),!1}),e("#color_switcher_preview h2 a").click(function(s){s.preventDefault();var r=e("#color_switcher_preview");console.log(r.css("right")),r.css("right")==="-210px"?e("#color_switcher_preview").animate({right:"0px"}):e("#color_switcher_preview").animate({right:"-210px"})}),e(".colors li a").click(function(s){s.preventDefault(),e(this).parent().parent().find("a").removeClass("active"),e(this).addClass("active")}),e("#reset a").click(function(s){s.preventDefault(),e(".colors li a").removeClass("active"),e("#colors").attr("href","css/colors/style.css"),e(window).resize()})});