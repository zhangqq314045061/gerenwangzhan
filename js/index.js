  $('#main').fullpage(
  {
  scrollingSpeed:300,
  anchors:['首页','作品','自我介绍','联系方式'],
  lockAnchors:['首页'],
  navigation:true,
  scrollOverflow:true,
   continuousVertical:true,
  navigationTooltips:['首页','作品','自我介绍','联系方式'],
  scrollBa:true,



}


  	);
var mySwiper = new Swiper('.swiper-container',{
	autoplay: 5000,
slidesOffsetAfter : 100,
})
var mySwiper1 = new Swiper('.swiper-container1',{

effect : 'cube',
cube: {
  slideShadows: true,
  shadow: true,
  shadowOffset: 100,
  shadowScale: 0.6
}
})
   $('.anc').on('click',function(){
    $.fn.fullpage.moveSectionDown();
  })