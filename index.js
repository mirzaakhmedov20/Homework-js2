// Masalalar;
// 1 - Masala;
// let alisherPuli = +prompt(
//   "Alisher o'zida necha pul bor ekanligini kiriting (so'mda)"
// );

// // Xarajatlar dollar va yevrodan so'mga o'tkaziladi
// let chiptaUSD = 500;
// let hotelUSD = 250;
// let picnikEUR = 120;
// let USDToUZS = 11000.34;
// let EURToUZS = 12354.03;

// // Safar harajatlarni so'mga alishtiramiz
// let totalUSD = chiptaUSD + hotelUSD + (picnikEUR * EURToUZS) / USDToUZS;

// // Alisherdagi puldan umumiy harajatlarni ayiramiz
// let qolganPul = alisherPuli - totalUSD;

// // chiqqan natijani 0 dan katta yoki kichikligini tekshiramiz
// if (qolganPul >= 0) {
//   console.log(alert("Oq yo'l, Alisher!"));
// } else {
//   console.log(alert("Alisher, ozgina sabr qilish kerak bo'lar ekan."));
// }

// 1. 3 ta son berilgan. ular orasidan eng kattasini topuvchi algoritm yozing
// function findMaximum(a, b, c) {
//   return Math.max(a, b, c);
// }
// let maxNumber = findMaximum(22, 55, 33);
// console.log(alert(maxNumber)); // Natija: 55

// 2. 2 ta son berilgan. Ulardan kattasining kubini topuvchi algoritm yozing
// function findCubeOfLargerNumber(a, b) {
//   let largerNumber = Math.max(a, b);
//   let cube = largerNumber ** 3;
//   return cube;
// }
// let result = findCubeOfLargerNumber(5, 6);
// console.log(result); // Natija: 216

// 3. 3 ta son berilgan. Ushbu sonlar orasidagi toq sonlar yigindisini toping
// function sumOfOddNumbers(a, b, c) {
//   let sum = 0;
//   if (a % 2 !== 0) {
//     sum += a;
//   }
//   if (b % 2 !== 0) {
//     sum += b;
//   }
//   if (c % 2 !== 0) {
//     sum += c;
//   }
//   return sum;
// }
// let sum = sumOfOddNumbers(3, 8, 5);
// console.log(sum); // Natija: 8

// 4. 4 ta son berilgan. Bu sonlar orasidan 3 ga karralilari sonini toping
// function findMultipleOfThree(a, b, c, d) {
//   let multipleOfThree;
//   if (a % 3 === 0) {
//     multipleOfThree = a;
//   } else if (b % 3 === 0) {
//     multipleOfThree = b;
//   } else if (c % 3 === 0) {
//     multipleOfThree = c;
//   } else if (d % 3 === 0) {
//     multipleOfThree = d;
//   } else {
//     multipleOfThree = "Sonlar ichida 3 ga karrali son topilmadi!";
//   }
//   return multipleOfThree;
// }
// let result = findMultipleOfThree(5, 12, 7, 9);
// console.log(result); // Natija: 12

//  5. Foydalanuvchi kiritigan son 3 ga hamda 5 ga karrali bolsa rost aks
//  holda yolgon qiymat qaytaruvchi algoritm yozing
function checkNumber(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return -n;
  } else {
    return n;
  }
}

// Misol uchun:
let result1 = checkNumber(15);
console.log(result1); // Natija: -15

let result2 = checkNumber(8);
console.log(result2); // Natija: 8
