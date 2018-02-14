

function setColor() {
    var value = $(this).val();
    var container = $("#container");
    if(value == "1") {
        container.css("background-color", "red");
    } else if(value == "2") {
        container.css("background-color", "yellow");
    }
    else if(value == "3") {
        container.css("background-color", "green");
    }
    else if(value == "4") {
        container.css("background-color", "brown");
    }
}


$(document).ready(function() {
    var d = $("#dropdownColor");
    d.change(setColor);
    d.change();
}); 