/*
 
 * William P.G.
 * talkShow
 * Recurso para mensagens instantâneas entre usuários logados.  
 
*/

(function($) {

	$.fn.talkShow = function( options ) {
		
		//default settings
		var settings = $.extend({
			
			start    : true,
			layoutModel:null,
			theme	 : null, //jade, sky 	
			
		}, options);

		//return settings	
		return this.each( function() {			
			
			/* -- */	
			
			/*.......... start ........... */
			if (settings.start){

				/* ... */
				
				/* ........... ts_header load ............. */
				//$(".ts_c_header ul").load("engine/nav-bars/header/php/header.php");
				/* .......... /ts_header load ............. */
				
				/* ... */
				
				/* ........... LayoutModel ............. */
				
				//masterTab
				if (settings.layoutModel=="masterTab"){
					
					$(".talkShow").css({
						margin:'0 -150px 1.5% 0',	
					});
					
					setTimeout(function(){ 
						$(".talkShow").css({
							margin:'0 0 1.5% 0',
							transition:'0.6s cubic-bezier(0.81, -0.43, 0.35, 1.25)',	
						});
					}, 1000);
					
					$(".ts_button").css({
						height:'245px',
						width:'50px',
						margin:'0',
						borderRadius:'5px 0 0 5px',	
					});
					$(".ts_button li").css({
						height:'100%',
					});
					$(".ts_button .text").html("Empresa").css({
						color:'#FFF',
						transform:'rotate(-90deg)',
						margin:'55px -25px 0 -25px',
						fontSize:'18px',	
						letterSpacing:'1.2px',
					});
					
						/* ... */
					
						/* .... ts_button click .... */
						$(".ts_button").click(function(){
							
							$(this).find(".icon").toggleClass("icon-cross2 ts_button_icon_second_stage_size","icon-insert_comment ts_button_icon_first_stage_size");
							
								$.fn.slideFadeToggle  = function(speed, easing, callback) {
										return this.animate({opacity: 'toggle',  marginBottom:'toggle'}, speed, easing, callback);
								};					
								
								$(this).parent().find(".ts_content").slideFadeToggle(200);										
								
								var read_ts_c_body = $(".talkShow .ts_c_body").html();
								
								if(read_ts_c_body==""){														
									$(".talkShow .ts_c_body").load("bot.php");
								}//end if
								
								$(this).prop("disabled",true);
								
								$(this).css({
									margin:'0 -50px 0 0',
									transition:'0.6s cubic-bezier(0.81, -0.43, 0.35, 1.25)',
								});
								
						});//end click
						/* ... /ts_button click .... */
						
						/* ... */
						
						/* .... btn_close_ts_c_body click .... */
						$(".btn_close_ts_c_body").click(function(){
							
							$(".ts_button").css({
								margin:'0 0 0 0'
							});
							
							$.fn.slideFadeToggle  = function(speed, easing, callback) {
									return this.animate({opacity: 'toggle',  marginBottom:'toggle'}, speed, easing, callback);
							};					
							
							$(this).closest(".ts_content").slideFadeToggle(200);	
							$(".ts_button .icon").toggleClass("icon-cross2 ts_button_icon_second_stage_size","icon-insert_comment ts_button_icon_first_stage_size");
							$(".ts_button").prop("disabled",false);
							
						});//end click
						/* ... /btn_close_ts_c_body click .... */
						
						/* ... */
					
				}//end if master_tab_mode layoutModel
				
				/* ... */
				
				//magickCircle
				if (settings.layoutModel=="magickCircle"){
					
						$(".talkShow").css({
							margin:'0 -150px 0.5% 0',	
						});
						
						setTimeout(function(){ 
							$(".talkShow").css({
								margin:'0 20px 0.5% 0',	
								transition:'0.6s cubic-bezier(0.81, -0.43, 0.35, 1.25)',	
							});
						}, 1000);
															
						/* ... */
					
						/* .... ts_button click .... */
						$(".ts_button").click(function(){
							
							$(this).find(".icon").toggleClass("icon-cross2 ts_button_icon_second_stage_size","icon-insert_comment ts_button_icon_first_stage_size");
							
								$.fn.slideFadeToggle  = function(speed, easing, callback) {
										return this.animate({opacity: 'toggle',  marginBottom:'toggle'}, speed, easing, callback);
								};					
								
								$(this).parent().find(".ts_content").slideFadeToggle(200);										
								
								var read_ts_c_body = $(".talkShow .ts_c_body").html();
								
								if(read_ts_c_body==""){														
									$(".talkShow .ts_c_body").load("bot.php");
								}//end if
								
						});//end click
						/* ... /ts_button click .... */												
						
						/* ... */
						
						/* .... btn_close_ts_c_body click .... */
						$(".btn_close_ts_c_body").click(function(){														
							
							$.fn.slideFadeToggle  = function(speed, easing, callback) {
									return this.animate({opacity: 'toggle',  marginBottom:'toggle'}, speed, easing, callback);
							};					
							
							$(this).closest(".ts_content").slideFadeToggle(200);										
							$(".ts_button .icon").toggleClass("icon-cross2 ts_button_icon_second_stage_size","icon-insert_comment ts_button_icon_first_stage_size");
							
							
						});//end click
						/* ... /btn_close_ts_c_body click .... */
						
						/* ... */
					
				}//end if magickCircle layoutModel
				/* .......... /LayoutModel ............. */
				
				/* -- */
				
				/* ........... Theme ............. */
				
				//jade
				if (settings.theme=="jade"){
					
					$(".ts_button").css({
						backgroundColor:"#6dc772",
					});
					$(".ts_button .icon").css({
						color:"#FFF",
					});	
					$(".ts_c_header").css({
						backgroundColor:"#6dc772",
					});						
						
						$('.ts_button').hover(			
					
							function (e) {				
								
								$(this).css({
										backgroundColor:'#79d07e',																					
									});
								
								e.stopPropagation();
							},

							function (e) {												
								
								$(this).css({
										backgroundColor:'#6dc772',																							
									});
								
								e.stopPropagation();				
							}			
						
						);//end hover						
					
				}//end if jade theme
				
				//sky
				if (settings.theme=="sky"){
					
					$(".ts_button").css({
						backgroundColor:"#1C86EE",
					});
					$(".ts_button .icon").css({
						color:"#FFF",
					});	
					$(".ts_c_header").css({
						backgroundColor:"#1C86EE",
					});						
						
						$('.ts_button').hover(			
					
							function (e) {				
								
								$(this).css({
										backgroundColor:'#1E90FF',																					
									});
								
								e.stopPropagation();
							},

							function (e) {												
								
								$(this).css({
										backgroundColor:'#1C86EE',																							
									});
								
								e.stopPropagation();				
							}			
						
						);//end hover						
					
				}//end if sky theme
				
				//red1
				if (settings.theme=="red1"){
					
					$(".ts_button").css({
						backgroundColor:"#FF4C3F",
					});
					$(".ts_button .icon").css({
						color:"#FFF",
					});	
					$(".ts_c_header").css({
						backgroundColor:"#FF4C3F",
					});						
						
						$('.ts_button').hover(			
					
							function (e) {				
								
								$(this).css({
										backgroundColor:'#ff4c3f',																					
									});
								
								e.stopPropagation();
							},

							function (e) {												
								
								$(this).css({
										backgroundColor:'#FF4C3F',																							
									});
								
								e.stopPropagation();				
							}			
						
						);//end hover						
					
				}//end if red1 theme
				
				//red2
				if (settings.theme=="red2"){
					
					$(".ts_button").css({
						backgroundColor:"#FF4040",
					});
					$(".ts_button .icon").css({
						color:"#FFF",
					});	
					$(".ts_c_header").css({
						backgroundColor:"#FF4040",
					});						
						
						$('.ts_button').hover(			
					
							function (e) {				
								
								$(this).css({
										backgroundColor:'rgba(255,64,64,0.8)',																					
									});
								
								e.stopPropagation();
							},

							function (e) {												
								
								$(this).css({
										backgroundColor:'#FF4040',																							
									});
								
								e.stopPropagation();				
							}			
						
						);//end hover						
					
				}//end if red2 theme
				
				//red3
				if (settings.theme=="red3"){
					
					$(".ts_button").css({
						backgroundColor:"#EE3B3B",
					});
					$(".ts_button .icon").css({
						color:"#FFF",
					});	
					$(".ts_c_header").css({
						backgroundColor:"#EE3B3B",
					});						
						
						$('.ts_button').hover(			
					
							function (e) {				
								
								$(this).css({
										backgroundColor:'rgba(238,59,59,0.9)',																					
									});
								
								e.stopPropagation();
							},

							function (e) {												
								
								$(this).css({
										backgroundColor:'#EE3B3B',																							
									});
								
								e.stopPropagation();				
							}			
						
						);//end hover						
					
				}//end if red3 theme								
				/* .......... /Theme ............. */

				/* ... */	
				
			}//end if start true	
			/*......... /start ........... */
			
			/* -- */										
			
		});//end return

	};//end fn

}(jQuery));//end func
