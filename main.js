var test ;
function openwindow ()
{
	var width = 700;
	var height = 250;
	var left = (window.innerWidth/2) - (width/2);
    var top = (window.outerHeight/2) - (height/2);
	var windowFeatures = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
	test = window.open("popup.html", "blaze", windowFeatures)
}

setTimeout (openwindow, 10000)

function openLink ()
{window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}