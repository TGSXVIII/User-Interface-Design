function opentab(tabname, section) {
    var TabLinks = document.getElementsByClassName(section + "-links");
    var TabContents = document.getElementsByClassName(section + "-content");

    // Close tabs in the same section
    for (tablink of TabLinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of TabContents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}