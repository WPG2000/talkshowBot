/* -- */

/* ........... function suporteBot ............ */
function suporteBot(){
	
	botui.message.bot({
    
		content: 'Vamos falar sobre o suporte.',
		loading: true,
		delay: 3000,
		
	}).then(function(){
					
			return botui.action.button({        
		
				delay: 1500,
				loading: true,
				addMessage: true,
				action: [{
					text: 'Suporte1',
					value: 'suporte1'
				},{
					text: 'Suporte2',
					value: 'suporte2'
				}]
				
			});//end return	
			
		}).then(function(res){
			
			if (res.value == 'suporte1'){									
					
				return botui.message.bot({
		
					loading: true,
					delay: 10,
					content: "Lorem ipsum suporte1...",
																			
				}).then(function(){
												
					reloadBot();
				
				});//end then func																	
				
			}//end if modulo_aluguel
			
		});//end then func
	
}//end func suporteBot
/* .......... /function suporteBot ............ */

/* -- */