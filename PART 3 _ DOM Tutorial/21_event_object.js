// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function() {
//     console.log(this);
// });

const first = document.querySelector("#two");
first.addEventListener("click", function() {
    console.log("this");
});

// const third = document.querySelector("#three");
// third.addEventListener("click", (e) => {
//     // console.log(e.target);
//     console.log(e.currentTarget);
// });


// jab bhi mai kisi element pe event listner add hoga
// js Engine ---> line by line execute karta hai
// browser ----> js Engine + extra features
// browser ----> js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kiya
// jo hum listen kr rahe hai 
// browser ----> 1) call function hai wo js Engine ko dega......... 2) callback function ke sath vo jo event hua haiuski information bhi dega
// ye information hamein ek object ke form mai milegi