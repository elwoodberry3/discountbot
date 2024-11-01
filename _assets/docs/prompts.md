# Prompts  

## FOUR  
Add a div below <div id="mobile-sticky-footer"> 
```
<div>Search For Coupon Codes</div>
```
https://www.walmart.com/checkout/review-order



## THREE
Update DiscountBot to mimic the following pluin:
https://chromewebstore.google.com/detail/wanteeed/emnoomldgleagdjapdeckpmebokijail

The difference is that DiscountBot automarically finds the best coupon(s) for your cart when shopping at Walmart.com.

## TWO  
Avatar  
#### **Demographic Information**
- **Age**: 18-40, primarily 25-35
- **Gender**: Mixed, slightly skewed towards females
- **Location**: Urban and suburban areas in the United States
- **Occupation**: Professionals, students, and young parents
- **Income**: Middle-income (with a focus on budget-conscious consumers)
  
#### **Psychographic Information**
- **Personality Traits**: Value-driven, deal-seeking, and tech-savvy
- **Shopping Habits**: Regular online shoppers, particularly for clothing, tech gadgets, and household items
- **Values**: Thriftiness, efficiency, and convenience
- **Frustrations**: Paying full price, missing out on deals, and spending extra time searching for discounts

#### **Customer Needs and Goals**
- **Primary Need**: To save money without needing to search extensively for discounts or cashback options
- **Goal**: Seamlessly apply savings and cashback on every purchase, improving the online shopping experience

#### **Behavioral Traits**
- **Technology Usage**: Frequent users of browser plugins, with a preference for tools that add value without clutter
- **Preferred Shopping Platforms**: Amazon, eBay, Walmart, and popular clothing retailers
- **Online Behavior**: Follows brands and deal sites on social media, subscribes to newsletters for discounts, and actively seeks recommendations for saving money







## ONE 
We want to insert our banner after the Global Header (<span data-testid="global-header">) of the Walmart's search result page.

### Explanation  

1. **Select Global Header**: Using document.querySelector('[data-testid="global-header"]'), we find the element on the Walmart search results page with the data-testid attribute set to "global-header".
1. Insert the Banner: insertAdjacentElement("afterend", banner) inserts the banner immediately after the Global Header.

```js  
// content.js

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
    <div class="discount-banner">
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

```  



_prompt  
```js
/*
Act as an expert Chrome Browser Plugin Development.
We want to create a browser plugin titled "DiscountBOT".
This plugins displays a banner advertisement based on the users search result at Walmart's search result page (https://www.walmart.com/search?q=[INSERT SEARCH TERM])
Create this plugin.
*/
```