// href
const a = document.querySelector("a");
const input = document.querySelector("input");
console.log(a.href);
a.href = "https://www.youtube.com";
console.log(a.href);

// value
console.log(input.value);

// type
console.log(input.type);

// setAttribute
a.href = "https://www.youtube.com";
console.log(input.value = "Password");
console.log(input.type = "password");

// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("value"));

// setAttribute(attrName, value)
input.setAttribute("type","text");
