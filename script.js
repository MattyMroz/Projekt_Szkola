var idInterwalu;

function changeOfHideDiv() {
    idInterwalu = setInterval(assigningHiding, 1);
}

function assigningHiding() {
    var elem1 = document.getElementById("hidden1");
    var elem2 = document.getElementById("hidden2");
    if (window.innerWidth >= 992) {
        elem1.style.display = "";
        elem2.style.display = "none";
    } else {
        elem1.style.display = "none";
        elem2.style.display = "";
    }
}
changeOfHideDiv();