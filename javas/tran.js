// let array =[1,3,4,6,12,5,4,9]
// for (let i=0;i<array.length;i++){
//     if (array[i]%4===0 && array[i]%3===0){
//         console.log(array[i])
//     }
// }


// let arr=[]
// let n=parseInt(prompt("nhập n: "))
// for (let i =0;i<n;i++) {
//     let input = parseInt(prompt("nhập số phân tử của mảng : "))
//     arr.push(input)
// }
//     for (let i=0;i<n;i++){
//         if (arr[i]%3===0 || arr[i]%4===0){
//             console.log(arr[i])
//             break;
//     }
//
// }

// let arr = []
// let n = parseInt(prompt("nhap n"))
// for (let i = 0; i < n; i++) {
//     let input = parseInt(prompt("nhap so phan tu cua mang"))
//     arr.push(input)
// }
// for (let i = 0; i < n; i++) {
//     if (arr[i] % 4 === 0 && arr[i] % 3 === 0) {
//         console.log(arr[i])
//         break;
//
//     }
//
//
// }

// var shoulexit = false
//
// while (!shoulexit) {
//     let a = parseInt(prompt("nhap canh a: "))
//     let b = parseInt(prompt("nhap canh b"))
//     let c = parseInt(prompt("nhap canh c"))
//     if (a + b > c && a + c > b && b + c > a) {
//         let s = a + b + c
//         alert("day la ket qua chu vi" + s)
//         let s2 = s / 2;
//         let s3 = Math.sqrt(s2 * (s2 - a) * (s2 - b) * (s2 - c))
//         console.log(s3)
//         alert("day la ket qua dien tich" + s3)
//         break;
//     } else {
//         alert("day ko phai tam giac")
//
//     }
// }
//////////bai1///////////
//     let n =parseInt(prompt("nhap n: "))
//     const result = n%2===0 ? "Even number" : "odd number"
//     document.write(result)
//

//////////bai2//////////////
// let person1 = parseInt(prompt("nhap muc luong cua ban 1"))
// let person2 = parseInt(prompt("nhap muc luong cua ban 2"))
// // if (person1 > person2) {
// //     alert("nguoi thu nhat co muc luong cao hon")
// // } else {
// //     alert("nguoi thu 2 co muc luong cao hon")
// // }
// const result = person1 > person2 ? "nguoi thu nhat co muc luong cao hon" : "nguoi thu 2 co muc luong cao hon"
// console.log(result)
///////////bai3/////////////////
// let text = prompt("Nhập vào một ký tự: ")
// if (text===text.toUpperCase()){
//     document.write("upper-case alphabet")
// }else if(text===text.toLowerCase()){
//     document.write("lower-case alphabet")
// }else{
//     document.write("not an alphabet")
// }
//////////////////bai 4////////////////////
// let a = parseInt(prompt("nhap a: "))
// let b = parseInt(prompt("nhap b: "))
// let c = parseInt(prompt("nhap c: "))
// if (a === 0) {
//     let result = -c / b
//     console.log(result)
// } else {
//     let delta = b * b - 4 * a * c;
//     if (delta > 0) {
//         let x1 = (-b + Math.sqrt(delta)) / 2 * a;
//         let x2 = (-b - Math.sqrt(delta)) / 2 * a;
//         console.log(x1)
//         console.log(x2)
//     }
//     else if (delta === 0) {
//         let x=-b/2*a
//         console.log("co 1 nghiem",x)
//
//     }else if (delta<0){
//         console.log("phuong trinh vo nghiem")
//     }
//
// }
//////////////////bai 5/////////////////////
// let year=parseInt(prompt("nhập vào năm: "))
// const  result =year % 4===0 && year%100!==0 ||year%400===0 ? "Day la nam nhuan" : "Day la nam chua nhuan"
// console.log(result)
//////////////////bai 6///////////////////////////
// let choose=parseInt(prompt("nhap vao tu 0 den 6"))
// let day="";
// switch (choose) {
//     case 0: day="sunday"
//
//         break;
//     case 1: day="monday"
//
//         break;
//     case 2: day="sunday"
//
//         break;
//     case 3: day="monday"
//
//         break;
//     case 4: day="monday"
//
//         break;
//     case 5: day="monday"
//
//         break;
//     case 6: day="monday"
//
//         break;
//     default:
//         alert("ko co")
//         break;
//
// }
// console.log(day)

//////////////////////////////////////////////////
//
// let a=parseInt(prompt("nhap vao so a: "))
// let b=parseInt(prompt("nhap vao so b: "))
// let c =prompt("nhap vao 1 ky tu +,-,*,/")
// let result="";
// switch (c) {
//     case '+':
//         result=a+b
//         break;
//     case '-':
//        result=a-b
//         break;
//     case '*':
//         result=a*b
//         break
//     case '/':
//         result=a/b
//         break;
//     default:
//         alert("ko co")
//         break;
//
// }console.log(result)
// ////////////////////bai 8////////////////////////
// let month=parseInt(prompt("nhập vào tháng"))
// let year=parseInt(prompt("nhap nam: "))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("nhung thang co 31 ngay")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("nhung thang nay co 30 ngay")
//         break;
//     case 2:
//         if (year % 4===0 && year%100!==0 ||year%400===0) {
//             console.log("day la nam nhuan co 29 ngay")
//         }
//         else{
//             console.log("day ko phai nam nhuan co 28 ngay")
//         }
//     default:
//         alert("ko co thang nay")
//         break;
//
//
// }
////////////////////////////////////////////////
// let flag=false
// while (!flag){
//     let choose = parseInt(prompt("1. Kiểm tra tính chẵn lẻ của 1 số.\n" +
//         "2. Kiểm tra số nguyên tố.\n" +
//         "3. Kiểm tra một số có chia hết cho 3 không.\n" +
//         "4. Thoát"))
//     let number=parseInt(prompt("Nhập vào một số để kiểm tra: "))
//     switch (choose) {
//         case 1:
//
//             if (number%2===0){
//                 alert("Đây là số chẵn")
//             }else{
//                 alert("Đây là số lẻ")
//             }
//             break;
//         case 3:
//             if (number%3===0){
//                 alert(`Số ${number} chia hết cho 3`)
//             }else{
//                 alert(`Số ${number} không chia hết cho 3`)
//             }
//             break;
//         case 4:
//             alert("Bạn đã được siêu thoát")
//             break;
//
//     }
// }
///////////////////bai 6////////////////////////////
// let flag = false
// while (!flag) {
//     let choose = parseInt(prompt("1. Tính chu vi và diện tích hình chữ nhật .\n" +
//         "2. Tính chu vi và diện tích hình tam giác\n" +
//         "3. Tính chu vi và diện tích hình tròn.\n" +
//         "4. Thoát"))
//     switch (choose) {
//         case 1:
//             let a = parseInt(prompt("nhập a:"))
//             let b = parseInt(prompt("nhập b:"))
//             let choice1 = parseInt(prompt("1:Tính chu vi hình chữ nhật. \n" + "2.diện tích hình chữ nhật .\n"))
//             switch (choice1) {
//                 case 1:
//                     let result1 = (a + b) * 2
//                     alert("kết quả của chu vi hình chữ nhật:" + result1)
//                     break;
//                 case 2:
//                     let result2 = a * b
//                     alert("Kết quả của diện tích hình chữ nhật" + result2)
//                     break;
//
//             }
//             break;
//         case 2:
//             let side1 = parseInt(prompt("nhập cạnh a: "))
//             let side2 = parseInt(prompt("nhập cạnh b: "))
//             let side3 = parseInt(prompt("nhập cạnh c: "))
//             let choice2 = parseInt(prompt("1:Tính chu vi tam giác. \n" + "2:Tính diện tích tam giác .\n"))
//             switch (choice2) {
//                 case 1:
//                     let result3 = side1 + side2 + side3;
//                     alert("kết quả chu vi của tam giác " + result3)
//                     break;
//                 case 2:
//                     let result4 = ( side1 + side2 + side3) / 2;
//                     let result5 = Math.sqrt(result4 * (result4 - side1) * (result4 - side2) * (result4 - side3))
//                     alert("kết quả diện tích của tam giác"+result5)
//                     break;
//
//             }break;
//         case 3:
//             let r = parseInt(prompt("nhập bán kính :"))
//             let choice3 = parseInt(prompt("1:Tính chu vi hình tròn. \n" + "2.diện tích hình tròn.\n"))
//             switch (choice3) {
//                 case 1:
//                     let c=2 *Math.PI * r;
//                     alert("kết quả của chu vi hình tròn:" + c)
//                     break;
//                 case 2:
//                     let s = 2*Math.PI*(r*r)
//                     alert("Kết quả của diện tích hình tròn" + s)
//                     break;
//
//             }
//             break;
//         case 4:
//             alert("Bạn đã siêu thoát")
//         default:
//             alert("ko co")
//
//     }
//
// }
// let date=new Date()
// console.log(date)
// let year=date.getFullYear()
// console.log(year)
// let  person={
//     name: "huy",
//     year_of_birth:2000,
//     address:"Ha noi",
// }
// console.log(person)
// let age=year-person.year_of_birth
// console.log(`${person.name} is ${age} years old`)
let object1 = { foo: "bar", a: 5 };
let object2 = {...object1,name: "foo", d: 10 };
// let concat={...object2 , ...object1}
// console.log(concat)
console.log(object2)



