<div class="botui-app-container">
	<div id="my-botui-app">
		<bot-ui></bot-ui>
	</div>
</div>

<script src="engine/bot-interact/interact1-apresenta-sistema/reload/reloadBotFunction.js"></script>
<script src="engine/bot-interact/interact1-apresenta-sistema/comercial/comercialBotFunction.js"></script>
<script src="engine/bot-interact/interact1-apresenta-sistema/suporte/suporteBotFunction.js"></script>

<script>
var botui = new BotUI('my-botui-app');

// Start Bot
// First Messages
botui.message.bot({
    
	content: 'Olá!',
    loading: true,
    delay: 2000,
	
}).then(function () {
    
	return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Qual seu nome?",
    });
	
}).then(function () {
  
	return botui.action.text({
        delay: 1000,
        loading: true,
        addMessage: true,
        action: {
            placeholder: 'Digite aqui...'
        }
    });
	
}).then(function (res) {
	
	return botui.message.bot({
		loading: true,
		delay: 1500,
		content: "Bom ver você por aqui <b>"+res.value+"</b>!",
	});
	
}).then(function () {
    
	return botui.message.bot({
		loading: true,
		delay: 1500,
		content: "Você gostaria de falar sobre Comercial ou Suporte?",
	});
	
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
		
		return botui.message.bot({
			
			loading: true,
			delay: 1500,
			content: "Hoje o sistema atende a 3 áreas. Gostaria de conhecer?",
		
		}).then(function(){		
		
			return botui.action.button({        
				
				delay: 1500,
				loading: true,
				addMessage: true,
				action: [{
					text: 'Sim',
					value: 's'
				}, {
					text: 'Não',
					value: 'n'
				}]		
				
			});//end return
			
		}).then(function (res) {
			
			if (res.value == 's'){
				
				comercialBot();
				
			}//end if s
			
			if (res.value == 'n'){
				
				return botui.message.bot({
			
					loading: true,
					delay: 1500,
					content: "Agradeço, conte comigo.",
				
				});
				
			}//end if n
			
		});//end then func
		
	}//end if comercial
	
	if (res.value == 'suporte'){
		
		suporteBot();
		
	}//end if suporte			
	
});
</script>