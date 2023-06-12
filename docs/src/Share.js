// This is the shared code
var sharedCode = `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand Nav_Text_A" href="index.html" style="color:aliceblue;" id="Branding">
            <img src="favicon.ico" width="50px" height="50px" id="NavLogo">
            TheWAMnerds
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link Nav_Text_A" href="aboutus.html">About us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle Nav_Text_A" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: aliceblue;">
                        Content
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Book Reviews</a></li>
                        <li><a class="dropdown-item" href="#">School blogs</a></li>
                        <li><a class="dropdown-item" href="#"> Perspectives </a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

// Function to load the shared code into the specified element
function loadSharedCode() {
    var placeholder = document.getElementById('MyNa');
    placeholder.innerHTML = sharedCode;
}

// Call the function to load the shared code when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSharedCode);
