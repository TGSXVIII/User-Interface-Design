function openForm(popupId) {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById(popupId).style.display = "block";
}

function closeForm() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
}
