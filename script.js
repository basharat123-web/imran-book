// Initialize variables
let currentPage = 0; // Tracks the current page index
const totalPages = 4; // Total number of pages
const pages = document.querySelectorAll('.page');
const cover = document.querySelector('.cover');
const backCover = document.querySelector('.back-cover');
const pageIndicator = document.getElementById('page-indicator');

// Function to update the book's page flip
function flipPage() {
  // Reset all pages to their default state
  pages.forEach((page, index) => {
    if (index < currentPage) {
      // Pages before the current page should be fully flipped
      page.style.transform = `rotateY(-180deg)`;
    } else if (index === currentPage) {
      // Current page should be partially flipped
      page.style.transform = `rotateY(-10deg)`;
    } else {
      // Pages after the current page should remain unflipped
      page.style.transform = `rotateY(0deg)`;
    }
  });

  // Adjust the cover and back cover based on the current page
  if (currentPage === 0) {
    cover.style.transform = `rotateY(-10deg)`; // Slightly open the cover
    backCover.style.transform = `rotateY(-50deg)`; // Keep the back cover closed
  } else if (currentPage === totalPages - 1) {
    cover.style.transform = `rotateY(-180deg)`; // Fully open the cover
    backCover.style.transform = `rotateY(-180deg)`; // Fully open the back cover
  } else {
    cover.style.transform = `rotateY(-180deg)`; // Keep the cover fully open
    backCover.style.transform = `rotateY(-50deg)`; // Keep the back cover closed
  }

  // Update page indicator
  pageIndicator.textContent = `Page ${currentPage + 1} of ${totalPages}`;
}

// Event listeners for buttons
document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    flipPage();
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    flipPage();
  }
});

// Event listener for keyboard arrows
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && currentPage > 0) {
    currentPage--;
    flipPage();
  } else if (event.key === 'ArrowRight' && currentPage < totalPages - 1) {
    currentPage++;
    flipPage();
  }
});

// Initialize the first page
flipPage();