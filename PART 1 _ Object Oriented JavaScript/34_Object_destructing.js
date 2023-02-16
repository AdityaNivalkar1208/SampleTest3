// Object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 2000,
    anotherSong: "kashmir"

};

// let bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName = "KING";
// console.log(bandName, famousSong);

// let { bandName, famousSong, ...restPros } = band;
// // bandName = "queen";
// // console.log(var1, var2);
// console.log(bandName);
// console.log(restPros);

// 2nd way
let info = { bandName, famousSong, ...restPros } = band;
console.log(info);