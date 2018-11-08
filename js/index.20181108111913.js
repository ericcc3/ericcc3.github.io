(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_09-918.png' : 'images/wang-ye-she-ji-gao_09-459.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wechatimg1-662.jpeg' : 'images/wechatimg1-331.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_23-924.png' : 'images/wang-ye-she-ji-gao_23-462.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zhang-tiao-tu-408.jpg' : 'images/zhang-tiao-tu-204.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/ming-xin-pian-332.jpg' : 'images/ming-xin-pian-166.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-332.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-166.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/wei-biao-ti-2-328.jpg' : 'images/wei-biao-ti-2-164.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/gui-1-332.jpg' : 'images/gui-1-166.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_26-910.png' : 'images/wang-ye-she-ji-gao_26-455.png');
$('.js-10').attr('src', 'images/wang-ye-she-ji-gao_30-851.png');
$('.js-11').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_02-1574.png' : 'images/wang-ye-she-ji-gao_02-787.png');
$('.js-12').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_04-300.png' : 'images/wang-ye-she-ji-gao_04-150.png');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_09-886.png' : 'images/wang-ye-she-ji-gao_09-443.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wechatimg1-520.jpeg' : 'images/wechatimg1-260.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_23-886.png' : 'images/wang-ye-she-ji-gao_23-443.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zhang-tiao-tu-264.jpg' : 'images/zhang-tiao-tu-132.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/ming-xin-pian-346.jpg' : 'images/ming-xin-pian-173.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-344.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-172.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/wei-biao-ti-2-372.jpg' : 'images/wei-biao-ti-2-186.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/gui-1-368.jpg' : 'images/gui-1-184.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_26-892.png' : 'images/wang-ye-she-ji-gao_26-446.png');
$('.js-10').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_30-1410.png' : 'images/wang-ye-she-ji-gao_30-705.png');
$('.js-11').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_02-1236.png' : 'images/wang-ye-she-ji-gao_02-618.png');
$('.js-12').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_04-240.png' : 'images/wang-ye-she-ji-gao_04-120.png');}else{$('.js').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_09-640.png' : 'images/wang-ye-she-ji-gao_09-320.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wechatimg1-374.jpeg' : 'images/wechatimg1-187.jpeg');
$('.js-3').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_23-640.png' : 'images/wang-ye-she-ji-gao_23-320.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zhang-tiao-tu-282.jpg' : 'images/zhang-tiao-tu-141.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/ming-xin-pian-248.jpg' : 'images/ming-xin-pian-124.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-240.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-120.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/wei-biao-ti-2-278.jpg' : 'images/wei-biao-ti-2-139.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/gui-1-276.jpg' : 'images/gui-1-138.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_26-640.png' : 'images/wang-ye-she-ji-gao_26-320.png');
$('.js-10').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_30-640.png' : 'images/wang-ye-she-ji-gao_30-320.png');
$('.js-11').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_02-470.png' : 'images/wang-ye-she-ji-gao_02-235.png');
$('.js-12').attr('src', (dpi>1) ? 'images/wang-ye-she-ji-gao_04-132.png' : 'images/wang-ye-she-ji-gao_04-66.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-37').mouseenter(function() { $.loadImages('images/zhang-tiao-tu-1000.jpg', function() { }) });
$('.js-37').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-37-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/zhang-tiao-tu-1000.jpg'; } } });
$('.js-38').mouseenter(function() { $.loadImages('images/ming-xin-pian-1890.jpg', function() { }) });
$('.js-38').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-38-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/ming-xin-pian-1890.jpg'; } } });
$('.js-39').mouseenter(function() { $.loadImages('images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-2481.jpg', function() { }) });
$('.js-39').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-39-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-2481.jpg'; } } });
$('.js-40').mouseenter(function() { $.loadImages('images/wei-biao-ti-2-3508.jpg', function() { }) });
$('.js-40').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-40-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/wei-biao-ti-2-3508.jpg'; } } });
$('.js-41').mouseenter(function() { $.loadImages('images/gui-1-3508.jpg', function() { }) });
$('.js-41').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-41-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/gui-1-3508.jpg'; } } });

});