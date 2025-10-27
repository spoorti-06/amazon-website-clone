var slides = document.querySelectorAll('.slider-container a');
var current = 0;

function showSlide(i) {
  slides.forEach((slide, index) => {
  slide.classList.toggle('active', index === i);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 3000);
showSlide(current);

const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");
    
searchInput.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    searchAmazon();
  }
});

searchIcon.addEventListener("click", function() {
  searchAmazon();
});

function searchAmazon() {
  const input = searchInput.value.trim();
    if (input) {
      const query = encodeURIComponent(input);
      window.location.href = `https://www.amazon.com/s?k=${query}`;
    }
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('show');
  document.getElementById('overlay').classList.add('show');
  document.getElementById('closeBtn').style.display = 'flex'; 
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('closeBtn').style.display = 'none'; 
}

document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    closeSidebar();
  }
});
