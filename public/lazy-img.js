var images = document.querySelectorAll('[data-src]');
var config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0 };

var loaded = 0;

var observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // console.log(`Image ${entry.target.src} is in the viewport!`);
      preloadImage(entry.target);
      // Stop watching and load the image
      self.unobserve(entry.target);
    }
  });
}, config);

images.forEach(function (image) {
  observer.observe(image);
});

function preloadImage(img) {
  var src = img.getAttribute('data-src');
  if (!src) {return;}
  img.src = src;
  
}