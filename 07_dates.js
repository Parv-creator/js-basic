// Dates

const { log } = require("console")

let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let mycreatedDate = new Date(2025 , 0 , 25)
// let mycreatedDate = new Date(2025 , 0 , 25 , 5 , 3 )

// let mycreatedDate = new Date("2025-01-14")

let mycreatedDate = new Date("01-14-2025")
// console.log (mycreatedDate.toLocaleString());

let mytimestamp = Date.now 

// console.log(mytimestamp());

// console.log(mycreatedDate.getTime());

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()

// console.log(newdate);
// console.log(newdate.getDate());
// console.log(newdate.getDay());
// console.log(newdate.getFullYear());
// console.log(newdate.getHours());
// console.log(newdate.getMilliseconds());
// console.log(newdate.getMinutes());
// console.log(newdate.getMonth() + 1 );
// console.log(newdate.getSeconds());
// console.log(newdate.getTime());

// '${newdate.getDAte()} and th time is '

newdate.toLocaleString('Default' , {
    weekday: "long"

})







