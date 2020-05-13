/* -- */

/* ........... function comercialBot ............ */
function comercialBot(){
	
	botui.message.bot({
    
		content: 'Sobre qual módulo você gostaria de mais informações?',
		loading: true,
		delay: 3000,
		
	}).then(function(){
					
			return botui.action.button({        
		
				delay: 1500,
				loading: true,
				addMessage: true,
				action: [{
					text: 'Módulo1',
					value: 'modulo_aluguel'
				},{
					text: 'Módulo2',
					value: 'modulo_vendas'
				},{
					text: 'Módulo3',
					value: 'modulo_financ_empresa'
				},{
					text: 'Todos',
					value: 'modulo_todos'
				}]				
			});//end return	
			
		}).then(function(res){
			
			if (res.value == 'modulo_aluguel'){
					
				setTimeout(function(){ 
					window.open("http://google.com.br");
				}, 1000);
					
				return botui.message.bot({
		
					loading: true,
					delay: 10,
					content: "Vou direcionar você para a página de <b>Aluguél</b>.",
																			
				}).then(function(){
												
					reloadBot();
				
				});//end then func																	
				
			}//end if modulo_aluguel

			if (res.value == 'modulo_vendas'){
					
				setTimeout(function(){ 
					window.open("http://google.com.br");
				}, 1000);
					
				return botui.message.bot({
		
					loading: true,
					delay: 10,
					content: "Vou direcionar você para a página de <b>Vendas</b>.",
																			
				}).then(function(){
												
					reloadBot();
				
				});//end then func																	
				
			}//end if modulo_vendas	
						
			if (res.value == 'modulo_financ_empresa'){
					
				setTimeout(function(){ 
					window.open("http://google.com.br");
				}, 1000);
					
				return botui.message.bot({
		
					loading: true,
					delay: 10,
					content: "Vou direcionar você para a página de <b>Financeiro Empresa</b>.",
																			
				}).then(function(){
												
					reloadBot();
				
				});//end then func																	
				
			}//end if modulo_financ_empresa
			
			if (res.value == 'modulo_todos'){
					
				setTimeout(function(){ 
					window.open("http://google.com.br");
				}, 1000);
					
				return botui.message.bot({
		
					loading: true,
					delay: 10,
					content: "Vou direcionar você para a página de <b>Todos os Módulos.</b>.",
																			
				}).then(function(){
												
					reloadBot();
				
				});//end then func																	
				
			}//end if modulo_todos
				
		});//end then func
	
}//end func comercialBot
/* .......... /function comercialBot ............ */

/* -- */