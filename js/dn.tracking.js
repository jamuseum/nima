$(document).ready(function(){
	function getLinkText(obj)
	{
		var linkText;

		if ($(obj).text() != "")
		{
			linkText = $(obj).text();
		}
		else if (($(obj).text() === "") && ($(obj).children("img") != "") && ($(obj).children("img").prop("alt") != ""))
		{
			linkText = $(obj).children("img").prop("alt");
		}
		else if (($(obj).text() === "") && ($(obj).children("img") != "") && ($(obj).children("img").prop("alt") === ""))
		{
			linkText = $(obj).children("img").prop("src").split("/").pop();
		}

		return linkText;
	} // getLinkText()

	var url = location.href.replace(/^.*\/\/[^\/]+/,"");
	var host = location.host.replace(/\\./, "\\.");

	var fileTypes = /\.doc$|\.xls$|\.pdf$|\.oft$/i;
	var pattern = new RegExp("^(http\:\/\/)*(www\.)*(" + host + ")*\/", "i");
	var fileName = "";

	$("a").bind("click",function(){
		ga('send', 'event', 'link', 'click', getLinkText($(this)));

	    if($(this).prop("href").match(fileTypes))
	    {
	        var fileType = $(this).prop("href").match(fileTypes).toString().replace(".", "").toLowerCase();
	        fileName = $(this).prop("href").replace(pattern,"");

	        ga('send', 'event', fileType, "download", "/" + fileName);
	    }
	});

	$("#header a").bind("click",function(){
		ga('send', 'event', 'header', 'click', getLinkText($(this)));
	});

	$("#header ul.sf-menu > li > a").hover(function(){
		ga('send', 'event', 'header', 'hover', getLinkText($(this)));
	});

	$("#header form").bind("submit",function(){
		ga('send', 'event', 'header', 'search', $(this).find("input[name='q']").val());
	});

	$("#breadcrumbs a").bind("click",function(){
		ga('send', 'event', 'breadcrumbs', 'click', getLinkText($(this)));
	});

	$("#primary a").bind("click",function(){
		ga('send', 'event', 'primary', 'click', getLinkText($(this)));
	});

	$("#secondary a").bind("click",function(){
		ga('send', 'event', 'secondary', 'click', getLinkText($(this)));
	});

	$("#tertiary a").bind("click",function(){
		ga('send', 'event', 'tertiary', 'click', getLinkText($(this)));
	});

	$("#tertiary form").bind("submit",function(){
		ga('send', 'event', 'tertiary', 'newsletter', $(this).find("input[name='ea']").val());
	});

	$("#footer a").bind("click",function(){
		ga('send', 'event', 'footer', 'click', getLinkText($(this)));
	});

	// journal

	$("#journal_navigation a").bind("click",function(){
		ga('send', 'event', 'journal_navigation', 'click', getLinkText($(this)));
	});

	$("#journal_content a").bind("click",function(){
		ga('send', 'event', 'journal_content', 'click', getLinkText($(this)));
	});

	$("#article-header a").bind("click",function(){
		ga('send', 'event', 'article-header', 'click', getLinkText($(this)));
	});

	$(".pagination_nav a").bind("click",function(){
		ga('send', 'event', 'pagination', 'click', getLinkText($(this)));
	});

	$("#article-share a").bind("click",function(){
		ga('send', 'event', 'article-share', 'click', getLinkText($(this)));
	});

	$("#journal_sidebar a").bind("click",function(){
		ga('send', 'event', 'journal_sidebar', 'click', getLinkText($(this)));
	});

	$("#journal_sidebar form").bind("submit",function(){
		ga('send', 'event', 'journal_sidebar', 'search', $(this).find("input[name='keywords']").val());
	});

	$("#journal_promos a").bind("click",function(){
		ga('send', 'event', 'journal_promos', 'click', getLinkText($(this)));
	});

	$("#journal_promos form").bind("submit",function(){
		ga('send', 'event', 'journal_promos', 'newsletter', $(this).find("input[name='ea']").val());
	});

	$("#journal_footer_wall a").bind("click",function(){
		ga('send', 'event', 'journal_footer_wall', 'click', getLinkText($(this)));
	});

	$("#home_footer_wall a").bind("click",function(){
		ga('send', 'event', 'journal_footer_wall', 'click', getLinkText($(this)));
	});
});  // ready