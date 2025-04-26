/* eslint-disable no-undef, no-global-assign */
// Handle module object to avoid conflicts between Electron and browser environments
if (typeof module !== 'undefined') {
  window.module = module;
  module = undefined;
}

// Execute when document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Restore original module
  if (window.module) {
    module = window.module;
  }

  // Carousel initialization logic
  const initCoverList = () => {
    const li = document.querySelectorAll(".footer .cover li");
    for (let i = 0; i < li.length - 1; i += 1) {
      li[i].className = "hid";
    }
    if (li.length >= 4) {
      li[li.length - 3].className = "def";
      li[li.length - 2].className = "a";
      li[0].className = "b";
      li[1].className = "c";
      li[2].className = "def";
    }
  };

  // Initialize immediately if page is already loaded, otherwise wait for window.onload
  if (document.readyState === 'complete') {
    initCoverList();
  } else {
    window.addEventListener('load', initCoverList);
  }
});