//iPicture plugin settings
$(document).ready(function(){
  $( "#iPicture" ).iPicture({
    animation: true,
    animationBg: "bgblack",
    animationType: "ltr-slide",
    pictures: ["picture1"],
    button: "moregreen",
    moreInfos:{"picture1":[{"id":"tooltip1","descr":"fresh air","top":"13%","left":"19%"},{"id":"tooltip2","descr":"comfortable houses","top":"65%","left":"20.5%"},{"id":"tooltip3","descr":"a great resting place","top":"62%","left":"61%"},{"id":"tooltip4","descr":"beautiful nature","top":"90%","left":"40%"}]}
  });
});

//adaptive navigation menu
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav-list li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})

	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav-list").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 901) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav-list").hide();
		} else {
			$(".nav-list").show();
		}
		$(".nav-list li").unbind('mouseenter mouseleave');
		$(".nav-list li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if (ww >= 901) {
		$(".toggleMenu").css("display", "none");
		$(".nav-list").show();
		$(".nav-list li").removeClass("hover");
		$(".nav-list li a").unbind('click');
		$(".nav-list li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}

if (ww < 768) {
  $("#iPicture").toggle();
};
