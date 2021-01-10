let IsitDarckMode = false;
let PressedButtonFlag = 0;
let IsInfoScreenIsOn = false;
let root = document.documentElement;
let h;

function DarkMode() {
    if (!IsitDarckMode) {
        document.body.style.background = "#1e1e1e url('images/night.jpg') no-repeat "; 
        root.style.setProperty("--textColor", "#fff");
        root.style.setProperty("--ButtonBackGround", "#000");
        document.getElementById("1").innerHTML = "Light Mode";
        IsitDarckMode = true;
    }
    else {
        document.body.style.background = "#1e1e1e url('images/175910.jpg') no-repeat "; 
        root.style.setProperty("--textColor", "#000");
        root.style.setProperty("--ButtonBackGround", "#fff");
        document.getElementById("1").innerHTML = "Darck Mode";
        IsitDarckMode = false;
    }
}

    function OnButton1Click()
    {
        if(PressedButtonFlag != 1)
        {
            PressedButtonFlag = 1;
        }
        else 
        {
            PressedButtonFlag = 0;
        }
        OpenInfoWindow();
    }

    function OnButton2Click()
    {
        if(PressedButtonFlag != 2)
        {
            PressedButtonFlag = 2;
        }
        else 
        {
            PressedButtonFlag = 0;
        }
        OpenInfoWindow();
    }

    function OnButton3Click()
    {
        if(PressedButtonFlag != 3)
        {
            PressedButtonFlag = 3;
        }
        else 
        {
            PressedButtonFlag = 0;
        }
        OpenInfoWindow();
    }


function OpenInfoWindow()
{
    if(IsInfoScreenIsOn)
    {
        let myobj = document.getElementById("InfoScreen");
        myobj.remove();
        IsInfoScreenIsOn = false;
    }

    if(PressedButtonFlag == 1 && !IsInfoScreenIsOn)
    {
        root.style.setProperty("--LegendColor", "#15dd25");
        h = document.getElementById("3ButtonsNav");
        h.insertAdjacentHTML("afterend", "<fieldset id ='InfoScreen'><legend id = 'legend'>About me:</legend>  <p> blaaa</p> <p> blaaablaaaaaa</p> <p> blaaalolol</p></fieldset>");
        IsInfoScreenIsOn = true;
    }
    else if(PressedButtonFlag == 2 && !IsInfoScreenIsOn)
    {
        root.style.setProperty("--LegendColor", "#0000ff");
        h = document.getElementById("3ButtonsNav");
        h.insertAdjacentHTML("afterend", "<fieldset id ='InfoScreen'><legend id = 'legend'>My Projects:</legend>  <p> Hard work</p> <p> party Hard</p> <p> HARD PARTY PARTY HARD</p></fieldset>");
        IsInfoScreenIsOn = true;
    }
    else if(PressedButtonFlag == 3 && !IsInfoScreenIsOn)
    {
        root.style.setProperty("--LegendColor", "#ff0000");
        h = document.getElementById("3ButtonsNav");
        h.insertAdjacentHTML("afterend", "<fieldset id ='InfoScreen'><legend id = 'legend'>Contact me:</legend>  <p> 3467745</p> <p> MAIL</p> <p>LinKs</p></fieldset>");
        IsInfoScreenIsOn = true;
    }
    else
    {
        let myobj = document.getElementById("InfoScreen");
        if(myobj != null)
        {
        myobj.remove();
        IsInfoScreenIsOn = false;
        }
    }
}




