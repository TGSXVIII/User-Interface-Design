function opentab(tabname, section) {
    //finds the tabs that the user interacted with
    var TabLinks = document.getElementsByClassName(section + "-links");
    var TabContents = document.getElementsByClassName(section + "-content");

    // Close tabs in the same section
    for (tablink of TabLinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of TabContents) {
        tabcontent.classList.remove("active-tab");
    }

    //activates the tab and content that the user requested
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}