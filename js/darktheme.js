// JQuery does not exists in this website... :V

// https://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

var DarkThemeEnabled = false;
function EnableDarkTheme(){
	var DTheme = document.createElement("link");
	DTheme.href = "css/darktheme.css";
	DTheme.rel = "stylesheets";
	DTheme.type = "text/css";
	DTheme.id = "DTheme";
	document.head.appendChild(DTheme);
	DarkThemeEnabled = true;
}
function DisableDarkTheme(){
	document.getElementById("DTheme").remove();
	DarkThemeEnabled = false;
}
function ToggleDarkTheme(){
	if (DarkThemeEnabled == false) {
		EnableDarkTheme();
	} else if (DarkThemeEnabled == true) {
		DisableDarkTheme();
	}
}
