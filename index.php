<!DOCTYPE html>
<html lang="en">

<head>
    <title> www.mmduly </title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Test </title>

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

    <script src="/JavaScript/About.js"></script>
    <script src="/JavaScript/sideMenu.js"></script>
    <script src="/JavaScript/ContentChange.js"></script>

</head>

<body>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Home -->
    <div id="header">
        <div class="container">
            <nav>
                <ul id="sidemenu">
                    <i class="fas fa-times" onclick="closemenu()"></i>
                    <button onclick=""> </button>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <p>Title / Educational Title</p>
                <h1> Full name </h1>
            </div>
        </div>
    </div>

    <!--------------------------------------------------------------------------------------------------------------------------------------------------->
    <div id=content>
        <!-- About -->
        <div id="about">
            <div class="container alternative-bg">
                <div class="row">
                    <div class="about-col-1">
                        <img src="/Pictures/Place Holder.png">
                    </div>
                    <div class="about-col-2">
                        <h1 class="sub-title"> About <span style="color: black;"> Me </span> </h1>
                        <p style="font-size: large;"> Blah Blah Blah </p>

                        <!-- Maybe add more tabs -->
                        <div class="tab-titles">
                            <p class="tab-links active-link" onclick="opentab('AboTab1')" style="font-weight: 600;">
                                Info 1 </p>
                            <p class="tab-links" onclick="opentab('AboTab2')" style="font-weight: 600;"> Info 2 </p>
                            <p class="tab-links" onclick="opentab('AboTab3')" style="font-weight: 600;"> Info 3 </p>
                            <p class="tab-links" onclick="opentab('AboTab4')" style="font-weight: 600;"> Info 4 </p>
                            <p class="tab-links" onclick="opentab('AboTab5')" style="font-weight: 600;"> Info 5 </p>
                        </div>

                        <div class="tab-contents active-tab" id="AboTab1">
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

                        <div class="tab-contents" id="AboTab2">
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

                        <div class="tab-contents" id="AboTab3">
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

                        <div class="tab-contents" id="AboTab4">
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

                        <div class="tab-contents" id="AboTab5">
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
                    </div>
                </div>
            </div>
            <div class="spacing1"></div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Hobbies -->
        <div id="hobbies">
            <div class="container">
                <h1 class="sub-title">My <span>Hobbies</span></h1>
                <!-- Tab titles -->
                <div class="tab-titles">
                    <p class="tab-links active-link" onclick="opentab('hobTab1')" style="font-weight: 600;"> Hobby 1 </p>
                    <p class="tab-links" onclick="opentab('hobTab2')" style="font-weight: 600;"> Hobby 2 </p>
                    <p class="tab-links" onclick="opentab('hobTab3')" style="font-weight: 600;"> Hobby 3 </p>
                </div>
                <!-- Tab contents -->
                <div class="tab-contents active-tab" id="hobTab1">
                    <div class="hobbies-list">
                        <img src="/Pictures/Place Holder.png">
                        <h2>Hobby 1</h2>
                        <p>Blah Blah Blah</p>
                    </div>
                </div>
                <div class="tab-contents" id="hobTab2">
                    <div class="hobbies-list">
                        <img src="/Pictures/Place Holder.png">
                        <h2>Hobby 2</h2>
                        <p>Blah Blah Blah</p>
                    </div>
                </div>
                <div class="tab-contents" id="hobTab3">
                    <div class="hobbies-list">
                        <img src="/Pictures/Place Holder.png">
                        <h2>Hobby 3</h2>
                        <p>Blah Blah Blah</p>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Experience -->
        <div id="experience">
            <div class="container alternative-bg">
                <h1 class="sub-title"> Experience </h1>
                <!-- Tab titles -->
                <div class="tab-titles">
                    <p class="tab-links active-link" onclick="opentab('expTab1')" style="font-weight: 600;"> Experience 1
                    </p>
                    <p class="tab-links" onclick="opentab('expTab2')" style="font-weight: 600;"> Experience 2 </p>
                    <p class="tab-links" onclick="opentab('expTab3')" style="font-weight: 600;"> Experience 3 </p>
                </div>
                <!-- Tab contents -->
                <div class="tab-contents active-tab" id="expTab1">
                    <div class="work-list">
                        <div class="work">
                            <img src="/Pictures/Place Holder.png">
                            <div class="layer">
                                <h3 style="font-size: x-large;"> Experience 1 </h3>
                                <p> Blah Blah Blah </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-contents" id="expTab2">
                    <div class="work-list">
                        <div class="work">
                            <img src="/Pictures/Place Holder.png">
                            <div class="layer">
                                <h3 style="font-size: x-large;"> Experience 2 </h3>
                                <p> Blah Blah Blah </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-contents" id="expTab3">
                    <div class="work-list">
                        <div class="work">
                            <img src="/Pictures/Place Holder.png">
                            <div class="layer">
                                <h3 style="font-size: x-large;"> Experience 3 </h3>
                                <p> Blah Blah Blah </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--------------------------------------------------------------------------------------------------------------------------------------------------->
        <!-- Contact -->
        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title"> Contact <span> Me </span></h1>

                        <p class="spacing3">Public mail: <a href="" class="link">mail@gmail.com</a></p>
                        <p class="spacing3">Private mail: <a href="" class="link">mail@gmail.com</a></p>
                        <p class="spacing3">Phone number: <a href="" class="link">12 34 56 78</a></p>
                    </div>
                </div>
            </div>
            <a href="#" class="btn goToTop"> Go to top </a>
        </div>
    </div>
</body>

</html>