(function() {
  "use strict";
  function a() {
   // c.forEach(e => e.classList.remove('open'));
    this.classList.toggle("open");
    if (this.classList.contains("open")) {
      if (this.classList.contains("port3")) {
        this.innerHTML = `<span>A REST API to store books.</span>
        <h2>Personal Library</h2>
        <a class="img-port" href="https://minggas.github.io/fcc-personal-library/" target="_blank" title="Link to Personal Library Project"
          rel="noreferrer">
          <img src="assets/library.jpg" alt="Screen Personal Library" />
        </a>
        <a href="https://node-library-249212.appspot.com/" class="btn-light" target="_blank" rel="noreferrer">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/fcc-personal-library" target="_blank" class="btn-dark" rel="noreferrer">
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: NodeJs/Express & MongoDb/Mongoose</span>`;
      }
      if (this.classList.contains("port4")) {
        this.innerHTML = `<span>A weather forecast for your location.</span>
      <h2>Weather Forecast</h2>
      <a class="img-port" href="https://minggas.github.io/WeatherForecast" target="_blank" title="Link to Weather Forecast" rel="noreferrer">
        <img src="assets/weather.jpg" alt="Weather Forecast" />
      </a>
      <a href="https://minggas.github.io/WeatherForecast" target="_blank" class="btn-light">
        <i class="fas fa-eye"></i> Project
      </a>
      <a href="https://github.com/minggas/WeatherForecast" target="_blank" class="btn-dark" rel="noreferrer">
        <i class="fab fa-github"></i> Github
      </a>
      <span>Made with: HTML5, CSS3 and Javascript</span>`;
      }
      if (this.classList.contains("port1")) {
        this.innerHTML = `<span>A pomodoro timer made with React.</span>
        <h2>Pomodoro Timer</h2>
        <a class="img-port" href="https://minggas.github.io/react-pomodoro/" target="_blank" title="Link to Pomodoro Timer"
          rel="noreferrer">
          <img src="assets/pomodoro.jpg" alt="Screen of Pomodoro Timer app" />
        </a>
        <a href="https://minggas.github.io/react-pomodoro/" class="btn-light" target="_blank" rel="noreferrer">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/react-pomodoro" class="btn-dark" rel="noreferrer" target="_blank" >
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: HTML5, CSS3 and React</span>`;
      }
      if (this.classList.contains("port2")) {
        this.innerHTML = `<span>A React app to generate random quotes</span>
        <h2>Quote-O-Matic</h2>
        <a class="img-port" href="https://minggas.github.io/react-quotes/" target="_blank" title="Link to Quote-O-Matic"
          rel="noreferrer">
          <img src="assets/quotes.jpg" alt="Screen of Quote-O-Matic app" />
        </a>
        <a href="https://minggas.github.io/react-quotes/" class="btn-light" rel="noreferrer" target="_blank">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/react-quotes" class="btn-dark" rel="noreferrer" target="_blank">
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: HTML5, SCSS and React</span>`;
      }
    } else {
      if (this.classList.contains("port1")) {
        this.innerHTML = `<h2>Pomodoro</h2>`;	     
      }
      if (this.classList.contains("port2")) {
        this.innerHTML = `<h2>Quote-O-Matic</h2>`;
      }
      if (this.classList.contains("port3")) {
        this.innerHTML = `<h2>Personal Library</h2>`;
      }
      if (this.classList.contains("port4")) {
        this.innerHTML = `<h2>Weather Forecast</h2>`;
      }
    }
  }
  function b(d) {
    d.propertyName.includes("flex") && this.classList.toggle("active");
  }
  var c = document.querySelectorAll(".project-tile");
  c.forEach(function(d) {
    return d.addEventListener("click", a);
  }),
    c.forEach(function(d) {
      return d.addEventListener("transitionend", b);
    });
})();
