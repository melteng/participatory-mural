var element = document.getElementById("wall-real");
element.scrollTop = element.scrollHeight;

function updateScroll(){
    var element = document.getElementById("wall-real");
    element.scrollTop = element.scrollHeight;
}

setInterval(updateScroll,1000);
