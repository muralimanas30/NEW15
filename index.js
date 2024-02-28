const display_panel = document.getElementById("display");


function appendToDisplay(x){
    display_panel.value+=x;
}

function clearAll(){
    display_panel.value="";
}

function evaluateResult(){
    display_panel.value = eval(display_panel.value);
}

function clearOne(){

    display_panel.value=display_panel.value.substring(0,display_panel.value.length-1);
}