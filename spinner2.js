let symbol = ['|','/','-','\\','|','/','-','\\','|'];
let timer = 0;

for(const letter of symbol) { //for xxx of is of something, in means index, returns numbers.
  setTimeout(() => {
    process.stdout.write(`\r${letter}   `);
  }, timer += 200)
}

setTimeout(() => {
  console.log();
}, timer);

//Brandon's way. a string can use of to loop, also '\\'因为转义，被视为一个字符。
// let spinnerEl = “|/-\\|/-\|/-\\|/-\|”
// let timer = 0;


// for(let item of spinnerEl){
//    setTimeout(() => {
//        process.stdout.write(`\r${item}`)
//    }, timer += 300);
// }

// setTimeout(() => {
//    console.log();
// }, timer)