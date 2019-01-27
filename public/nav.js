const h = document.querySelectorAll(".section")
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
})