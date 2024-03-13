function loadNewPage() {
    // Create a new HTML structure
    const newHeader = `
    
    `;
    const newContent = `
        <h1>New Page</h1>
        <p>This is the new content of the page.</p>
        <button onclick="goBack()">Go Back</button>
    `;

    // Replace the content of the entire document
    document.getElementById('header-text').innerHTML = newHeader
    document.getElementById('content').innerHTML = newContent;
}

function LoadTemplate() {
    // Reload the original content
    const originalHeader = `
    <div class="header-text">
        <p>Title / Educational Title</p>
        <h1> Full name </h1>
    </div>
    `;
    const originalContent = `
    <!-- About -->
    <div id="about">
        <div class="container alternative-bg">
            <div class="row">
                <div class="about-col-1">
                    <img src="/Pictures/Place Holder.png">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About <span style="color: black;">Me</span></h1>
                    <p style="font-size: large;">Blah Blah Blah</p>
                    <div class="tab-titles">
                        <p class="tab-links active-link" id="AboTab1" onclick="opentab('AboTab1')"
                            style="font-weight: 600;">Info 1</p>
                        <p class="tab-links" id="AboTab2" onclick="opentab('AboTab2')" style="font-weight: 600;">Info 2
                        </p>
                        <p class="tab-links" id="AboTab3" onclick="opentab('AboTab3')" style="font-weight: 600;">Info 3
                        </p>
                        <p class="tab-links" id="AboTab4" onclick="opentab('AboTab4')" style="font-weight: 600;">Info 4
                        </p>
                        <p class="tab-links" id="AboTab5" onclick="opentab('AboTab5')" style="font-weight: 600;">Info 5
                        </p>
                    </div>
                    <div class="tab-contents active-tab" id="AboTab1">
                        <ul>
                            <li><span style="font-size: large; color: white; font-weight: 600;">Something 1</span></li>
                            <li class="textFont">Blah Blah Blah</li>
                            <li><span style="font-size: large; color: white; font-weight: 600;">Something 2</span></li>
                            <li class="textFont">Blah Blah Blah</li>
                            <li><span style="font-size: large; color: white; font-weight: 600;">Something 3</span></li>
                            <li class="textFont">Blah Blah Blah</li>
                            <li><span style="font-size: large; color: white; font-weight: 600;">Something 4</span></li>
                            <li class="textFont">Blah Blah Blah</li>
                        </ul>
                    </div>
                    <!-- Rest of the tab contents -->
                </div>
            </div>
        </div>
    </div>

    <!-- Hobbies -->
    <div id="hobbies">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <h1 class="sub-title">My Hobbies</h1>
                    <div class="tab-titles">
                        <p class="tab-links active-link" id="hobTab1" onclick="opentab('hobTab1')"
                            style="font-weight: 600;">Hobby 1</p>
                        <p class="tab-links" id="hobTab2" onclick="opentab('hobTab2')" style="font-weight: 600;">Hobby 2
                        </p>
                        <p class="tab-links" id="hobTab3" onclick="opentab('hobTab3')" style="font-weight: 600;">Hobby 3
                        </p>
                    </div>
                    <div class="tab-contents active-tab" id="hobTab1">
                        <div class="hobbies-list">
                            <p>Blah Blah Blah</p>
                        </div>
                        <div class="about-col-2">
                            <img src="/Pictures/Place Holder.png">
                        </div>
                    </div>
                    <div class="tab-contents" id="hobTab2">
                        <div class="hobbies-list">
                            <p>Blah Blah Blah</p>
                        </div>
                        <div class="about-col-2">
                            <img src="/Pictures/Place Holder.png">
                        </div>
                    </div>
                    <div class="tab-contents" id="hobTab3">
                        <div class="hobbies-list">
                            <p>Blah Blah Blah</p>
                        </div>
                        <div class="about-col-2">
                            <img src="/Pictures/Place Holder.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Experience -->
    <div id="experience">
        <div class="container alternative-bg">
            <div class="row">
                <div class="about-col-1">
                    <h1 class="sub-title">Experience</h1>
                    <div class="tab-titles">
                        <p class="tab-links active-link" id="expTab1" onclick="opentab('expTab1')"
                            style="font-weight: 600;">Experience 1
                        </p>
                        <p class="tab-links" id="expTab2" onclick="opentab('expTab2')" style="font-weight: 600;">
                            Experience 2</p>
                        <p class="tab-links" id="expTab3" onclick="opentab('expTab3')" style="font-weight: 600;">
                            Experience 3</p>
                    </div>
                    <div class="tab-contents active-tab" id="expTab1">
                        <div class="experience-list">
                            <p>Blah Blah Blah</p>
                        </div>
                        <div class="about-col-2">
                            <img src="/Pictures/Place Holder.png">
                        </div>
                    </div>
                </div>
                <div class="tab-contents" id="expTab2">
                    <div class="experience-list">
                        <p>Blah Blah Blah</p>
                    </div>
                    <div class="about-col-2">
                        <img src="/Pictures/Place Holder.png">
                    </div>
                </div>
            </div>
            <div class="tab-contents" id="expTab3">
                <div class="experience-list">
                    <p>Blah Blah Blah</p>
                </div>
                <div class="about-col-2">
                    <img src="/Pictures/Place Holder.png">
                </div>
            </div>
        </div>
    </div>

    <!-- Education -->
    <div id="education">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <h1 class="sub-title">Education</h1>
                    <div class="tab-titles">
                        <p class="tab-links active-link" id="expTab1" onclick="opentab('eduTab1')"
                            style="font-weight: 600;">Education 1
                        </p>
                        <p class="tab-links" id="expTab2" onclick="opentab('eduTab2')" style="font-weight: 600;">
                            Education 2</p>
                        <p class="tab-links" id="expTab3" onclick="opentab('eduTab3')" style="font-weight: 600;">
                            Education 3</p>
                    </div>
                    <div class="tab-contents active-tab" id="eduTab1">
                        <div class="education-list">
                            <div class="layer">
                                <h3 style="font-size: x-large;">Education 1</h3>
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="about-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>
                    </div>
                    <div class="tab-contents" id="eduTab2">
                        <div class="education-list">
                            <div class="layer">
                                <h3 style="font-size: x-large;">Education 2</h3>
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="about-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>
                    </div>
                    <div class="tab-contents" id="eduTab3">
                        <div class="education-list">
                            <div class="layer">
                                <h3 style="font-size: x-large;">Education 3</h3>
                                <p>Blah Blah Blah</p>
                            </div>
                        </div>
                        <div class="about-col-2">
                            <img src="/Pictures/Place Holder.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact -->
    <div id="contact">
        <div class="container alternative-bg">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p class="spacing3">Public mail: <a href="" class="link">mail@gmail.com</a></p>
                    <p class="spacing3">Private mail: <a href="" class="link">mail@gmail.com</a></p>
                    <p class="spacing3">Phone number: <a href="" class="link">12 34 56 78</a></p>
                </div>
            </div>
            <a href="#" class="btn goToTop">Go to top</a>
        </div>
    </div>
    `;
    document.getElementById('header-text').innerHTML = originalHeader
    document.getElementById('content').innerHTML = originalContent;
}