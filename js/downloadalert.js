$(document)
		.ready(
				function() {
					var fullbg = $('<div id="fullbg"></div>');
					var dialog = $('<div id="dialog"></div>');
					var close = $('<p class="close"><a href="#" onclick="closeBg();">关闭</a></p>');
					var dialogc = $('<p class="dialog-c"><span class="dialog-c-1"><a href="files/apply.doc" download="单位会员入盟表格">单位会员入盟表格下载</a></span><span class="dialog-c-2"><a href="files/personalapply.docx" download="个人会员入盟表格">个人会员入盟表格下载</a></span></p>');
					$('html').append(fullbg).append(dialog);
					$('#dialog').append(close).append(dialogc);

				});
function showBg() {
	var bh = $("body").height();
	var bw = $("body").width();
	$("#fullbg").css({
		height : bh,
		width : bw,
		display : "block"
	});
	$("#dialog").show("fast", "swing");
}
function closeBg() {
	$("#fullbg,#dialog").hide("fast", "swing");
}
