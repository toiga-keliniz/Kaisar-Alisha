window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t450_showMenu(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t450');var overlay=rec.querySelector('.t450__overlay');var menuElements=rec.querySelectorAll('.t450__overlay, .t450__close, a[href*="#"]');if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t450__body_menushowed');if(menu)menu.classList.add('t450__menu_show');if(overlay)overlay.classList.add('t450__menu_show');if(menu){menu.addEventListener('clickedAnchorInTooltipMenu',function(){t450_closeMenu(menu,overlay)})}
Array.prototype.forEach.call(menuElements,function(element){element.addEventListener('click',function(){if(element.closest('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link'))return;if(element.href&&(element.href.substring(0,7)==='#price:'||element.href.substring(0,9)==='#submenu:'))return;t450_closeMenu(menu,overlay)})});document.addEventListener('keydown',function(e){if(e.keyCode===27){document.body.classList.remove('t390__body_popupshowed');var popups=document.querySelectorAll('.t390');Array.prototype.forEach.call(popups,function(popup){popup.classList.remove('t390__popup_show')})}});rec.addEventListener('click',function(e){if(e.target.closest('.t966__tm-link, .t978__tm-link')){t450_checkSize(recid);if(e.target.closest('.t978__tm-link')){setTimeout(function(){var hookLink=e.target.closest('.t978__tm-link');var menuBlock=hookLink.nextElementSibling;var submenuLinks=menuBlock?menuBlock.querySelectorAll('.t978__menu-link'):[];Array.prototype.forEach.call(submenuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})},300)}}});menu.addEventListener('menuOverflow',function(){t450_checkSize(recid)});t450_highlight(recid)}
function t450_closeMenu(menu,overlay){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t450__body_menushowed');if(menu)menu.classList.remove('t450__menu_show');if(overlay)overlay.classList.remove('t450__menu_show')}
function t450_checkSize(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;if(!menu)return;var container=menu.querySelector('.t450__container');var topContainer=menu.querySelector('.t450__top');var rightContainer=menu.querySelector('.t450__rightside');setTimeout(function(){var topContainerHeight=topContainer?topContainer.offsetHeight:0;var rightContainerHeight=rightContainer?rightContainer.offsetHeight:0;var containerPaddingTop=container?window.getComputedStyle(container).paddingTop:'0';var containerPaddingBottom=container?window.getComputedStyle(container).paddingBottom:'0';containerPaddingTop=parseInt(containerPaddingTop,10);containerPaddingBottom=parseInt(containerPaddingBottom,10);if(topContainerHeight+rightContainerHeight+containerPaddingTop+containerPaddingBottom>document.documentElement.clientHeight){menu.classList.add('t450__overflowed')}else{menu.classList.remove('t450__overflowed')}})}
function t450_appearMenu(recid){var rec=document.getElementById('rec'+recid);var burger=rec?rec.querySelector('.t450__menu__content'):null;if(!burger)return;var burgerAppearOffset=burger?burger.getAttribute('data-appearoffset'):'';var burgerHideOffset=burger?burger.getAttribute('data-hideoffset'):'';if(burgerAppearOffset){burgerAppearOffset=t450_appearMenuParseNumber(burgerAppearOffset);if(window.pageYOffset>=burgerAppearOffset){if(burger.classList.contains('t450__beforeready')){burger.classList.remove('t450__beforeready')}}else{burger.classList.add('t450__beforeready')}}
if(burgerHideOffset){burgerHideOffset=t450_appearMenuParseNumber(burgerHideOffset);var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(window.pageYOffset+window.innerHeight>=scrollHeight-burgerHideOffset){if(!burger.classList.contains('t450__beforeready')){burger.classList.add('t450__beforeready')}}else if(burgerAppearOffset){if(window.pageYOffset>=burgerAppearOffset){burger.classList.remove('t450__beforeready')}}else{burger.classList.remove('t450__beforeready')}}}
function t450_appearMenuParseNumber(string){if(string.indexOf('vh')>-1){string=Math.floor((window.innerHeight*(parseInt(string)/100)))}
return parseInt(string,10)}
function t450_initMenu(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;var overlay=rec?rec.querySelector('.t450__overlay'):null;var burger=rec?rec.querySelector('.t450__burger_container'):null;var menuLinks=rec?rec.querySelectorAll('.t-menu__link-item.t450__link-item_submenu'):[];var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(hook){document.addEventListener('click',function(e){if(e.target.closest('a[href="'+hook+'"]')){e.preventDefault();t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)}})}
if(burger){burger.addEventListener('click',function(){t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)})}
window.addEventListener('resize',function(){t450_checkSize(recid)});if(!window.isMobile)return;Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})}
function t450_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)==='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)==='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)==='/'){pathname=pathname.slice(1)}
if(pathname===''){pathname='/'}
var shouldBeActiveElements=document.querySelectorAll('.t450__menu a[href=\''+url+'\'], '+'.t450__menu a[href=\''+url+'/\'], '+'.t450__menu a[href=\''+pathname+'\'], '+'.t450__menu a[href=\'/'+pathname+'\'], '+'.t450__menu a[href=\''+pathname+'/\'], '+'.t450__menu a[href=\'/'+pathname+'/\']'+(hash?', .t450__menu a[href=\''+hash+'\']':''));var rec=document.getElementById('rec'+recid);var menuLinks=rec?rec.querySelectorAll('.t450__menu a'):[];Array.prototype.forEach.call(menuLinks,function(link){if(link.getAttribute('data-highlighted-by-user')!=='y')link.classList.remove('t-active')});Array.prototype.forEach.call(shouldBeActiveElements,function(link){link.classList.add('t-active')})}
function t678_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t674_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var backgroundImage=rec.querySelector('.t674__img-holder');if(!backgroundImage)return;backgroundImage.onload=function(){var delay=0;var allRecords=document.getElementById('allrecords');if(allRecords.getAttribute('data-blocks-animationoff')!=='yes'){delay=600}
setTimeout(function(){document.body.classList.add('t674__body_with-bg')},delay)};var event=document.createEvent('HTMLEvents');event.initEvent('load',!0,!1);backgroundImage.dispatchEvent(event)}