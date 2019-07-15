(function() {
  "use strict";
  function a() {
    this.classList.toggle("open");
    if (this.classList.contains("open")) {
      if (this.classList.contains("port1")) {
        this.innerHTML = `<span>A simple Simon Game made as part of FreeCodeCamp course.</span>
        <h2>Simon Game</h2>
        <a class="img-port" href="https://minggas.github.io/simon-js/" target="_blank" title="Link to Simon Game"
          rel="noreferrer">
          <img src="assets/simon.jpg" alt="Screen of Simon Game app" />
        </a>
        <a href="https://minggas.github.io/simon-js/" class="btn-light" rel="noreferrer">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/simon-js" class="btn-dark" rel="noreferrer">
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: HTML5, CSS3 and Vanilla JS</span>`;
      }
      if (this.classList.contains("port2")) {
        this.innerHTML = `<span>A search app for wikipedia made as part of FreeCodeCamp
        course.</span>
      <h2>WikiSearch</h2>
      <a class="img-port" href="https://minggas.github.io/wikisearch/" target="_blank" title="Link to WikiSearch" rel="noreferrer">
        <img src="assets/wikisearch.jpg" alt="Screen of WikiSearch app" />
      </a>
      <a href="https://minggas.github.io/wikisearch/" class="btn-light" rel="noreferrer">
        <i class="fas fa-eye"></i> Project
      </a>
      <a href="https://github.com/minggas/wikisearch" class="btn-dark" rel="noreferrer">
        <i class="fab fa-github"></i> Github
      </a>
      <span>Made with: HTML5, CSS3 and JQuery</span>`;
      }
      if (this.classList.contains("port3")) {
        this.innerHTML = `<span>A pomodoro timer made with React.</span>
        <h2>Pomodoro Timer</h2>
        <a class="img-port" href="https://minggas.github.io/react-pomodoro/" target="_blank" title="Link to Pomodoro Timer"
          rel="noreferrer">
          <img src="assets/pomodoro.jpg" alt="Screen of Pomodoro Timer app" />
        </a>
        <a href="https://minggas.github.io/react-pomodoro/" class="btn-light" rel="noreferrer">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/react-pomodoro" class="btn-dark" rel="noreferrer">
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: HTML5, CSS3 and React</span>`;
      }
      if (this.classList.contains("port4")) {
        this.innerHTML = `<span>A React app to generate random quotes</span>
        <h2>Quote-O-Matic</h2>
        <a class="img-port" href="https://minggas.github.io/react-quotes/" target="_blank" title="Link to Quote-O-Matic"
          rel="noreferrer">
          <img src="assets/quotes.jpg" alt="Screen of Quote-O-Matic app" />
        </a>
        <a href="https://minggas.github.io/react-quotes/" class="btn-light" rel="noreferrer">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="https://github.com/minggas/react-quotes" class="btn-dark" rel="noreferrer">
          <i class="fab fa-github"></i> Github
        </a>
        <span>Made with: HTML5, SCSS and React</span>`;
      }
    } else {
      if (this.classList.contains("port1")) {
        this.innerHTML = `<h2>Simon Game</h2>`;
      }
      if (this.classList.contains("port2")) {
        this.innerHTML = `<h2>WikiSearch</h2>`;
      }
      if (this.classList.contains("port3")) {
        this.innerHTML = `<h2>Pomodoro Timer</h2>`;
      }
      if (this.classList.contains("port4")) {
        this.innerHTML = `<h2>Quote-O-Matic</h2>`;
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
