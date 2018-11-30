 $(function(){
 	$('#but').click(function(){
 		/*var text = $('p').text();
 		var html = $('p').html();
 		var attr = $('p').attr('style');
 		var val = $('input').val();*/
 		// var text = $('p').text('Tùng Duy');
 		//$('p').html('Tùng Duy <b>Designer</b>');
 		//$('p').attr({'align':'right'});
 		//$('input').val('Tùng Duy');
 		/*$('p').addClass('p1');
 		$('p').removeClass('p2');*/
 		//$('p').toggleClass('p1');
 		//$('p').css({'color':"#1FA503"});

 		//$('li').parentUntil('body').css({'background':'brown'});
 		//$('ul').children().css({'listStyle':"none"});
 		//$('ul').children().find('a').css({'color':'brown'});
 		$('ul').children().eq(0).css({"listStyle":"none"});
 	});
 	$('.tatqc').click(function(){
 		$('.quangcao').fadeOut(1000);
 	});
 	$('.nuttatlogo').click(function(){
 		$('.logocuoitrang .d1').slideToggle(1000)
 	});
})  
/* var dau = document.frm_expenditure_apex.first_products.value();
 console.log(dau);
*/
	function clickMe(x){
		//var x = document.frm_expenditure_apex.first_products.value();
		//alert(x);
	 var x=	document.getElementById("_12").value;
	 console.log(x);
	}

 function checkItem(i){
 	if (i<0) {
 		alert("Không được nhập số âm");

 	}
 	else if(i == null){
 		i = 0;
console.log(i);
 	}
 }