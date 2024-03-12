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

function LoadTemplate() {
    // Reload the original content
    const originalContent = `
    <!-- About -->
    <div id="about">
        <div class="container alternative-bg">
            <div class="row">
                <div class="about-col-1">
                    <img src="/Pictures/Picture.png">
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
                    <img src="/Pictures/Hobby1.png">
                    <h2>Hobby 1</h2>
                    <p>Blah Blah Blah</p>
                </div>
            </div>
            <div class="tab-contents" id="hobTab2">
                <div class="hobbies-list">
                    <img src="/Pictures/Hobby2.png">
                    <h2>Hobby 2</h2>
                    <p>Blah Blah Blah</p>
                </div>
            </div>
            <div class="tab-contents" id="hobTab3">
                <div class="hobbies-list">
                    <img src="/Pictures/Hobby3.png">
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
                        <img src="/Pictures/Experience1.png">
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
                        <img src="/Pictures/Experience2.png">
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
                        <img src="/Pictures/Experience3.png">
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
    `;
    document.getElementById('content').innerHTML = originalContent;
}