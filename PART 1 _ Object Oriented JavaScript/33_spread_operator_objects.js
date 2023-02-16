const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value21"
};
const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4"
};

const newObj = {...obj1, ...obj2 };
console.log(newObj);


const khed = ["aditya", 'PratikBhau', 'acid', 'pappya', 'jd', 'amya', 'marriii', 'shet', 'yash'];
const dapoli = ["bewda", 'aman', 'pauras'];
const chiplun = ["more", "saurabh"];

const mh_20_bl_0539 = [...khed, ...dapoli, ...chiplun];
console.log(mh_20_bl_0539);