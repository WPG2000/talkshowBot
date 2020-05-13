<meta charset="utf-8">

<link rel="stylesheet" type="text/css" href="engine/css/botui-theme-default.css" />
<link rel="stylesheet" type="text/css" href="engine/css/botui.min.css" />
<link rel="stylesheet" type="text/css" href="engine/css/bot-style.css" />
<link rel="stylesheet" type="text/css" href="engine/css/talkShow.css" />
<link rel="stylesheet" type="text/css" href="engine/css/optional-filters.css" />
<link rel="stylesheet" type="text/css" href="engine/css/icons.css" />

<script src="engine/js/jquery-3.3.1.js"></script>
<script src="engine/js/jquery-session.js"></script>
<script src="engine/js/vue.min.js"></script>
<script src="engine/js/botui.min.js"></script>
<script src="engine/js/talkShow.js"></script>

<title>TalkShow Bot</title>

<h1><span style="font-size:39px;color:#0689e6;" class="icon-insert_comment"></span> TalkShow Bot</h1>

<!-- ... -->

<!-- ........................................................ -->
<div class="optional_filters op_filter_2cols">
	<ul>
		<li>			
			<label>
				<span class="icon"></span>
				<span class="text">Layout Model</span>
			</label>
			<select class="select_layout_model">
				<option value="">-- Selecione --</option>		
				<option value="masterTab">masterTab</option>	
				<option value="magickCircle">magickCircle</option>					
			</select>			
		</li>
		
		<li>			
			<label>
				<span class="icon"></span>
				<span class="text">Theme</span>
			</label>
			<select class="select_theme">
				<option value="">-- Selecione --</option>		
				<option value="jade">jade</option>	
				<option value="sky">sky</option>					
				<option value="red1">red1</option>					
				<option value="red2">red2</option>					
				<option value="red3">red3</option>					
			</select>			
		</li>			
		
		<div class="optional_filters_preloader"></div><!-- /optional_filters_preloader -->
		
	</ul>
</div><!-- /optional_filters-->
<!-- ........................................................ -->

<!-- ... -->

<!-- ........................................................ -->
<div class="talkShow">
	
	<button type="button" class="ts_button">
		<li>
			<span class="icon icon-insert_comment"></span>
			<span class="text"></span>
		</li>		
	</button><!-- /ts_button-->
	
	<div class="ts_content">
	
		<div class="ts_c_header">
			<ul>
			
				<div class="ts_c_h_left_side">
					<li>
						<span class="icon icon-chat7 big_size_icon"></span>
						<span class="text"></span>
					</li>

					<li>
						<span class="icon"></span>
						<span class="text big_size_text">Empr<b>esa</b></span>
					</li>

					<li>
						<span class="icon"></span>
						<span class="text normal_size_text"></span>
					</li>
				</div><!-- /ts_c_h_left_side -->
				
				<div class="ts_c_h_right_side">
					<li class="btn_close_ts_c_body">
						<span class="icon icon-cross2"></span>						
					</li>
				</div><!-- /ts_c_h_right_side -->
			</ul>						
		</div><!-- /ts_c_header-->
		
		<div class="ts_c_body"></div><!-- /ts_c_body -->
	
	</div><!-- /ts_content-->
	
</div><!-- /talkShow-->
<!-- ........................................................ -->

<!-- ... -->

<script>
$(document).ready(function(){	

	/* -- */
	
	/* ..................................... */
	var layout_model_choosed_session = $.session.get("layout_model_choosed");					
	
		if (typeof layout_model_choosed_session === "undefined") {		
			
			var layout_model_choosed_session = "magickCircle";		
			
			var select_layout_model_first_label = "-- Selecione -- ";
			$(".select_layout_model option:first-child").html(select_layout_model_first_label);	
			
		}else{
			
			var select_layout_model_first_label = layout_model_choosed_session;
			$(".select_layout_model option:first-child").html(select_layout_model_first_label);	
			
		}
	
	/* ... */
	
	var theme_choosed_session = $.session.get("theme_choosed");
		
		if (typeof theme_choosed_session === "undefined") {		
		
			var theme_choosed_session = "red3";		
			
			var select_theme_first_label = "-- Selecione -- ";
			$(".select_theme option:first-child").html(select_theme_first_label);	
			
		}else{
			
			var select_theme_first_label = theme_choosed_session;
			$(".select_theme option:first-child").html(select_theme_first_label);	
			
		}
	/* ..................................... */
	
	/* -- */

	/* .................. TalkShow ................... */
	$(".talkShow").talkShow({
			
			start:true,
			layoutModel:layout_model_choosed_session, //magickCircle, masterTab
			theme:theme_choosed_session, //jade, sky, red1, red2, red3
			
	});// end talkShow
	/* ................... /TalkShow ................. */
	
	
	
	/* ..................................... */
	$("body").css({
			backgroundPosition:'right bottom',
			transition:'1s cubic-bezier(0.81, -0.43, 0.35, 1.25)',			
	});	
	/* ..................................... */
	
	/* -- */
	
	/* ..................................... */
	$(".select_layout_model").change(function(){
		
		var read_layout_model = $(this).val();
		
		$.session.set("layout_model_choosed", read_layout_model);
		
		$(".optional_filters_preloader").html("<img src='engine/imgs/preloader-gif1.gif'>");
		
		setTimeout(function(){ 
			location.reload();	
		}, 2000);
	});//end change
	
	$(".select_theme").change(function(){
		
		var read_theme = $(this).val();
		
		$.session.set("theme_choosed", read_theme);
		
		$(".optional_filters_preloader").html("<img src='engine/imgs/preloader-gif1.gif'>");
		
		setTimeout(function(){ 
			location.reload();	
		}, 2000);
	});//end change
	/* ..................................... */
	
	/* -- */
	
});//end doc
</script>