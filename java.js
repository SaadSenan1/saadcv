// مراقبة العناصر اللي رح نضيفها تأثير Fade
const fadeElements = document.querySelectorAll('.fade-element');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85; // النقطة اللي يظهر عندها العنصر

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
// Select all project titles
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
  title.addEventListener('click', (e) => {
    const item = e.target.parentElement;

    // Toggle overlay
    if(item.classList.contains('project-item-active')){
      item.classList.remove('project-item-active');
    } else {
      // Close any open overlays
      document.querySelectorAll('.portfolio-item').forEach(i => i.classList.remove('project-item-active'));
      item.classList.add('project-item-active');
    }
  });
});