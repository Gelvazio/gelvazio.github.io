$(function(){"use strict";$(".nav a").on("click",function(){$(".navbar-toggle").click()}),$("#nav").localScroll(1e3),$(window).width()>760&&$("#social-network").parallax("100%",.5),$(".scrollto").click(function(e){e.preventDefault();var a=$(this).attr("href"),o=$(a).offset().top;$("html, body").animate({scrollTop:o-50},"slow")}),$("#slides").superslides({animation:"fade",play:5e3});var e=$("#slider-skills");e.owlCarousel({autoPlay:!0,items:5,itemsDesktop:[1e3,4],itemsDesktopSmall:[900,3],itemsTablet:[600,2],itemsMobile:[480,1]});var a=$(window).height();$(window).bind("resize",function(){a=$(window).height()});var o=$(".social-network").offset().top,t=$(".skills").offset().top,i=$(".experience-line").offset().top;$(window).scroll(function(){window.pageYOffset>a+3?($(".navbar-flat").addClass("navbar-fixed-top"),$("#about").addClass("fixed")):($(".navbar-flat").removeClass("navbar-fixed-top"),$("#about").removeClass("fixed")),window.pageYOffset>t-a+200&&$(".pie-graph").easyPieChart({easing:"easeInOut",barColor:"#F16272",trackColor:"#F7F6F6",scaleColor:!1,lineWidth:4,size:150,onStep:function(e,a,o){$(this.el).find(".percent").text(Math.round(o))}}),window.pageYOffset>i-a+200&&$(".experience-line li").addClass("fadeInUp"),window.pageYOffset>o-a+200&&$(".social-network li").addClass("fadeInUp")});var l=$(window),n=0,s=50,r=navigator.userAgent.indexOf("Chrome")>-1,f=navigator.userAgent.indexOf("Safari")>-1;f=!(r&&f),f||l.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var a=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,o=l.scrollTop(),t=o-parseInt(a*s);TweenMax.to(l,n,{scrollTo:{y:t,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})})});