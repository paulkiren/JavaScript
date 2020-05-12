// const currency = {
//     penny: 12,
//     nickel: 10,
//     dime: 2,
//     quarter: 12,
//     dollar: 30
// }

// const currencyValue = {
//     penny: 1,
//     nickel: 5,
//     dime: 10,
//     quarter: 25,
//     dollar: 100
// }


// function coincombination(amt) {

//     let value = {};
//     let coins = {};
//     let amount = amt * 100;

//     for (const key in currency) {
//         value[key] = currency[key] * currencyValue[key]
//     }

//     var coinArray = [];

//     while (amount > 0) {
//         if (amount > currencyValue["dollar"] && value["dollar"] > 0) {
//             amount -= currencyValue["dollar"];
//             value["dollar"] -= currencyValue["dollar"];
//             coinArray.push({ "dollar": 1 });
//             if (!coins["dollar"]) coins["dollar"] = 0;
//             coins["dollar"] += 1;
//         }
//         else if (amount > currencyValue["quarter"] && value["quarter"] > 0) {
//             amount -= currencyValue["quarter"];
//             value["quarter"] -= currencyValue["quarter"];
//             coinArray.push({ "quarter": 1 });
//             if (!coins["quarter"]) coins["quarter"] = 0;
//             coins["quarter"] += 1;
//         } else if (amount > currencyValue["dime"] && value["dime"] > 0) {
//             amount -= currencyValue["dime"];
//             value["dime"] -= currencyValue["dime"];
//             coinArray.push({ "dime": 1 });
//             if (!coins["dime"]) coins["dime"] = 0;
//             coins["dime"] += 1;
//         } else if (amount > currencyValue["nickel"] && value["nickel"] > 0) {
//             amount -= currencyValue["nickel"];
//             value["nickel"] -= currencyValue["nickel"];
//             coinArray.push({ "nickel": 1 });
//             if (!coins["nickel"]) coins["nickel"] = 0;
//             coins["nickel"] += 1;
//         } else if (amount > currencyValue["penny"] && value["penny"] > 0) {
//             amount -= currencyValue["penny"];
//             value["penny"] -= currencyValue["penny"];
//             coinArray.push({ "penny": 1 });
//             if (!coins["penny"]) coins["penny"] = 0;
//             coins["penny"] += 1;
//         } else {
//             console.log(amount, value);
//             if (amount != 0) return false;


//         }
//         console.log(coins);
//     }
//     return coins
// }
// console.log(coincombination(20.47))
// // This is a currency available in a cashier’s desk. That cashier want to give a money back of $20.47 to a person.
// // Write a function to give the balance $20.47 with a minimum amount of coins.

// const cowsount = "Subba";

// function a() {
//     console.log("A  ", cowsount);
//     const cowsount = "kiren";
//     console.log("B  ", cowsount);
// }
// a();

console.log(new Set([1,2,3,4,5,6,1,1,]));