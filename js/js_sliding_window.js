			$(function(){
				$(".visual_train").prepend( $(".visual_train li:last") );
				$(".visual_train").css({"marginLeft":"-100%"});

				$(".visual_control li:eq(0) a").addClass("on"); //같이 움직이게 해야하는데.ㅣ.........

				$(".visual_control li a").click(function(){
					$(".visual_train").animate({"marginLeft": $(this).attr("href")	});
					$(".visual_control li a").removeClass("on");
					$(this).addClass("on");
					return false;
				});		

				var loc = 0;
			
				$(".prev").click(function(){
					$(".visual_train").animate({"marginLeft":"+=100%"} , "fast", "linear", function(){
						$(".visual_train").prepend( $(".visual_train li:last") );
						$(".visual_train").css({"marginLeft":"-100%"});

						loc--;

						// 처음 항목인 경우 다시 마지막으로 되돌리기 위함.
						if (loc == -1)
						{
							loc = 4;
						}

						$(".visual_control li a").removeClass("on");
						$(".visual_control li:eq(" + (loc) + ") a").addClass("on");
					});

					resetTimer();
					return false;
				});//prev

				$(".next").click(function(){
					$(".visual_train").animate({"marginLeft":"-=100%"} , "fast", "linear", function(){
						$(".visual_train").append( $(".visual_train li:first") );
						$(".visual_train").css({"marginLeft":"-100%"});

						loc++;

						// 마지막 항목인 경우 다시 처음으로 되돌리기 위함.
						if (loc == 5)
						{
							loc = 0;
						}
						
						$(".visual_control li a").removeClass("on"); 
						$(".visual_control li:eq(" + (loc) + ") a").addClass("on");
					});
					
					resetTimer();
					return false;
				});//next

				var timer = window.setInterval( function(){ $(".next").click(); } , 3500 );
				var now = true; //현재 재생중임

				$(".timer_control_btn").click(function(){
					if( now ) // 만약 재생중이라면
					{
						window.clearInterval( timer ); //1) 멈추기
						$(".timer_control_btn a").css({"backgroundPosition":"-56px -0px"}); //2) 그림바꾸기
						now = false; //3) 현재 멈춰있는 상태
					}
					else
					{
						timer = window.setInterval( function() { $(".next").click(); } , 3500 ); //1) 타이어
						$(".timer_control_btn a").css({"backgroundPosition":"0px -0px"}); //2) 그림바꾸기
						now = true; //3) 움직이는 상태
					}
					return false;
				});

				function resetTimer() {
					if( now ) {
						window.clearInterval( timer );
						timer = window.setInterval( function() { $(".next").click(); } , 3500 );
					}
				}

			});//function

/*
		$(function(){
			//1) 초기값을 설정
			$(".visual_train").prepend( $(".visual_train li:last") );
			$(".visual_train").css({"marginLeft":"-100%"});
			$(".visual_control li:eq(0) a").addClass("selected"); //같이 움직이게 해야하는데.ㅣ.........

			$(".visual_control li a").click(function(){
				$(".visual_train").animate({"marginLeft": $(this).attr("href")	});
				$(".visual_control li a").removeClass("on");
				$(this).addClass("on");
				return false;
			});		

			var loc = 0;

			//2) 다음버튼	
			$(".next").click(function(){
				$(".visual_train").animate({"marginLeft":"-=100%"} ,"fast", "linear", 
					function(){
						$(".visual_train").append( $(".visual_train li:first") );
						$(".visual_train").css({"marginLeft":"-100%"});

						loc++;

						// 마지막 항목인 경우 다시 처음으로 되돌리기 위함.
						if (loc == 5)
						{
							loc = 0;
						}

						$(".visual_control li a").removeClass("selected"); //같이 움직이게 해야하는데.ㅣ.........
						$(".visual_control li:eq(" + (loc) + ") a").addClass("selected"); //같이 움직이게 해야하는데.ㅣ.........


					});
				return false;
			});//next
			//3) 이전버튼
			$(".prev").click(function(){
				$(".visual_train").animate({"marginLeft":"+=100%"} ,"fast","linear", 
					function(){
						$(".visual_train").prepend( $(".visual_train li:last") );
						$(".visual_train").css({"marginLeft":"-100%"});

						loc--;

						// 처음 항목인 경우 다시 마지막으로 되돌리기 위함.
						if (loc == -1)
						{
							loc = 4;
						}

						$(".visual_control li a").removeClass("selected"); //같이 움직이게 해야하는데.ㅣ.........
						$(".visual_control li:eq(" + (loc) + ") a").addClass("selected"); //같이 움직이게 해야하는데.ㅣ.........	


					});
				return false;
			});//prev
			
			$(".visual_control li a").click(function(){
				$(".visual_control li a").removeClass("selected"); //같이 움직이게 해야하는데.ㅣ.........
				$(this).addClass("selected"); //같이 움직이게 해야하는데.ㅣ.........
			});//.visual_control li a
		});
*/


	
		$(function(){
		$(".panel").hide();
		$("#tab1").show();
		$(".tabbox_top > li:first > a").addClass("selected");

		$(".tabbox_top > li > a").click(function(){ 
			$(".panel").hide();
			$(		$(this).attr("href")	).show();
			$(".tabbox_top > li > a").removeClass("selected");
			$(this).addClass("selected");
			return false;
		});//첫 번째-세 번째
	});//all
	//index tab 기능 끝
	


	$(function(){
		$(".pannel").hide();
		$("#qnatab1").show();
		$(".qnaTab > li:first > a").addClass("selected1");

		$(".qnaTab > li > a").click(function(){
			$(".pannel").hide();
			$(		$(this).attr("href")	).show();
			$(".qnaTab > li > a").removeClass("selected1");
			$(this).addClass("selected1");
			return false;			
		});
	});//all
	//서브페이지 자주 묻는 질문 페이지 tab

	$(function(){
			$(".faq-box dd").css("display","none");
			$(".faq-box dt").click(function(){	
				$(".faq-box dd").slideUp("fast"); //일단 모든 dd 닫기 - 초기화 원래는 fast
				$(this).next().slideDown("fast"); //내가 선택한 콘텐츠만 보이게 만들기

			});
		});

	$(function(){
		$(".pannel_1").hide();
		$("#function").show();
		$(".tireTab > li:first > a").addClass("selected2");

		$(".tireTab > li > a").click(function(){
			$(".pannel_1").hide();
			$(		$(this).attr("href")	).show();
			$(".tireTab > li > a").removeClass("selected2");
			$(this).addClass("selected2");
			return false;			
		});
	});//all
	//서브페이지 자주 묻는 질문 페이지 tab

		$(function(){
			$(".a3.a31.air a").mouseover(function(){
				$(".a3.a31.air a img").attr("src","images/hankook-service-07.jpg");
			}).mouseout(function(){
				$(".a3.a31.air a img").attr("src","images/hankook-service-08.jpg");
			});//1

			$(".a3.a32.pass a").mouseover(function(){
				$(".a3.a32.pass a img").attr("src","images/hankook-tires-services-01.jpg");
			}).mouseout(function(){
				$(".a3.a32.pass a img").attr("src","images/hankook-service-04.jpg");		
			});//2

			$(".a3.a33.check a").mouseover(function(){
				$(".a3.a33.check a img").attr("src","images/hankook-service-11.jpg");
			}).mouseout(function(){
				$(".a3.a33.check a img").attr("src","images/hankook-service-09.jpg");		
			});//3

			$(".a3.a31.ene a").mouseover(function(){
				$(".a3.a31.ene a img").attr("src","images/hankook-investors-02.jpg");
			}).mouseout(function(){
				$(".a3.a31.ene a img").attr("src","images/hankook-service-02.jpg");
			});//4

			$(".a3.a32.re a").mouseover(function(){
				$(".a3.a32.re a img").attr("src","images/hankook-tire-company-02.jpg");
			}).mouseout(function(){
				$(".a3.a32.re a img").attr("src","images/hankook-investors-06.jpg");		
			});//5

			$(".a3.a33.his a").mouseover(function(){
				$(".a3.a33.his a img").attr("src","images/hankook-investors-04.jpg");
			}).mouseout(function(){
				$(".a3.a33.his a img").attr("src","images/hankook-service-06.jpg");		
			});//6

			$(".a3.a31.mov a").mouseover(function(){
				$(".a3.a31.mov a img").attr("src","images/hankook-incruit-01.jpg");
			}).mouseout(function(){
				$(".a3.a31.mov a img").attr("src","images/hankook-tire-company-05.jpg");
			});//7

			$(".a3.a32.com a").mouseover(function(){
				$(".a3.a32.com a img").attr("src","images/hankook-tire-company-03.jpg");
			}).mouseout(function(){
				$(".a3.a32.com a img").attr("src","images/hankook-tire-company-01.jpg");		
			});//8

			$(".a3.a33.peo a").mouseover(function(){
				$(".a3.a33.peo a img").attr("src","images/hankook-incruit-05.jpg");
			}).mouseout(function(){
				$(".a3.a33.peo a img").attr("src","images/hankook-incruit-02.jpg");		
			});//9

		});//all



		$(function(){
			$(".gnb .gnb_sub").hide();

			$(".gnb li").on("mouseenter focusin", function(){		//키보드 tab 눌렀을 때 상위메뉴만 tab 키 눌렀을 때 인식되게 하지 말고, 하위메뉴들도 tab 키 눌렀을 때 인식이 되게
				$(this).children(".gnb_sub").stop().slideDown();
			}).on("mouseleave focusout", function(){			
				$(this).children(".gnb_sub").stop().slideUp();
			});

		});//all

		
////// 클릭하면 스크롤 되면서 원하는 곳에 도착하는 
		/////////////////////////////////////////////////////////////
		
		$(function(){

			$("li.result > a").click(function(){				
				 $("body, html").animate({ scrollTop : '500' });
			});

			$("li.korea > a").click(function(){
				 $("body, html").animate({ scrollTop : '1850' });
			});

			$("li.china > a").click(function(){
				 $("body, html").animate({ scrollTop : '2800' });
			});

			$("li.europe > a").click(function(){
				 $("body, html").animate({ scrollTop : '3750' });
			});

			$("li.northAmerica > a").click(function(){
				 $("body, html").animate({ scrollTop : '4700' });
			});
		});
	

/*tire.html*/
/*타이어 갤러리 탭*/

	$(function(){
		$(".tire_panel").hide();
		$("#tab_t1").show();
		$(".tab_tire > li:first > a").addClass("selected_3");

		$(".tab_tire > li > a").click(function(){
			$(".tire_panel").hide();
			$(		$(this).attr("href")	).show();
			$(".tab_tire > li > a").removeClass("selected_3");
			$(this).addClass("selected_3");
			return false;			
		});
	});//all
// 첫번째 타이어 갤러리
		$(function(){
			$(".tireright_control.r1 li a").click(function(){
				//1. 그림 겹치기 : .tireright_main img 앞에 새로보여줄 그림을 끼운다.						
					//"<img src='images/photocopier1.jpg' + alt=''/>"
					//"<img src='"+images/photocopier1.jpg+"' + alt=''/>"
					//"<img src='"+$(this).attr("href")+"' + alt=''/>"

					// 1-1 .tireright_main{	position:absolute;	}
					//		.tireright_main img{ width:100%; position:absolute; }
					//		.car_control{ margin-top:360px; }
					// 로딩되는 시간이 달라서!!!!!!!!!! 브라우저 테스트를 해봅니다. 

					//1-2
						$(".tireright_main.r1 img").before("<img src='"+$(this).attr("href")+"' + alt=''/>");
					//2. 현재 보이고 있는 그림이 서서히 사라진다. [브라우저 테스트]
						//대상 : 현재보이고 있는 그림이 $(".tireright_main img:last")
						//효과 : 서서히 사라진다. fadeOut()

						$(".tireright_main.r1 img:last").fadeOut(500, function(){
							$(".tireright_main.r1 img:not(:first)").remove(); //첫 번째꺼 빼고 안 보이게
						});			
					return false;
				});
		});//all

// 두번째 타이어 갤러리
		$(function(){
			$(".tireright_control.r2 li a").click(function(){
				//1. 그림 겹치기 : .tireright_main img 앞에 새로보여줄 그림을 끼운다.						
					//"<img src='images/photocopier1.jpg' + alt=''/>"
					//"<img src='"+images/photocopier1.jpg+"' + alt=''/>"
					//"<img src='"+$(this).attr("href")+"' + alt=''/>"

					// 1-1 .tireright_main{	position:absolute;	}
					//		.tireright_main img{ width:100%; position:absolute; }
					//		.car_control{ margin-top:360px; }
					// 로딩되는 시간이 달라서!!!!!!!!!! 브라우저 테스트를 해봅니다. 

					//1-2
						$(".tireright_main.r2 img").before("<img src='"+$(this).attr("href")+"' + alt=''/>");
					//2. 현재 보이고 있는 그림이 서서히 사라진다. [브라우저 테스트]
						//대상 : 현재보이고 있는 그림이 $(".tireright_main img:last")
						//효과 : 서서히 사라진다. fadeOut()

						$(".tireright_main.r2 img:last").fadeOut(500, function(){
							$(".tireright_main.r2 img:not(:first)").remove(); //첫 번째꺼 빼고 안 보이게
						});			
					return false;
				});
		});//all

// 세번째 타이어 갤러리
		$(function(){
			$(".tireright_control.r3 li a").click(function(){
				//1. 그림 겹치기 : .tireright_main img 앞에 새로보여줄 그림을 끼운다.						
					//"<img src='images/photocopier1.jpg' + alt=''/>"
					//"<img src='"+images/photocopier1.jpg+"' + alt=''/>"
					//"<img src='"+$(this).attr("href")+"' + alt=''/>"

					// 1-1 .tireright_main{	position:absolute;	}
					//		.tireright_main img{ width:100%; position:absolute; }
					//		.car_control{ margin-top:360px; }
					// 로딩되는 시간이 달라서!!!!!!!!!! 브라우저 테스트를 해봅니다. 

					//1-2
						$(".tireright_main.r3 img").before("<img src='"+$(this).attr("href")+"' + alt=''/>");
					//2. 현재 보이고 있는 그림이 서서히 사라진다. [브라우저 테스트]
						//대상 : 현재보이고 있는 그림이 $(".tireright_main img:last")
						//효과 : 서서히 사라진다. fadeOut()

						$(".tireright_main.r3 img:last").fadeOut(500, function(){
							$(".tireright_main.r3 img:not(:first)").remove(); //첫 번째꺼 빼고 안 보이게
						});			
					return false;
				});
		});//all

// 네번째 타이어 갤러리
		$(function(){
			$(".tireright_control.r4 li a").click(function(){
				//1. 그림 겹치기 : .tireright_main img 앞에 새로보여줄 그림을 끼운다.						
					//"<img src='images/photocopier1.jpg' + alt=''/>"
					//"<img src='"+images/photocopier1.jpg+"' + alt=''/>"
					//"<img src='"+$(this).attr("href")+"' + alt=''/>"

					// 1-1 .tireright_main{	position:absolute;	}
					//		.tireright_main img{ width:100%; position:absolute; }
					//		.car_control{ margin-top:360px; }
					// 로딩되는 시간이 달라서!!!!!!!!!! 브라우저 테스트를 해봅니다. 

					//1-2
						$(".tireright_main.r4 img").before("<img src='"+$(this).attr("href")+"' + alt=''/>");
					//2. 현재 보이고 있는 그림이 서서히 사라진다. [브라우저 테스트]
						//대상 : 현재보이고 있는 그림이 $(".tireright_main img:last")
						//효과 : 서서히 사라진다. fadeOut()

						$(".tireright_main.r4 img:last").fadeOut(500, function(){
							$(".tireright_main.r4 img:not(:first)").remove(); //첫 번째꺼 빼고 안 보이게
						});			
					return false;
				});
		});//all

// 다섯번째 타이어 갤러리
		$(function(){
			$(".tireright_control.r5 li a").click(function(){
				//1. 그림 겹치기 : .tireright_main img 앞에 새로보여줄 그림을 끼운다.						
					//"<img src='images/photocopier1.jpg' + alt=''/>"
					//"<img src='"+images/photocopier1.jpg+"' + alt=''/>"
					//"<img src='"+$(this).attr("href")+"' + alt=''/>"

					// 1-1 .tireright_main{	position:absolute;	}
					//		.tireright_main img{ width:100%; position:absolute; }
					//		.car_control{ margin-top:360px; }
					// 로딩되는 시간이 달라서!!!!!!!!!! 브라우저 테스트를 해봅니다. 

					//1-2
						$(".tireright_main.r5 img").before("<img src='"+$(this).attr("href")+"' + alt=''/>");
					//2. 현재 보이고 있는 그림이 서서히 사라진다. [브라우저 테스트]
						//대상 : 현재보이고 있는 그림이 $(".tireright_main img:last")
						//효과 : 서서히 사라진다. fadeOut()

						$(".tireright_main.r5 img:last").fadeOut(500, function(){
							$(".tireright_main.r5 img:not(:first)").remove(); //첫 번째꺼 빼고 안 보이게
						});			
					return false;
				});
		});//all

/*이벤트*/
/*event.html*/
/*modal*/
			$(function(){
				$("<img>").attr("src","images/000000125_i_event_detail.jpg");
				$("<img>").attr("src","images/000000127_i_event_1.jpg");
				$("<img>").attr("src","images/000000143_s_event_650.jpg");



				// e1_b.jpg, e2_b.jpg, e3_b.jpg, ..... 5번 붙여넣기 >> 반복되는 일
				// 변하는 숫자를 찾아서 >> 반복되는 일 - 변수 찾기
				// 2,3,4,5,6으로 바꾸기 >> 
				  // for( 시작; 종료; 반복문 ){ 반복되는 일= 변수 찾기 }
				  
				 // for( var imgplus = "$('<img>)" + imgplus + "attr('src','_b.jpg')"  );

				 //				for( var i=1; i<=6; i++ ){		$("<img>").attr("src","images/e"+ i +"_b.jpg");       	}






				//				for( var i=1; i<7; i=i+1 ){
//					"$('<img>').attr(src' , 'images' + i + '_b.jpg');"
	//			}





				$("body").append("<div class='modaloverlay'></div><div class='contentoverlay'></div>");
				// 브라우저가 로딩되면 그 때 나오게 해주세요. 
				// display:none; 은 나중에 삽입!!!!!
				$(".event_box > li > a").click(function(){
					$(".modaloverlay").fadeIn();     //2) >> 보인다.
					// $(".contentoverlay").fadeIn().html("<img src='images/e1.png' alt=''/>");
					$(".contentoverlay").fadeIn().html("<img src='"+$(this).attr("href")+"' + alt=''/>")   // 각각의 이미지가 보인다.
											.append("<img src='images/close.png' class='close' alt=''/>")   // 닫기 버튼을 추가
											.css({"marginLeft":"-"+($(".contentoverlay").width()/2)+"px", 
												  "marginTop":"-"+($(".contentoverlay").height()/2)+"px"
											});

					//// 닫기 버튼을 누르면, 닫기 버튼이 닫힌다.
					$(".close").click(function(){
						$(".modaloverlay, .contentoverlay").hide();
					}); 
					return false;
				});

			});

			$(document).ready(function(){
					
				$(".return-top").hide(); // 탑 버튼 숨김
				$(function () {
							 
					$(window).scroll(function () {
						if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
							$('.return-top').fadeIn();
						} else {
							$('.return-top').fadeOut();
						}
					});
							
					$('.return-top').click(function () {
						$('body,html').animate({
							scrollTop: 0
						}, 800);  // 탑 이동 스크롤 속도
						return false;
					});
				});
			 
			});//top 버튼

					function controlCookies()
			{
			// 1. 체크 박스가 체크되어 있다면, setCookie( 쿠키이름, 쿠키값, 안보여줄 날짜 ) 설정
			// 2. .popWrap 안보이게 설정
				console.log( $(".todayclose input:checked").length ); //( : > 가상으로 인식해서)체크가 될 수도 안 될 수도
				if( $(".todayclose input:checked").length == 1 )
				{
					setCookie("subpop" , "done", 1)// 하루동안
				}
				$(".popWrap").hide();
			}
			// 3. 브라우저가 로딩이 끝났다면
				// .getCookie(쿠키이름)을 이용해 쿠키가 설정되어 있는지 확인하고
				// .popWrap를 보일지 말지 결정
				// if( 쿠키가 설정되어 있는지 확인 ){ 안보이기 }
				// else{ 보이기 }
			
			$(function(){
				if( getCookie("subpop") == "done" )
				{
					$(".popWrap").hide();
				}
				else
				{
					$(".popWrap").show();
				}
			});

			///////////////////
			//모바일 gnb

			$(function(){
				$(".gnb_mobile_control a").click(function(){
					if ( $(".gnb_mobile").css("left") =="-250px") //화면에 안 보이는 상황이라면
					{ 
						$(".gnb_mobile").animate({"left":"0"}); //.gnb_mobile이 보인다.
						$(".gnb_mobile_control a").css({"backgroundPosition":"0 -44px"}); //버튼 이미지 바뀌게만들기
					} 
					else 
					{ 	
						$(".gnb_mobile").animate({"left":"-250px"});
						$(".gnb_mobile_control a").css({"backgroundPosition":"0 0"}); 	
					}
					return false;
				});
			

			//.gnb_mobile li을 누르면, .gnb_sub가 내려오고,  (겹치치 않게)
			//.gnb_mobile li을 다시 누르면, .gnb_sub가 올라간다.

			//  패턴 : 이벤트대상		.gnb_mobile li
			//  이벤트 : clilck	+ return false;
			//  이벤트 핸들러 :  		.gnb_sub가 내려오고,  (겹치치 않게)
			//								.gnb_sub가 올라간다.



			$(".mobilegnb_sub").hide(); //숨기기
			$(".gnb_mobile li").click(function(){
				$(".gnb_mobile li").children(".mobilegnb_sub").slideUp(); // 닫고,
				$(this).children(".mobilegnb_sub").slideDown(); // 해당하는 것이 보여주게
				
				return false;
				});

			});//all



			// 1) 시간관련 : new Date()
			// 2) timer		딱 한 번 실행 : window.setTimer( function(){} , 몇 초뒤에 );
			//					window.setTimeout( function(){ window.alert("hello world"); } , 5000 ); < 5초마다
			// 3) interval	여러 번 실행 : window.setInterval( function(){} , 몇 초 간격으로 );
			//					window.setInterval( function(){ window.alert("hello world"); , 2000 } );


			$(function(){
				$("#postcode").click(function(){
					alert("hello");
					/*
					new daum.Postcode({
						oncomplete: function(data) {
							$("#post2").val( data.post2 ); //우편번호 앞자리 : date.postcode1
							$("#post3").val( data.post3 );//우편번호 뒷자리 : date.postcode2
							$("#post1").focus();//상세주소2 : 커서가게 만들기		focus()
						}
					}).open();
					*/
				});//#postcode
			});//function()