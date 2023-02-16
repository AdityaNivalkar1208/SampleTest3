function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            // resolve("Fried Rice");
            resolve({ value: "friedrice" });
        } else {
            reject(new Error("Something missing from bucket !!!"));
        }
    })
}

ricePromise().then((myfriedRice) => {
        console.log("Let's eat ", myfriedRice);
    },

).catch((error) => {
    console.log(error);
});