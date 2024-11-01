/**
 * 'CONTENT.JS' v.99.0.1
 * DiscountBOT
 * Monitors the Walmart search results page, identifies search terms, and displays a banner ad based on those terms.
 */

// Function to get the search term from the URL
function getSearchTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("q");
  }
  
  // Function to create and insert the banner after the global header
  function createBanner(searchTerm) {
    const banner = document.createElement("div");
    banner.id = "discountBOT-banner";
    banner.innerHTML = `
      <div class="discount-banner main-content mw1600 center">
        <h2>Special Deals for "${searchTerm}"</h2>
        <p>Click here to explore discounts and offers!</p>
      </div>
    `;
  
    // Find the Global Header and insert the banner after it
    const globalHeader = document.querySelector('[data-testid="global-header"]');
    if (globalHeader) {
      globalHeader.insertAdjacentElement("afterend", banner);
    }
  }
  
  // Run the functions when the page loads
  const searchTerm = getSearchTerm();
  if (searchTerm) {
    createBanner(searchTerm);
  }
    