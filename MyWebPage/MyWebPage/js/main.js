function DarkMode() {


    var color = document.getElementsByTagName("h1")[0].style.color ;


    if (color == "black") {
        document.body.style.background = "#1e1e1e url('images/night.jpg') no-repeat "; 
        document.getElementsByTagName("h1")[0].style.color = "#fff";
        var pElements = document.getElementsByTagName("p");
        for (var i = 0; i < pElements.length; i++) {
            pElements[i].style.color = "#fff";
        }
    }
    else {
        document.body.style.background = "#1e1e1e url('images/day.jpg') no-repeat "; 
        document.getElementsByTagName("h1")[0].style.color = "black";
        var pElements = document.getElementsByTagName("p");
        for (var i = 0; i < pElements.length; i++) {
            pElements[i].style.color = "black";
        }

    }
}





