class Navbar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
          
          *
          {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          
          .hide-menu-if-clicked{
              display: none;
              flex-direction: column;
              justify-content: space-between;
          }
          .navbar{
              display: flex;
              flex-wrap: wrap;
              overflow: hidden;
              background-color: #04AA6D;
          }
          .logo{
              width: 10em;
              height: 4em;
              padding: 0.5em;
          }
          .hamburger{
              margin: auto;
              margin-right: 1%;
          }
          
          .right{
              float: right;
          }
          
          .menu-not-phone{
              display: none;
          }
          
          .hamburger span {
              cursor: pointer;
              display: block;
              width: 35px;
              height: 3px;
              margin: 6px auto;
              background-color: white;
              transition: all 0.3s ease-in-out;
          }
          
          .site-name-home-page{
              color: white;
              padding: 22px 16px;
              text-decoration: none;
              font-size: 17px;
          }

          a.site-name-home-page:hover{
            background-color:rgb(169, 193, 213);
              color: black;
          }
            
          .hide-menu-if-clicked  a {
              color:white;
              background-color: #58927d;
              padding: 14px 0px;
              text-decoration: none;
              font-size: 17px;
              display: block;
          }
          
          .hide-menu-if-clicked a:hover {
              background-color:rgb(169, 193, 213);
              color: black;
          }
          
          .carousel-container{
              display: none;
          }
          .slide-object{
              display: none;
          }
          
          .prev,.next{
              cursor: pointer;
              position: absolute;
              top: 50%;
              width: auto;
              margin-top: -22px;
              padding: 16px;
              color: white;
              font-weight: bold;
              font-size: 18px;
              transition: 0.6s ease;
              border-radius:  0 3px 3px 0;
              user-select: none;
          }
          
          .next {
              right: 0;
              border-radius: 3px 0 0 3px;
            }
            
            .prev:hover, .next:hover {
              background-color: rgba(0,0,0,0.8);
            }
          
            .dots{
              display: none;
          }
          
          .number-of-carousel-text{
              color: black;
              font-size: 12px;
              padding: 8px 12px;
              position: absolute;
              top: 0;
          }
          
          .dot {
              cursor: pointer;
              height: 15px;
              width: 15px;
              margin: 0 2px;
              background-color: #bbb;
              border-radius: 50%;
              display: inline-block;
              transition: background-color 0.6s ease;
            }
          
            .active, .dot:hover{
              background-color: #04AA6D;
            }
          
          /*desktop*/
          @media (min-width: 1024px){
              .hide-menu-if-clicked{
                  display: none;
              }
              .hamburger{
                  display: none;
              }
              .carousel-container{
                  max-width: 100%;
                  position: relative;
                  margin: auto;
                  display: block;
              }
              .dots{
                  text-align: center;
                  display: block;
              }
              .menu-not-phone  a {
                  color:white;
                  padding: 21px 20px;
                  text-decoration: none;
                  font-size: 17px;
                  display: block;
              }
              
              .menu-not-phone a:hover {
                  background-color:rgb(169, 193, 213);
                  color: black;
              }
          
              .menu-not-phone{
                  display: flex;
                  margin-left: auto;
              }
          }
          /*tableta*/
          @media (min-width: 768px) and (max-width: 1023px){
              .hide-menu-if-clicked{
                  display: none;
              }
              .hamburger{
                  display: none;
              }
              .carousel-container{
                  display: none;
              }
              .dots{
                  display: none;
              }
              .menu-not-phone  a {
                  color:white;
                  padding: 21px 20px;
                  text-decoration: none;
                  font-size: 0.9em;
                  display: block;
              }
              
              .menu-not-phone a:hover {
                  background-color:rgb(169, 193, 213);
                  color: black;
              }
          
              .menu-not-phone{
                  display: flex;
                  margin-left: auto;
              }
          }
          
          .fade {
              animation-name: fade;
              animation-duration: 1.5s;
            }
          
          @keyframes fade {
              from {opacity: .4}
              to {opacity: 1}
            }
          </style>
          <head>
<nav>
  <div class="navbar">
      <img src="./images/logo-lazareni.jpeg" class="logo">
      <a class = "site-name-home-page" href="index.html" name="link" target="_blank">
          Calea Mare
      </a>
      <div class="menu-not-phone" id="menu-options-not-phone">  
          <a href="obiective-turistice.html" name="link" target="_blank">
              Obiective turistice
          </a>
          <a href="cazare.html" target="_blank" name="link">
              Cazare
          </a>
          <a href="evenimente.html" target="_blank" name="link">
              Evenimente
          </a>
          <a href="contact.html" target="_blank" name="link">
              Contact
          </a>
      </div>  
      <div class="hamburger" onclick="clickMenuIcon()">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>
  <div class="hide-menu-if-clicked" id="menu-options">  
      <a href="obiective-turistice.html" name="link" target="_blank">
          Obiective turistice
      </a>
      <a href="cazare.html" target="_blank" name="link">
          <div>
              Cazare
          </div>
      </a>
      <a href="evenimente.html" target="_blank" name="link">
          <div>
              Evenimente
          </div>
      </a>
      <a href="contact.html" target="_blank" name="link">
          <div>
              Contact
          </div>
      </a>
  </div>
</nav>`;
    }
}

customElements.define('navigation-component', Navbar);