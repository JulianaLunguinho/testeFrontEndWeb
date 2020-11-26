let fonte = 16;

function zoomIn() {
    if (fonte<25) {
        fonte = fonte+1;
        $("body").css({"font-size" : fonte+"px"});
    }
}

function zoomOut() {
    if (fonte>9){
        fonte = fonte-1;
        $("body").css({"font-size" : fonte+"px"});
    }
}