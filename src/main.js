"use strict";
(function() {
  "use strict";
  function a() {
    var j = document.body.clientWidth;
    700 > j
      ? (f.classList.add("mobile"), g.classList.add("mobile"))
      : f.classList.contains("mobile") &&
        g.classList.contains("mobile") &&
        (f.classList.remove("mobile"), g.classList.remove("mobile"));
  }
  function d() {
    f.classList.toggle("show"), g.classList.toggle("close");
  }
  var f = document.querySelector(".collapse-menu"),
    g = document.querySelector(".nav-toggler"),
    h = document.querySelectorAll(".section"),
    i = document.querySelectorAll(".nav-link");
  window.addEventListener("resize", a),
    i.forEach(function(j) {
      return j.addEventListener("click", d);
    }),
    g.addEventListener("click", d),
    window.addEventListener(
      "scroll",
      (function(j) {
        var l =
            1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 10,
          m =
            2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0,
          k;
        return function() {
          var n = this,
            o = arguments,
            q = m && !k;
          clearTimeout(k),
            (k = setTimeout(function p() {
              (k = null), m || j.apply(n, o);
            }, l)),
            q && j.apply(n, o);
        };
      })(function() {
        20 < window.scrollY
          ? document.querySelector(".nav-bar").classList.add("show")
          : document.querySelector(".nav-bar").classList.remove("show"),
          h.forEach(function(j) {
            var k = window.scrollY + window.innerHeight - j.offsetHeight / 2,
              l = j.offsetTop + j.offsetHeight,
              m = k > j.offsetTop,
              n = window.scrollY < l;
            m &&
              n &&
              (document.querySelector(".active").setAttribute("class", " "),
              document
                .querySelector("a[href*=" + j.id + "]")
                .querySelector("span")
                .setAttribute("class", "active"));
          });
      })
    ),
    document.querySelectorAll('a[href^="#"]').forEach(function(j) {
      j.addEventListener("click", function(k) {
        k.preventDefault(),
          document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
      });
    }),
    a();
})(),
  (function() {
    "use strict";
    function a() {
      this.classList.toggle("open"), this.children[2].classList.toggle("show");
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
  })(),
  (document.getElementById("footerTxt").innerHTML =
    "minggas@" + new Date().getFullYear());
