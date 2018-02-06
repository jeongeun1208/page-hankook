			
		$(document).ready(function(){
			$(".cone a").addClass("on");

			$(".visual_control li a").click(function(){
				$(".visual_train").animate({"marginLeft": $(this).attr("href")	});
				$(".visual_control li a").removeClass("on");
				$(this).addClass("on");
				return false;
			});

			$(".cone a").addClass("on");

/////////////////////////////
	
			$(".next").click(function(){			
					if(	parseInt (		$(".visual_train").css("marginLeft")	)	% 1920 ==0	){
						if(	$(".visual_train").css("marginLeft") !="-7680px"	){
							$(".visual_train").stop().animate({"marginLeft":"-=1920px"});
						}
					}
					return false; //이벤트 연결된 거 막아주기.
				});//next

			$(".prev").click(function(){
				//console.log(	$(".living_train").css("marginLeft")	);
				if(	parseInt (		$(".visual_train").css("marginLeft")	)	% 1920 ==0	){
					if(	$(".visual_train").css("marginLeft") !="0px"	){
						$(".visual_train").animate({"marginLeft":"+=1920px"});
					}
				}	
					return false; //이벤트 연결된 거 막아주기.
									
				});//prev 
				//슬라이딩 윈도우 기능 끝
	});





