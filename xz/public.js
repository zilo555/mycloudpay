
/* 手机适配 start */
$(window).load(function(){
	var title = $("#tit").text();
	$(".lit_title").text(title);
	changeSize();	
}) 
$(window).resize(function(){
	changeSize();	
})
function changeSize(){
	var winH = window.innerHeight;
	var headH = $(".header").height();
	var oH = winH - headH;
	var iosH = $(".ios").height();
	if( oH > 0 ){
		if( oH <= (iosH+10) ){
			$(".footer").css({"height":iosH+100});
			$(".footer img").css({"width":"90%"});
		}else{
			$(".footer").css({"height":oH});
			$(".footer img").css({"width":"80%"});
		}
	}else{
		$(".footer").css({"height":iosH+100});
		$(".footer img").css({"width":"90%"});
	}
	var phoneH = -iosH/2;
	$(".ios").css({"margin-top":phoneH});
	$(".android").css({"margin-top":phoneH});
}
/* 手机适配 end */

//document.write("<script src='http://s95.cnzz.com/stat.php?id=1259532707&web_id=1259532707' language='JavaScript'>");
