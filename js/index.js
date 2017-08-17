$(function(){
	$(".menu li").hover(function(){
		$(this).find('.one-menu').addClass('active');
		$(this).find('.one-menu').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
		$(this).find('.two-menu').show();
	},function(){
		$(this).find('.one-menu').removeClass('active');
        $(this).find('.one-menu').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
		$(this).find('.two-menu').hide();		
	});
});