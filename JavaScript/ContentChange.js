function loadNewPage() {
    // Create a new HTML structure
    const newContent = `
        <h1>New Page</h1>
        <p>This is the new content of the page.</p>
        <button onclick="goBack()">Go Back</button>
    `;
    
    // Replace the content of the entire document
    document.getElementById('content').innerHTML = newContent;
}

<<<<<<< Updated upstream:JavaScript/ContentChange.js
function LoadTemplate() {
    // Reload the original content
    const originalContent = `
=======
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link rel="stylesheet" href="/CSS/Style.css">
    <link rel="stylesheet" href="/CSS/About.css">
    <link rel="stylesheet" href="/CSS/Buttons.css">
    <link rel="stylesheet" href="/CSS/ContactInfo.css">
    <link rel="stylesheet" href="/CSS/Education.css">
    <link rel="stylesheet" href="/CSS/Experience.css">
    <link rel="stylesheet" href="/CSS/Hobbies.css">
    <link rel="stylesheet" href="/CSS/Nav.css">
    <link rel="stylesheet" href="/CSS/Phone.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    <!-- JavaScript -->
    <script src="/JavaScript/sideMenu.js"></script>
    <script src="/JavaScript/Tabs.js"></script>
    <script src="/JavaScript/Form.js"></script>

</head>

<body>

    <!-- Navigation Bar -->
    <nav class="navbar">
        <button onclick="openForm()">Open Form</button>

        <div class="form-popup" id="myForm">
            <form action="/submit_form.php" class="form-container">
                <h2>Sign Up</h2>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit" class="btn">Sign Up</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
            </form>
        </div>
        
        <!-- Buttons -->
        <a href="#" class="btn signUp">Sign Up</a>
        <a href="#" class="btn login">Login</a>

        <!-- Search bar -->
        <div class="search-container">
            <form action="/search" method="get">
                <input type="text" placeholder="Search.." name="search">
            </form>
        </div>

        <!-- Sidemenu -->
        <ul id="sidemenu">
            <i class="fas fa-times" onclick="closemenu()"></i>
        </ul>
        <i class="fas fa-bars" onclick="openmenu()"></i>

    </nav>

    <!-- Home -->
    <div id="header">
        <div class="container">
            <div class="header-text">
                <p>Title / Educational Title</p>
                <h1>Full name</h1>
            </div>
        </div>
    </div>

>>>>>>> Stashed changes:index.html
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
    document.getElementById('content').innerHTML = originalContent;
}