"objectFit"in document.documentElement.style==!1&&document.addEventListener("DOMContentLoaded",function(){Array.prototype.forEach.call(document.querySelectorAll("img[data-object-fit]"),function(t){(t.runtimeStyle||t.style).background='url("'+t.src+'") no-repeat 50%/'+(t.currentStyle?t.currentStyle["object-fit"]:t.getAttribute("data-object-fit")),t.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t.width+"' height='"+t.height+"'%3E%3C/svg%3E"})}),$(document).ready(function(){$(".maincontent .nextt").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("body,html").animate({scrollTop:n},1500)})}),$(document).ready(function(){var t=$("#lightSlider").lightSlider({auto:!0,pauseOnHover:!0,pause:4e3,loop:!0,item:1,pager:!0,controls:!1});$("#goToPrevSlide").click(function(){t.goToPrevSlide()}),$("#goToNextSlide").click(function(){t.goToNextSlide()})}),$(document).ready(function(){var t=$("#lightSlider2").lightSlider({loop:!0,item:1,pager:!1,controls:!1});$("#goToPrevSlide2").click(function(){t.goToPrevSlide()}),$("#goToNextSlide2").click(function(){t.goToNextSlide()})}),$(document).ready(function(){var t=!1;$(".menu-content .mobile-menu-content .menu-icon").click(function(){t?($(".menu-content .mobile-menu-content .m_menu-content").fadeOut(),$(this).removeClass("fa-times"),$(this).addClass("fa-bars"),t=!1):($(".menu-content .mobile-menu-content .m_menu-content").fadeIn(),$(this).removeClass("fa-bars"),$(this).addClass("fa-times"),t=!0)})});