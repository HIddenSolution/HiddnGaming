import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="parent">
  <div class="div1">
    <img id="logo" src="./Assets/newLogo.PNG" />
    <nav>
      <ul id="navMenu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a class="dropdown" href="/">Games</a>
          <div class="dropdownContent">
            <a href="/">Xbox</a><br>
            <a href="/">PC</a>
          </div></li>
        <li><a href="/">Servers</a></li>
        <li><a href="
        https://l.facebook.com/l.php?u=https%3A%2F%2Fdiscord.gg%2FdCuQJdAC%3Ffbclid%3DIwAR3y-eN0ewtSxC8HIZnDi6nmdO6ENWu-i2PZjtFzuJRkWKqSqKlrw1bDO_M&h=AT2Ao8Q5DpSvS6OANOroGDzQ-wcfWDmfgzRva3G5KYuYr76_6shWEu7qAFBkfpbrTfw8auq5y1BnqWVYQm07DuXTvYjnnm9Rn2w43lD9Xam1ZU-0VgRwVyRvTDui6DSgweBtAZuS7BuV5qY
        ">
        Join my Discord</a></li>
      </ul>
    </nav>
    <div id="scroll-container">
      <div id="scroll-text">Join my discord server and lets jump on a game. =)</div>
    </div>
  </div>

  <div class="div2">
    <fieldset id="personalLinks">
      <fieldset id="personalInner">
        <ul id="pInfo">
          <br>
          <li>Xbox Live GT: Hiddn6169</li><br>
          <li>Discord Username: Hiddn</li><br>
          <li>Steam Username: Hiddn</li><br>
        </ul>
      </fieldset>
    </fieldset>
  </div>

  <div class="div3">
    <fieldset id="events">
      <fieldset id="eventsInner">
        <ul id="eInfo">
          <li>Forza Tandem<br>Drifting</li><br>
          <li>Sea of Theives</li><br>
          <li>Grounded</li><br>
          <li>Call of Duty</li><br>
          <li>Madden</li><br>
          <li>Asseto Corsa</li><br>
        </ul>
      </fieldset>
    </fieldset>
  </div>
  
  <div class="div4">
    
  </div>

  <div class="div5">
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a class="linkedIn" href="https://www.linkedin.com/in/hiddn">
            <i class="icon ion-social-linkedIn">
            </i>
          </a>
          <a class="github" href="https://github.com/HIddenSolution">
            <i class="icon ion-social-github">
            </i>
          </a>
          <a class="steam" href="#">
            <i class="icon ion-social-steam">
            </i>
          </a>
          <a href="#">
            <i class="icon ion-social-facebook">
            </i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Home</a></li>
          <li class="list-inline-item"><a href="#">Services</a></li>
          <li class="list-inline-item"><a href="#">About</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">HiddN GaminG © 2023</p>
      </footer>
    </div>
  </div>
</div>
`;
