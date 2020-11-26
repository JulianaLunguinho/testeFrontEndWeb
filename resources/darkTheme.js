let darkThemeIsOn = false;

function changeDarkTheme() {
    if(!darkThemeIsOn) {
        $("body").addClass("darkTheme");
        $(".rodape").css({color:"rgb(238, 238, 238)", backgroundColor: "rgba(0, 0, 0, 0.89)" });

        darkThemeIsOn = true;       
    } else {
        $("body").removeClass("darkTheme");
        $(".rodape").css({color:"rgb(77, 77, 77)", backgroundColor: "rgba(170, 170, 170, 0.568)" });

        darkThemeIsOn = false;
    }

}

