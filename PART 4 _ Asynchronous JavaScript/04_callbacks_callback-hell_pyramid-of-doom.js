const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
setTimeout(() => {
    heading1.textContent = "heading 1 change zala";
    heading1.style.color = "violet";
    setTimeout(() => {
        heading2.textContent = "heading 2 change zala";
        heading2.style.color = "purple";
    }, 2000)
    setTimeout(() => {
        heading3.textContent = "heading 3 change zala";
        heading3.style.color = "red";
    }, 3000)
    setTimeout(() => {
        heading4.textContent = "heading 4 change zala";
        heading4.style.color = "pink";
    }, 4000)
    setTimeout(() => {
        heading5.textContent = "heading 5 change zala";
        heading5.style.color = "green";
    }, 5000)
    setTimeout(() => {
        heading6.textContent = "heading 6 change zala";
        heading6.style.color = "blue";
    }, 6000)
    setTimeout(() => {
        heading7.textContent = "heading 7 change zala";
        heading7.style.color = "brown";
    }, 7000)
}, 1000)


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
}

// changeText(heading1, "one", "red", 3000, () => {
//     changeText(heading2, "two", "green", 3000)
// });




// ---------------- pyraid of doom --------------
changeText(heading1, "one", "green", 3000, () => {
    changeText(heading2, "two", "violet", 4000, () => {
        changeText(heading3, "three", "blue", 2000, () => {
            changeText(heading4, "four", "yellow", 3000, () => {
                changeText(heading5, "five", "orange", 1000, () => {
                    changeText(heading6, "six", "cyan", 4000, () => {
                        changeText(heading7, "seven", "brown", 2000, () => {
                            console.log("Hello world 7 !!!!!!!!")
                        }, () => {
                            console.log("Heading7 does not exits")
                        })
                        console.log("Hello world 6 !!!!!!!!")
                    }, () => {
                        console.log("Heading6 does not exits")
                    })
                    console.log("Hello world 5 !!!!!!!!")
                }, () => {
                    console.log("Heading5 does not exits")
                })
                console.log("Hello world 4 !!!!!!!!")
            }, () => {
                console.log("Heading4 does not exits")
            })
            console.log("Hello world 3 !!!!!!!!")
        }, () => {
            console.log("Heading3 does not exits")
        })
        console.log("Hello world 2 !!!!!!!!")
    }, () => {
        console.log("Heading2 does not exits")
    })
    console.log("Hello world 1!!!!!!!!")
}, () => {
    console.log("Heading1 does not exits")
})


// ----------- pyraid of doom --------------