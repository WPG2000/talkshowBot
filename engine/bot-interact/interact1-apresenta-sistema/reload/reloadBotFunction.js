/* ... */

/* ........... function reloadBot ............ */
function reloadBot(){
	
	botui.message.bot({
    
		content: 'Gostaria de mais informações sobre Comercial ou Suporte?',
		loading: true,
		delay: 3000,
		
	}).then(function () {
	  
	  return botui.action.button({
			
			delay: 1500,
			loading: true,
			addMessage: true,
			action: [{
				text: 'Comercial',
				value: 'comercial'
			}, {
				text: 'Suporte',
				value: 'suporte'
			}]
			
		});
		
	}).then(function (res) {					
		
		if (res.value == 'comercial'){
			
			comercialBot();
			
		}//end if
		
		if (res.value == 'suporte'){
			
			suporteBot();
			
		}//end if	
		
	});	
	
}//end func reloadBot()
/* .......... /function reloadBot ............ */

/* -- */