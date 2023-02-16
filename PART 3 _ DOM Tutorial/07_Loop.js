// We can't use forEach method to iterate through htmlCollection
// method for for loop
// Simple for loop
// for of loop
// forEach
// array like object ----> indexing,length,property
const navItems = document.getElementsByTagName("a"); //HTMLCollection
// console.log(navItems.length);

// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

for (let navItem of navItems) {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontSize = "2rem";
}


// let navItems = document.getElementsByTagName("a");

// navItems = Array.from(navItems);
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });