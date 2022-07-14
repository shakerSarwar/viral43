
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="nav-container">
      <nav class="container">
        <div class="nav-wrapper">
          <div class="nav-left">
            <i class="fa-solid fa-bars" id="side-menu"></i>
            <div class="logo font-lulo">
              <span class="viral">viral</span>
              <span class="forty-three">43</span>
            </div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="nav-middle">
            <span>Feed</span>
            <span>Promote Six</span>
            <span>My Pages</span>
            <span>Earning Report</span>
          </div>
          <div class="nav-right">
            <i class="fa-solid fa-plus plus-icon"></i>

            <!-- <a
              href="./login.html"
              class="login-button d-flex align-items-center justify-content-center"
              >login</a
            > -->
            <a href="./login.html" class="log-cart mt-1 px-2 ms-">
              <img src="./images/cart1.webp" alt="" />
            </a>
            <div class="log-avatar-container">
              <button class="log-avatar-wrapper ms-3">
                <img class="avatar" src="./images/2601.jpg" alt="" />
              </button>
              <div class="proile-menu">
                <a href="#">My Post</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div
      id="desctop-site-menu"
      class="desctop-site-menu hide-desctop-site-menu"
    >
      <div class="desctop-site-menu-after-log-in">
        <div class="position-relative">
          <!-- menu close button start -->
          <div class="close-menu">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <!-- menu close button End -->

          <!-- Single Side Menu Start-->
          <div class="single-menu">
            <a href="#">
              <!-- <span class="menu-icon">  -->
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <!-- </span> -->
              <span class="menu-text">Home</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Feed</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Promote Six (a)</span>
            </a>
          </div>

          <div class="single-menu active-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">My Pages</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Earning Report</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">New Page</span>
            </a>
          </div>

          <hr class="mx-4 my-2" />

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">About Us</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Contact Us</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Privacy Policy</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Terms of Use</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Help Center</span>
            </a>
          </div>

          <div class="single-menu">
            <a href="#">
              <span><i class="fa-solid fa-house-blank menus-icon"></i></span>
              <span class="menu-text">Seller Agreement</span>
            </a>
          </div>
          <!-- Single Side Menu Start-->
        </div>
      </div>
    </div>
        `
    }
    
}


customElements.define("my-header", MyHeader)