/**
 * 'CONTENT.JS' - DiscountBOT
 */

const observer = new MutationObserver(() => {
  const footer = document.getElementById('mobile-sticky-footer');
  
  if (footer) {
      const newDiv = document.createElement('div');
      newDiv.textContent = 'Search For Coupon Codes';
      newDiv.style.marginTop = '10px';

      footer.insertAdjacentElement('afterend', newDiv);
      observer.disconnect(); // Stop observing after adding the div
  }
});

// Start observing changes in the body
observer.observe(document.body, { childList: true, subtree: true });
