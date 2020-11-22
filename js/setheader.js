function setheader(){
    if(document.body.clientWidth<960)
    {
        $('header').load("assets/header/mobile.html")
    }
    else{
        $('header').load("assets/header/desktop.html")
    }
}