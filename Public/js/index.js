$(function(){
	$(".menu li").hover(function(){
		$(this).find('.one-menu').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
		$(this).find('.two-menu').show();
	},function(){
		$(this).find('.one-menu').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
		$(this).find('.two-menu').hide();		
	});

	//英文版首页轮播图
	$('#myCarousel').carousel({
		interval: 3000
	});

});