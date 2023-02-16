// get multiple elements using getElements by class name
// get multiple elements using getElements by querySelectorAll


const navItems = document.getElementsByClassName("nav-item"); //HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems));

const navItems1 = document.querySelectorAll(".nav-item"); //nodeList  4:19:19
console.log(navItems1);

const navItems2 = document.getElementsByClassName("nav-item"); //HTMLCollection
console.log(navItems2);