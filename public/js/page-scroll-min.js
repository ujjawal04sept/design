(function(b){b.fn.fullpage=function(c){function x(a){if(c.autoScrolling){a=window.event||a;a=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail));var f;f=b(".section.active");if(!h)if(f=f.find(".slides").length?f.find(".slide.active").find(".scrollable"):f.find(".scrollable"),0>a)if(0<f.length)if(r("bottom",f))b.fn.fullpage.moveSlideDown();else return!0;else b.fn.fullpage.moveSlideDown();else if(0<f.length)if(r("top",f))b.fn.fullpage.moveSlideUp();else return!0;else b.fn.fullpage.moveSlideUp();return!1}}
function p(a,f){var d={},e;e=a.position();var y=null!==e?e.top:null,l=E(a),k=a.data("anchor"),g=a.index(".section"),m=b(".section.active").index(".section")+1;a.addClass("active").siblings().removeClass("active");h=!0;b.isFunction(f)||(location.hash="undefined"!==typeof k?k:"");c.autoScrolling?(d.top=-y,e="#superContainer"):(d.scrollTop=y,e="html, body");c.css3&&c.autoScrolling?(b.isFunction(c.onLeave)&&c.onLeave.call(this,m,l),z("translate3d(0px, -"+y+"px, 0px)",!0),setTimeout(function(){b.isFunction(c.afterLoad)&&
c.afterLoad.call(this,k,g+1);setTimeout(function(){h=!1;b.isFunction(f)&&f.call(this)},F)},c.scrollingSpeed)):(b.isFunction(c.onLeave)&&c.onLeave.call(this,m,l),b(e).animate(d,c.scrollingSpeed,c.easing,function(){b.isFunction(c.afterLoad)&&c.afterLoad.call(this,k,g+1);setTimeout(function(){h=!1;b.isFunction(f)&&f.call(this)},F)}));s=k;c.autoScrolling&&(G(k),H(k,g))}function t(a,f){var d=f.position(),e=a.find(".slidesContainer").parent(),g=f.index(),l=a.closest(".section"),k=l.index(),h=l.data("anchor"),
m=f.data("anchor");"undefined"===typeof m&&(m=g);l.hasClass("active")&&(c.loopHorizontal||l.find(".controlArrow.prev").toggle(0!=g),g?(location.hash=location.hash.split("/")[0]+"/"+m,c.loopHorizontal||l.find(".controlArrow.next").toggle(!f.is(":last-child"))):location.hash=location.hash.split("/")[0]);c.css3?(d="translate3d(-"+d.left+"px, 0px, 0px)",a.find(".slidesContainer").addClass("easing").css({"-webkit-transform":d,"-moz-transform":d,"-ms-transform":d,transform:d}),setTimeout(function(){b.isFunction(c.afterSlideLoad)&&
c.afterSlideLoad.call(this,h,k+1,m,g);q=!1},c.scrollingSpeed)):e.animate({scrollLeft:d.left},c.scrollingSpeed,function(){b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,h,k+1,m,g);q=!1})}function I(){windowsWidtdh=b(window).width();g=b(window).height();c.resize&&O(g,windowsWidtdh);b(".section").each(function(){parseInt(b(this).css("padding-bottom"));parseInt(b(this).css("padding-top"));if(c.scrollOverflow){var a=b(this).find(".slide");a.length?a.each(function(){u(b(this))}):u(b(this))}c.verticalCentered&&
b(this).find(".tableCell").css("height",g+"px");b(this).css("height",g+"px");a=b(this).find(".slides");a.length&&t(a,a.find(".slide.active"))});b(".section.active").position();var a=b(".section.active");a.index(".section")&&p(a)}function O(a,c){var d=825,e=a;825>a||900>c?(900>c&&(e=c,d=900),d=(100*e/d).toFixed(2),b("body").css("font-size",d+"%")):b("body").css("font-size","100%")}function H(a,f){c.navigation&&(b("#fullPage-nav").find(".active").removeClass("active"),a?b("#fullPage-nav").find('a[href="#'+
a+'"]').addClass("active"):b("#fullPage-nav").find("li").eq(f).find("a").addClass("active"))}function G(a){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"))}function r(a,b){if("top"===a)return!b.scrollTop();if("bottom"===a)return b.scrollTop()+b.innerHeight()>=b[0].scrollHeight}function E(a){var c=b(".section.active").index(".section");a=a.index(".section");return c>a?"up":"down"}function u(a){a.css("overflow","hidden");var b=
a.closest(".section"),d=a.find(".scrollable");(d.length?a.find(".scrollable").get(0).scrollHeight-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top")):a.get(0).scrollHeight-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top")))>g?(b=g-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top")),d.length?d.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".tableCell").wrapInner('<div class="scrollable" />'):a.wrapInner('<div class="scrollable" />'),
a.find(".scrollable").slimScroll({height:b+"px",size:"10px",alwaysVisible:!0}))):(a.find(".scrollable").children().first().unwrap().unwrap(),a.find(".slimScrollBar").remove(),a.find(".slimScrollRail").remove());a.css("overflow","")}function J(a){a.addClass("table").wrapInner('<div class="tableCell" style="height:'+g+'px;" />')}function z(a,c){b("#superContainer").toggleClass("easing",c);b("#superContainer").css({"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a})}function K(a,
c){var d=b('[data-anchor="'+a+'"]');a!==s?p(d,function(){L(d,c)}):L(d,c)}function L(a,b){if("undefined"!=typeof b){var c=a.find(".slides"),e=c.find('[data-anchor="'+b+'"]');e.length||(e=c.find(".slide").eq(b));c.find(".slide.active").removeClass("active");t(c,e);e.addClass("active")}}function P(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,
null);for(var e in c)void 0!==a.style[e]&&(a.style[e]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[e]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}c=b.extend({verticalCentered:!0,resize:!0,slidesColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,
css3:!1,paddingTop:null,paddingBottom:null,fixedElements:null,afterLoad:null,onLeave:null,afterRender:null,afterSlideLoad:null},c);var F=700;b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".section.active");c.autoScrolling?(b("html, body").css({overflow:"hidden",height:"100%"}),a.length&&(c.css3?(a="translate3d(0px, -"+a.position().top+"px, 0px)",z(a,!1)):b("#superContainer").css("top","-"+a.position().top+"px"))):(b("html, body").css({overflow:"auto",height:"auto"}),c.css3?z("translate3d(0px, 0px, 0px)",
!1):b("#superContainer").css("top","0px"),b("html, body").scrollTop(a.position().top))};var q=!1,A=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),g=b(window).height(),h=!1,s;document.addEventListener?(document.addEventListener("mousewheel",x,!1),document.addEventListener("DOMMouseScroll",x,!1)):document.attachEvent("onmousewheel",x);c.css3&&(c.css3=P());b("body").wrapInner('<div id="superContainer" />');if(c.navigation){b("body").append('<div id="fullPage-nav"><ul></ul></div>');
var n=b("#fullPage-nav");n.css("color",c.navigationColor);"right"===c.navigationPosition?n.css("right","17px"):n.css("left","17px")}b(".section").each(function(a){var f=b(this).find(".slide"),d=f.length;a||b(this).addClass("active");b(this).css("height",g+"px");c.paddingTop&&c.paddingBottom&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.slidesColor[a]&&b(this).css("background-color",c.slidesColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",
c.anchors[a]);if(c.navigation){var e="";c.anchors.length&&(e=c.anchors[a]);a=c.navigationTooltips[a];"undefined"===typeof a&&(a="");n.find("ul").append('<li data-tooltip="'+a+'"><a href="#'+e+'"><span></span></a></li>')}if(0<d){var e=100*d,h=100/d;f.wrapAll('<div class="slidesContainer" />');f.parent().wrap('<div class="slides" />');b(this).find(".slidesContainer").css("width",e+"%");b(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');b(this).find(".controlArrow.next").css("border-color",
"transparent transparent transparent "+c.controlArrowColor);b(this).find(".controlArrow.prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent");c.loopHorizontal||b(this).find(".controlArrow.prev").hide();f.each(function(a){a||b(this).addClass("active");b(this).css("width",h+"%");c.verticalCentered&&J(b(this))})}else c.verticalCentered&&J(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling);b.isFunction(c.afterRender)&&c.afterRender.call(this);
c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");c.navigation&&(n.css("margin-top","-"+n.height()/2+"px"),n.find("li").first().find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).appendTo("body");if(c.scrollOverflow)b(window).on("load",function(){b(".section").each(function(){var a=b(this).find(".slide");a.length?a.each(function(){u(b(this))}):u(b(this))})});b(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&K(b,a)})});var M,B=!1;
b(window).scroll(function(a){if(!c.autoScrolling){var f=b(window).scrollTop();a=b(".section").map(function(){if(b(this).offset().top<f+100)return b(this)});a=a[a.length-1];if(!a.hasClass("active")){B=!0;var d=E(a);b(".section.active").removeClass("active");a.addClass("active");var e=a.data("anchor");b.isFunction(c.onLeave)&&c.onLeave.call(this,a.index(".section"),d);b.isFunction(c.afterLoad)&&c.afterLoad.call(this,e,a.index(".section")+1);G(e);H(e,0);c.anchors.length&&!h&&(s=e,location.hash=e);clearTimeout(M);
M=setTimeout(function(){B=!1},100)}}});var C=0,v=0,D=0,w=0;b(document).on("touchmove",function(a){if(c.autoScrolling&&A&&(a.preventDefault(),a=a.originalEvent,!h))if(D=a.touches[0].pageY,w=a.touches[0].pageX,b(".section.active").find(".slides").length&&Math.abs(v-w)>Math.abs(C-D))v>w?b(".section.active").find(".controlArrow.next").trigger("click"):v<w&&b(".section.active").find(".controlArrow.prev").trigger("click");else if(a=b(".section.active").find(".scrollable"),C>D)if(0<a.length)if(r("bottom",
a))b.fn.fullpage.moveSlideDown();else return!0;else b.fn.fullpage.moveSlideDown();else if(0<a.length)if(r("top",a))b.fn.fullpage.moveSlideUp();else return!0;else b.fn.fullpage.moveSlideUp()});b(document).on("touchstart",function(a){c.autoScrolling&&A&&(a=a.originalEvent,C=a.touches[0].pageY,v=a.touches[0].pageX)});b.fn.fullpage.moveSlideUp=function(){var a=b(".section.active").prev(".section");c.loopTop&&!a.length&&(a=b(".section").last());(0<a.length||!a.length&&c.loopTop)&&p(a)};b.fn.fullpage.moveSlideDown=
function(){var a=b(".section.active").next(".section");c.loopBottom&&!a.length&&(a=b(".section").first());(0<a.length||!a.length&&c.loopBottom)&&p(a)};b.fn.fullpage.moveToSlide=function(a){var c="",c=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".section").eq(a-1);0<c.length&&p(c)};b(window).on("hashchange",function(){if(!B){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];(b!==s||"undefined"!=typeof a&&!q)&&K(b,a)}});b(document).keydown(function(a){if(!h)switch(a.which){case 38:case 33:b.fn.fullpage.moveSlideUp();
break;case 40:case 34:b.fn.fullpage.moveSlideDown();break;case 37:b(".section.active").find(".controlArrow.prev").trigger("click");break;case 39:b(".section.active").find(".controlArrow.next").trigger("click")}});b(document).on("click","#fullPage-nav a",function(a){a.preventDefault();a=b(this).parent().index();p(b(".section").eq(a))});b(document).on({mouseenter:function(){var a=b(this).data("tooltip");b('<div class="fullPage-tooltip '+c.navigationPosition+'">'+a+"</div>").hide().appendTo(b(this)).fadeIn(200)},
mouseleave:function(){b(this).find(".fullPage-tooltip").fadeOut().remove()}},"#fullPage-nav li");b(".section").on("click",".controlArrow",function(){if(!q){q=!0;var a=b(this).closest(".section").find(".slides"),c=a.find(".slide.active"),d=null;c.removeClass("active");d=b(this).hasClass("prev")?c.prev(".slide"):c.next(".slide");d.length||(d=b(this).hasClass("prev")?c.siblings(":last"):c.siblings(":first"));t(a,d);d.addClass("active")}});b(".section").on("click",".toSlide",function(a){a.preventDefault();
a=b(this).closest(".section").find(".slides");var c=a.find(".slide.active"),d=null,d=a.find(".slide").eq(b(this).data("index")-1);0<d.length&&(c.removeClass("active"),t(a,d),d.addClass("active"))});if(!A){var N;b(window).resize(function(){clearTimeout(N);N=setTimeout(I,500)})}b(window).bind("orientationchange",function(){I()})}})(jQuery);