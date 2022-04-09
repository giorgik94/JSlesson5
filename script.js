'use strict';

//1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// - მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// - მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// - გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// - წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// - დაბეჭდეთ მასივისი ახალი ელემენტები.

// let arrNumbers = [5, 25, 89, 120, 36];
// arrNumbers.push('javascript', 'python');
// arrNumbers.unshift('html','css');
// console.log(arrNumbers.length);
// arrNumbers.shift();
// arrNumbers.pop();
// console.log(arrNumbers);
// console.log(arrNumbers[0], arrNumbers[arrNumbers.length-1]);


//----------------------------------------------------------------------------------------------------

//2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
// - გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// -  მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// - მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// -  გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// -  მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// - წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// - გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
// console.log(fruits.length);
// fruits.push('ვაშლი','ანანასი');
// fruits.unshift('საზამთრო');
// console.log(fruits.length);
// fruits.splice(2,0, 'მაგნო');
// console.log(fruits);
// fruits.shift();
// fruits.pop();
// console.log(fruits);
// console.log(fruits.length);


//--------------------------------------------------------------------------------------------------

// 3 მოცემულია მასივი: let array = [12, 25, 3, 6, 8, 14, 7, 23];
// - map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// let array = [12, 25, 3, 6, 8, 14, 7, 23].map(item => {
//     return item / 3;
// })
// console.log(array);

// //ან

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map(item => {
//     return item / 3;
// })
// console.log(newArray);

//-----------------------------------------------------------------------------------------------

// 4 მოცემულია მასივი: let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// - filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newArray = array.filter((item) => {
//     return (typeof item === 'number');
// })
// console.log(newArray); 

//----------------------------------------------------------------------------------------------

// 5.მოცემულია მასივი: let languages = ['html', 'css', 'javascript', 'python, 'php'];
// - ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// let languages = ['html', 'css', 'javascript', 'python', 'php'].filter(item => {
//     return item.length > 3;
// })
// console.log(languages);

// let newArray = languages.filter(item2 => {
//     return item2.length > 3;
// })
// console.log(newArray);

//------------------------------------------------------------------------------------------------

// 6.მოცემულია მასივი: let array= ['academy', 'of', 'digital', 'industries']
// - Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);\

// let array= ['academy', 'of', 'digital', 'industries'].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue + ' ';
// }, '' )
// console.log(array);

//-------------------------------------------------------------------------------------------------

// 7. მოცემულია მასივი: let item = [12, ‘google’, 32, null, ‘yahoo’, 25];
// - შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის 
// რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ
// მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა 
// დაემატოს უცვლელად;

// let someItem = [12, 'google', 32, 'null', 'yahoo', 25];

// let quadNumber = someItem.map(item => {
//     if (typeof item === 'number') {
//         return item * item;
//     } else if (typeof item === 'string') {
//         return item.toUpperCase();
//     }
// })
// console.log(quadNumber);

//-------------------------------------------------------------------------------------------------

// 8. Მოცემულია მასივი: let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// - Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან 
// რომელიც შეიცავს ასო m-ს ან M-ს;

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let newWords = words.filter(item => {
//     return item.includes('M') || item.includes('m');
// })
// console.log(newWords);