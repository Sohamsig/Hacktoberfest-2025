// scripts/scroll.js - Fixed Back to Top Button (short & efficient)
const scrollBtn = document.getElementById("back-to-top-btn");

window.onscroll = () => {
  if (!scrollBtn) return;
  scrollBtn.style.display =
    (document.documentElement.scrollTop || document.body.scrollTop) > 150
      ? "block"
      : "none";
};

if (scrollBtn) {
  ["mousedown", "mouseup"].forEach(evt =>
    scrollBtn.addEventListener(evt, () =>
      scrollBtn.classList.toggle("mousedown", evt === "mousedown")
    )
  );

  scrollBtn.addEventListener("click", () => {
    scrollBtn.classList.add("startscrolling");
    smoothScrollTo(0, 600, () => scrollBtn.classList.remove("startscrolling"));
  });
}

function smoothScrollTo(to, duration, cb) {
  const start = window.scrollY || document.documentElement.scrollTop,
    change = to - start,
    increment = 20;
  let currentTime = 0;

  function animate() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) setTimeout(animate, increment);
    else if (cb) cb();
  }
  animate();
}

Math.easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// Back to Top Button Functionality
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

