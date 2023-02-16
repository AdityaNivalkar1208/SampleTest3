console.log("Script Start !!!!!");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num = 0;
        for (let i = 0; i <= 1000000000; i++) {
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outvar = 0;
for (let i = 0; i < 100000000; i++) {
    outvar += i;
}
console.log("value of outvar is", outvar);
console.log("Script End !!!!!");