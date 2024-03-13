<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

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

    <script src="/JavaScript/Tabs.js"></script>
    <script src="/JavaScript/Tabs.js"></script>
    <script src="/JavaScript/sideMenu.js"></script>
    <script src="/JavaScript/ContentChange.js"></script>
    <script src="/JavaScript/Form.js"></script>

</head>

<body>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Home -->
    <div id="header">
        <!-- Navigation Bar -->
        <nav class="navbar">
            <a href="#" class="btn-left">CV</a>
            <a href="#" class="btn">Sign Up</a>
            <a href="#" class="btn">Login</a>

            <!-- Search bar -->
            <div class="search-container">
                <form action="/search" method="get">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

            <ul id="sidemenu">
                <i class="fas fa-times" onclick="closemenu()"></i>
            </ul>
            <i class="fas fa-bars" onclick="openmenu()"></i>
        </nav>

        <div class="header-text">
            <p>Title / Educational Title</p>
            <h1> Full name </h1>
        </div>
    </div>

    <!--------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- About -->
    <div id=content>
        <div id="about">
            <div class="container alternative-bg">
                <div class="row">
                    <div class="about-col-1">
                        <img src="/Pictures/Place Holder.png">
                    </div>
                    <div class="about-col-2">
                        <h1 class="sub-title"> About Me </span> </h1>
                        <p style="font-size: large;"> Blah Blah Blah </p>

                        <!-- Maybe add more tabs -->
                        <div class="tab-titles">
                            <p class="tab-links about-links active-link" onclick="opentab('AboTab1', 'about')" style="font-weight: 600;">
                                Info 1 </p>
                            <p class="tab-links about-links" onclick="opentab('AboTab2', 'about')" style="font-weight: 600;"> Info 2 </p>
                            <p class="tab-links about-links" onclick="opentab('AboTab3', 'about')" style="font-weight: 600;"> Info 3 </p>
                            <p class="tab-links about-links" onclick="opentab('AboTab4', 'about')" style="font-weight: 600;"> Info 4 </p>
                            <p class="tab-links about-links" onclick="opentab('AboTab5', 'about')" style="font-weight: 600;"> Info 5 </p>
                        </div>

                        <div class="tab-contents about-content active-tab" id="AboTab1">
                            <ul>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 1</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 2</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 3</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 4</span>
                                <li class="textFont">Blah Blah Blah</li>
                            </ul>
                        </div>

                        <div class="tab-contents about-content" id="AboTab2">
                            <ul>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 5</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 6</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 7</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 8</span>
                                <li class="textFont">Blah Blah Blah</li>
                            </ul>
                        </div>

                        <div class="tab-contents about-content" id="AboTab3">
                            <ul>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 9</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 10</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 11</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 12</span>
                                <li class="textFont">Blah Blah Blah</li>
                            </ul>
                        </div>

                        <div class="tab-contents about-content" id="AboTab4">
                            <ul>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 13</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 14</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 15</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 16</span>
                                <li class="textFont">Blah Blah Blah</li>
                            </ul>
                        </div>

                        <div class="tab-contents about-content" id="AboTab5">
                            <ul>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 17</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 18</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 19</span>
                                <li class="textFont">Blah Blah Blah</li>
                                <li><span style="font-size: large; color: white; font-weight: 600;">something 20</span>
                                <li class="textFont">Blah Blah Blah</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Hobbies -->
        <div id="hobbies">
            <div class="container">
                <div class="row">
                    <div class="hobbies-col-1">
                        <h1 class="sub-title">My Hobbies</h1>

                        <!-- Tab titles -->
                        <div class="tab-titles">
                            <p class="tab-links hobbies-links active-link" onclick="opentab('hobTab1', 'hobbies')" style="font-weight: 600;"> Hobby 1 </p>
                            <p class="tab-links hobbies-links" onclick="opentab('hobTab2', 'hobbies')" style="font-weight: 600;"> Hobby 2 </p>
                            <p class="tab-links hobbies-links" onclick="opentab('hobTab3', 'hobbies')" style="font-weight: 600;"> Hobby 3 </p>
                        </div>

                        <!-- Tab contents -->
                        <div class="tab-contents hobbies-content active-tab" id="hobTab1">
                            <div class="hobbies-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents hobbies-content" id="hobTab2">
                            <div class="hobbies-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents hobbies-content" id="hobTab3">
                            <div class="hobbies-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Experience -->
        <div id="experience">
            <div class="container alternative-bg">
                <div class="row">
                    <div class="experience-col-1">

                        <h1 class="sub-title">Experience</h1>

                        <div class="tab-titles">
                            <p class="tab-links experience-links active-link" onclick="opentab('expTab1', 'experience')" style="font-weight: 600;">Experience 1</p>
                            <p class="tab-links experience-links" onclick="opentab('expTab2', 'experience')" style="font-weight: 600;">Experience 2</p>
                            <p class="tab-links experience-links" onclick="opentab('expTab3', 'experience')" style="font-weight: 600;">Experience 3</p>
                        </div>

                        <div class="tab-contents experience-content active-tab" id="expTab1">
                            <div class="experience-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="experience-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents experience-content" id="expTab2">
                            <div class="experience-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="experience-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents experience-content" id="expTab3">
                            <div class="experience-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="experience-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Education -->
        <div id="education">
            <div class="container">
                <div class="row">
                    <div class="education-col-1">

                        <h1 class="sub-title">Education</h1>

                        <div class="tab-titles">
                            <p class="tab-links education-links active-link" onclick="opentab('eduTab1', 'education')" style="font-weight: 600;">Education 1</p>
                            <p class="tab-links education-links" onclick="opentab('eduTab2', 'education')" style="font-weight: 600;">Education 2</p>
                            <p class="tab-links education-links" onclick="opentab('eduTab3', 'education')" style="font-weight: 600;">Education 3</p>
                        </div>

                        <div class="tab-contents education-content active-tab" id="eduTab1">
                            <div class="education-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="education-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents education-content" id="eduTab2">
                            <div class="education-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="education-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents education-content" id="eduTab3">
                            <div class="education-list">
                                <p>Blah Blah Blah</p>
                            </div>
                            <div class="education-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Contact -->
        <div id="contact">
            <div class="container alternative-bg">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title"> Contact Me </h1>

                        <p class="spacing3">Public mail: <a href="" class="link">mail@gmail.com</a></p>
                        <p class="spacing3">Private mail: <a href="" class="link">mail@gmail.com</a></p>
                        <p class="spacing3">Phone number: <a href="" class="link">12 34 56 78</a></p>
                    </div>
                </div>
                <a href="#" class="btn goToTop"> Go to top </a>
            </div>
        </div>
    </div>
</body>

</html>