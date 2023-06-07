<?php

// Switch to HTML mode
?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="Main.css">
</head>
<body>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand Nav_Text_A" href="#" style="color: aliceblue;" id="Branding">
            <img src="favicon.ico" width="50px" height="50px" id="NavLogo">
            The WAM Nerds
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link Nav_Text_A" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link Nav_Text_A" href="aboutus.html">About us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle Nav_Text_A" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Content</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Book Reviews</a></li>
                        <li><a class="dropdown-item" href="#">School blogs</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Educational resources</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search" id="Search_Engine">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button id="SearchButton" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</body>
<?php

?>
  

