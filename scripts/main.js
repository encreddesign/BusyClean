$(function(){
	
	//ids
	var Ids = {
		home_id : '#company-logo',
		company_id : '#item-1',
		ouraim_id : '#item-2',
		aboutus_id : '#item-3',
		header_id : '#header-id',
		scroll_id : '#scroll-top',
		section_1_id : '#sect-1',
		section_2_id : '#sect-2',
		section_3_id : '#sect-3'
	};
	
	//scroll top check
	$(window).scroll(function(){
		if($(document).scrollTop() > $(Ids.section_1_id).offset().top-5){
			$(Ids.scroll_id).css('opacity', '1');
		}else{
			$(Ids.scroll_id).css('opacity', '0');
		}
	});
	
	//scroll back to top
	$(Ids.scroll_id).click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	
	//scroll to section
	//company link
	$(Ids.company_id).click(function(){
		$('body,html').animate({
			scrollTop: $(Ids.section_1_id).offset().top
		}, 500);
	});
	//our aim link
	$(Ids.ouraim_id).click(function(){
		$('body,html').animate({
			scrollTop: $(Ids.section_2_id).offset().top
		}, 500);
	});
	//about us link
	$(Ids.aboutus_id).click(function(){
		$('body,html').animate({
			scrollTop: $(Ids.section_3_id).offset().top
		}, 500);
	});
});