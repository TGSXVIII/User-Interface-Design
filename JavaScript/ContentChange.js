document.addEventListener("DOMContentLoaded", function () {
    var searchForm = document.getElementById("searchForm");

    // Add event listener for form submission
    searchForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the search term
        var searchTerm = document.getElementById("searchInput").value.toLowerCase();

        // Check if the search term matches "jonas" or "mads"
        if (searchTerm === "jonas") {
            loadJonas();
        } else if (searchTerm === "mads") {
            loadMads();
        }
    });
});

function loadMads() {
    // Create a new HTML structure
    const newHeader = `<p>Programming Student</p>
            <h1> Mads Møller Duly </h1>`;
    const newContent = `<div id="about">
    <div class="container alternative-bg">
        <div class="row">
            <div class="about-col-1">
                <img src="/Pictures/Place Holder.png">
            </div>
            <div class="about-col-2">
                <h1 class="sub-title"> About Me </span> </h1>
                <p style="font-size: large;"> I am a young man at the age of 21 i have a love for technology and puzzle solving </p>

                <!-- Maybe add more tabs -->
                <div class="tab-titles">
                    <p class="tab-links about-links active-link" onclick="opentab('AboTab1', 'about')" style="font-weight: 600;">
                        Strengths </p>
                    <p class="tab-links about-links" onclick="opentab('AboTab2', 'about')" style="font-weight: 600;"> Skills </p>
                </div>

                <div class="tab-contents about-content active-tab" id="AboTab1">
                    <ul>
                        <li><span style="font-size: large; color: white; font-weight: 600;">Creativity</span>
                        <li class="textFont">I am very creative for example i came up with the idea </li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">Decision maker</span>
                        <li class="textFont">I am usualy the decision maker in my teams</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">something 3</span>
                        <li class="textFont">Blah Blah Blah</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">something 4</span>
                        <li class="textFont">Blah Blah Blah</li>
                    </ul>
                </div>

                <div class="tab-contents about-content" id="AboTab2">
                    <ul>
                        <li><span style="font-size: large; color: white; font-weight: 600;">JavaScript</span>
                        <li class="textFont">I love creating different projects in JavaScript i have made my own Who wants to be a milionare but with capitals of different countries</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">Python</span>
                        <li class="textFont">I have made a bunch of different projects in python like my own Worlde and Magic 8 Ball</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">C#</span>
                        <li class="textFont">I have experience with C# through my school</li>
                        <li><span style="font-size: large; color: white; font-weight: 600;">HTML & CSS</span>
                        <li class="textFont">I enjoy making websites like this one and i have made quite a few now</li>
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
                    <p class="tab-links hobbies-links active-link" onclick="opentab('hobTab1', 'hobbies')" style="font-weight: 600;"> Gaming </p>
                    <p class="tab-links hobbies-links" onclick="opentab('hobTab2', 'hobbies')" style="font-weight: 600;"> Training </p>
                    <p class="tab-links hobbies-links" onclick="opentab('hobTab3', 'hobbies')" style="font-weight: 600;"> Reading </p>
                    <p class="tab-links hobbies-links" onclick="opentab('hobTab4', 'hobbies')" style="font-weight: 600;"> Digital design </p>
                </div>

                <!-- Tab contents -->
                <div class="tab-contents hobbies-content active-tab" id="hobTab1">
                    <div class="hobbies-list">
                        <p>I play games with my friends in my spare time</p>
                    </div>
                </div>

                <div class="tab-contents hobbies-content" id="hobTab2">
                    <div class="hobbies-list">
                        <p>I go to the gym with my best friend after work</p>
                    </div>
                </div>

                <div class="tab-contents hobbies-content" id="hobTab3">
                    <div class="hobbies-list">
                        <p>I read books when i need some time alone and to relax</p>
                    </div>
                </div>
                <div class="tab-contents hobbies-content" id="hobTab4">
                    <div class="hobbies-list">
                        <p>I enjoy creating my own versions of my favorite game logos and characters in pixel art</p>
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
                    <p class="tab-links experience-links active-link" onclick="opentab('expTab1', 'experience')" style="font-weight: 600;">My School</p>
                    <p class="tab-links experience-links" onclick="opentab('expTab2', 'experience')" style="font-weight: 600;">IDEAI Barcelona</p>
                    <p class="tab-links experience-links" onclick="opentab('expTab3', 'experience')" style="font-weight: 600;">Mercantec Machine Learning</p>
                    <p class="tab-links experience-links" onclick="opentab('expTab4', 'experience')" style="font-weight: 600;">Mercantec UI Design</p>
                </div>

                <div class="tab-contents experience-content active-tab" id="expTab1">
                    <div class="experience-list">
                        <p>I have experience with different coding languages thanks to the different subject and classes at my school</p>
                    </div>
                </div>

                <div class="tab-contents experience-content" id="expTab2">
                    <div class="experience-list">
                        <p>I went to Barcelona and acted as an intern at IDEAI with some of my colleages where we learnt more about Python</p>
                    </div>
                </div>

                <div class="tab-contents experience-content" id="expTab3">
                    <div class="experience-list">
                        <p>I took Machine Learning at Mercantec where i learnt about creating Machine Learning from the bottom in Python</p>
                    </div>
                </div>

                <div class="tab-contents experience-content" id="expTab4">
                    <div class="experience-list">
                        <p>I took UI Design at Mercantec where we had to design a website that was also phone compatable</p>
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
                    <p class="tab-links education-links active-link" onclick="opentab('eduTab1', 'education')" style="font-weight: 600;">Mercantec</p>
                    <p class="tab-links education-links" onclick="opentab('eduTab2', 'education')" style="font-weight: 600;">Ranum Efterskole College</p>
                </div>

                <div class="tab-contents education-content active-tab" id="eduTab1">
                    <div class="education-list">
                        <p>I am a student at Mercantec where i study programming</p>
                        <p>Start Date: Jan 14 2022</p>
                        <p>End Date: Jan 17 2027</p>
                    </div>
                </div>

                <div class="tab-contents education-content" id="eduTab2">
                    <div class="education-list">
                        <p>I went to Ranum Efterskole College</p>
                        <p>Start Date: Aug 16 2020</p>
                        <p>End Date: Aug 26 2021</p>
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

                <p class="spacing3">Public mail: <a href="" class="link">madsmduly@gmail.com</a></p>
                <p class="spacing3">Private mail: <a href="" class="link">madsduly@gmail.com</a></p>
                <p class="spacing3">Phone number: <a href="" class="link">42 75 07 78</a></p>
            </div>
        </div>
        <a href="#" class="btn goToTop"> Go to top </a>
    </div>
</div>`;

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
        <p>Title / Educational Title</p>
        <h1> Full name </h1>
    `;
    const originalContent = `
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

        <!----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
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
                                <p>Blah Blah Blah 1</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents hobbies-content" id="hobTab2">
                            <div class="hobbies-list">
                                <p>Blah Blah Blah 2</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents hobbies-content" id="hobTab3">
                            <div class="hobbies-list">
                                <p>Blah Blah Blah 3</p>
                            </div>
                            <div class="hobbies-col-2">
                                <img src="/Pictures/Place Holder.png">
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
                            <p class="tab-links experience-links active-link" onclick="opentab('expTab1', 'experience')" style="font-weight: 600;">Experience 1</p>
                            <p class="tab-links experience-links" onclick="opentab('expTab2', 'experience')" style="font-weight: 600;">Experience 2</p>
                            <p class="tab-links experience-links" onclick="opentab('expTab3', 'experience')" style="font-weight: 600;">Experience 3</p>
                        </div>

                        <div class="tab-contents experience-content active-tab" id="expTab1">
                            <div class="experience-list">
                                <p>Blah Blah Blah 1</p>
                            </div>
                            <div class="experience-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents experience-content" id="expTab2">
                            <div class="experience-list">
                                <p>Blah Blah Blah 2</p>
                            </div>
                            <div class="experience-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents experience-content" id="expTab3">
                            <div class="experience-list">
                                <p>Blah Blah Blah 3</p>
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
                                <p>Blah Blah Blah 1</p>
                            </div>
                            <div class="education-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents education-content" id="eduTab2">
                            <div class="education-list">
                                <p>Blah Blah Blah 2</p>
                            </div>
                            <div class="education-col-2">
                                <img src="/Pictures/Place Holder.png">
                            </div>
                        </div>

                        <div class="tab-contents education-content" id="eduTab3">
                            <div class="education-list">
                                <p>Blah Blah Blah 3</p>
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
    `;
    document.getElementById('header-text').innerHTML = originalHeader
    document.getElementById('content').innerHTML = originalContent;
}