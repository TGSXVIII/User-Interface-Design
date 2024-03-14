function loadMads() {
    // Create a new HTML structure
    const newHeader = `
    
    `;
    const newContent = `

    `;

    // Replace the content of the entire document
    document.getElementById('header-text').innerHTML = newHeader
    document.getElementById('content').innerHTML = newContent;
}

function loadJonas() {
    // Create a new HTML structure
    const newHeader = `
    <p>Datatekniker med speciale i programmering</p>
    <h1> Jonas N. Jensen </h1>
    `;
    const newContent = `
    <div id="about">
    <div class="container alternative-bg">
        <div class="row">
            <div class="about-col-1">
                <img src="/Pictures/Place Holder.png">
            </div>
            <div class="about-col-2">
                <h1 class="sub-title"> About Me </span> </h1>
                <p style="font-size: large;"> I'm 26 years old and love puzzles and programming </p>

                <!-- Maybe add more tabs -->
                <div class="tab-titles">
                    <p class="tab-links about-links active-link" onclick="opentab('AboTab1', 'about')" style="font-weight: 600;">
                        Spare Time </p>
                    <p class="tab-links about-links" onclick="opentab('AboTab2', 'about')" style="font-weight: 600;"> Skills </p>
                </div>

                <div class="tab-contents about-content active-tab" id="AboTab1">
                    <ul>
                        <li><span style="font-size: large; color: white; font-weight: 600;">Training</span>
                        <li class="textFont">Even though i dont train much i have some home training equipment</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">programming</span>
                        <li class="textFont">from time to time it happens i think of something that i wonna see if i can make/find a solution to</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">relaxation</span>
                        <li class="textFont">i like to relax by playing pc, watching a movie and solving sudoku</li>
                    </ul>
                </div>

                <div class="tab-contents about-content" id="AboTab2">
                    <ul>
                        <li><span style="font-size: large; color: white; font-weight: 600;">Programming</span>
                        <li class="textFont">i am mainly a backend programmer with experience in c++, c#, html, php, and JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Hobbies -->
<div id="hobbies">
    <div class="container">
        <div class="row">
            <div class="hobbies-col-1">
                <h1 class="sub-title">My Hobbies</h1>

                <!-- Tab titles -->
                <div class="tab-titles">
                    <p class="tab-links hobbies-links active-link" onclick="opentab('hobTab1', 'hobbies')" style="font-weight: 600;"> gaming </p>
                    <p class="tab-links hobbies-links" onclick="opentab('hobTab2', 'hobbies')" style="font-weight: 600;"> puzzles </p>
                </div>

                <!-- Tab contents -->
                <div class="tab-contents hobbies-content active-tab" id="hobTab1">
                    <div class="hobbies-list">
                        <p>i play mainly online co-op games like wow or cs</p>
                    </div>
                    <div class="hobbies-col-2">
                        <img src="/Pictures/Place Holder.png">
                    </div>
                </div>

                <div class="tab-contents hobbies-content" id="hobTab2">
                    <div class="hobbies-list">
                        <p>i like solving puzzles and sudoku, logic puzzles are my favorite and i dont like once where you have to guess</p>
                    </div>
                    <div class="hobbies-col-2">
                        <img src="/Pictures/Tray-blank-puzzle-1.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<!-- Experience -->
<div id="experience">
    <div class="container alternative-bg">
        <div class="row">
            <div class="experience-col-1">

                <h1 class="sub-title">Experience</h1>

                <div class="tab-titles">
                    <p class="tab-links experience-links active-link" onclick="opentab('expTab1', 'experience')" style="font-weight: 600;">SOC Viborg</p>
                    <p class="tab-links experience-links" onclick="opentab('expTab2', 'experience')" style="font-weight: 600;">Spare Time</p>
                </div>

                <div class="tab-contents experience-content active-tab" id="expTab1">
                    <div class="experience-list">
                        <p>in the SOC i have been mainly making php based Web applications but i was allso on a project making a cloud file system</p>
                    </div>
                </div>

                <div class="tab-contents experience-content" id="expTab2">
                    <div class="experience-list">
                        <p>in my spare time i have been making calculators and games mainly </p>
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
                    <p class="tab-links education-links active-link" onclick="opentab('eduTab1', 'education')" style="font-weight: 600;">data og komunikations thisted</p>
                </div>

                <div class="tab-contents education-content active-tab" id="eduTab1">
                    <div class="education-list">
                        <p>jeg tog G2 på thisted erhvervs skole</p>
                        <p>Start Date: ?/?/2021 </p>
                        <p>End Date: 14/1/2022</p>
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

                <p class="spacing3">Public mail: <a href="" class="link">jonas2877364@gmail.com</a></p>
                <p class="spacing3">Private mail: <a href="" class="link">jonas2877364@hotmail.com</a></p>
                <p class="spacing3">Phone number: <a href="" class="link">53 58 40 12</a></p>
            </div>
        </div>
        <a href="#" class="btn goToTop"> Go to top </a>
    </div>
</div>
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