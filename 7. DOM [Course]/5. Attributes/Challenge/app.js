// 1. Select the anchor tag
const a = document.querySelector("a");

// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));

// 3. Select a-two & set "href" attribute
const a2 = document.querySelector(".a-two");
a2.setAttribute("href","https://www.youtube.com");
console.log(a2);

// setAttribute(attrName, value)