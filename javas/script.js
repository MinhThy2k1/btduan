
// let inputSroce=prompt("nhap diem cua ban:")
// if(inputSroce>= 75) console.log("loai:A")
//
// else if(inputSroce>=60&&inputSroce<=75) console.log("loai:B")
// else if(inputSroce>=45&&inputSroce<=60) console.log("loai:C")
// else if(inputSroce>=35&&inputSroce<=45) console.log("loai:D")
// else console.log("loai:E")
//noi chu viet in
// let inputString=prompt("nhap:")
// let inputString2=inputString.charAt(0).toUpperCase()
// console.log(inputString2)
// let inputString3=inputString.slice(1)
// console.log(inputString2+inputString3)

// let cut=inputString.replace("a","4").replace("s","5").replace("i","1").replace("o","0") .trim()
// console.log(cut)
// var inputString1="the quick brown fox"
// var cut=inputString1.split(" ")//cat cai chuoi theo ky tu nao do
// console.log("cut: ", cut)
// var result= ""
// var  word=cut[0]
// console.log("word: ",word)
// if(word.length>0){
//     console.log("word.lenght: ",word.length)
//     var  zaro=word[0].toUpperCase()
//     console.log("zaro: ",zaro)
//     var zero=word.slice(1)
//     console.log("zero: ",zero)
//     result=result+zaro+zero
//     console.log("result: ",result)
// }
// word=cut[1]
// console.log("word: ",word)
// if(word.length>0){
//     console.log("word.lenght: ",word.length)
//     var  zaro=word[0].toUpperCase()
//     console.log("zaro: ",zaro)
//     var zero=word.slice(1)
//     console.log("zero: ",zero)
//     result=result+" "
//     result+=zaro+zero
//     console.log("result: ",result)
//
// }
// word=cut[2]
// console.log("word: ",word)
// if (word.length>0){
//     console.log("word.length: ",word.length)
//     var zaro = word[0].toUpperCase()
//     console.log("zaro: ",zaro)
//     var zero= word.slice(1)
//     console.log("zero: ",zero)
//     result=result+" "
//     result+=zaro+zero
//     console.log("result: ",result)
// }
// word=cut[3]
// console.log("word: ",word)
// if(word.length>0){
//     console.log("word.length: ",word.length)
//     var zaro=word[0].toUpperCase()
//     console.log("zaro: ",zaro)
//     var zero=word.slice(1)
//     console.log("zero: ",zero)
//     result=result+" "
//     result=result+zaro+zero
//     console.log("result: ",result)
// }

// let cut1=cut.trim(0)
// console.log(cut1)
// let inputString=prompt("nhap chuoi: ")
// // let inputStringgug = "this is test"
// var inputString2=inputString.slice(1)
// console.log("inputString2: ",inputString2)
// var inputString3=inputString[0].toUpperCase()
// var result=inputString3+inputString2
// console.log("result: ",result)

// let inputString="javascript is cool "
// // if(inputString[0]===" "){
// //     console.log("debug")
// //     inputString=inputString.slice(1)
// // }
// // let results=inputString.trim()
// // console.log("results:",results)
// let replace=inputString .replace("a","4")
// console.log("replace: ",replace)

//parseInt(prompt) chuyen chuoi thanh so luc nhap


//cho phep nhap vao 3 so a b c
//chek a>b => if a>c => log ra greates number is a
//else greates number is c
// if b>c => log greatres number is b
/////////////////
// let number=parseInt(prompt("nhap vao a"))
// let number1=parseInt(prompt("nhap vao b"))
// let number2=parseInt(prompt("nhap vao c"))
// if(a>b){
//     if (a>c){
//         console.log("greates number is a",number)
//     }
//     else console.log("greates number is c",number2)
//
// }else{
//     if (b>c){
//         console.log("greates number is b",number1)
//         else{console.log("greates bumber is c",number2)
//     }
// }

// let score=parseInt(prompt("nhap vao: "))
// if (score>=90){
//     console.log("loai a")
// }else if(score>=80){
//     console.log("loai b")
// }else if(score>=70){
//     console.log("loai c")
// }else{
//     console.log("loai c")
// }
/////////////////
// if(radius>=0)
//     area=math.pi * radio *radius

//////
//  var color=prompt("chon 1 mau duoi day 1 la red 2 la blue ")
// switch (color) {
//     case "red":
//         console.log("mau do")
//         break
//     case "blue":
//         console.log("mau xanh")
//         break
//     default:
//         console.log("khong phat hien mau nao")
//         break
//
// }
// ///////////////////
// var day=parseInt(prompt("ngay hom nay la cuoi tuan hay trong tuan: "))
// switch (day){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console,log("weekday")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("weekend")
//         break;
// }
/////////////////////
// viet 1 chuong trinh cho phep nhap vao so tuoi . check so tuoi do >=18 thi duoc vote , nguoc lai nho hon 18 ban khong duoc vote use ternary operator
// let age=parseInt(prompt("so tuoi cua ban la ? : "))
// var result=(age>=18) ? "duoc vote " : " khong duoc vote"
// console.log("vay la " + result)
///////////////////
// viet 1 chuong trnh su dung switchcase check xem ngay gio hien tai la thu may trong tuan
//show ket qua trong the p su dung id
//document.getelementbyid()

// var day = new Date().getDay();
// var dayName=" ";
// switch (day){
//     case 1:
//         dayName="thứ 2"
//         break
//     case 2:
//         dayName=" thứ 3"
//         break
//     case 3:
//         dayName="thứ 4"
//         break
//     case 4:
//         dayName="thứ 5"
//         break
//     case 5:
//         dayName="thứ 6"
//         break
//     case 6:
//         dayName="thứ 7"
//         break
// }
// document.getElementById("ngay").innerHTML= "hôm nay là: " + dayName ;
// var day;
// var a= new Date().getDay()
// switch (a){
//     case 0:
//         day="sunday"
//         break
//     case 1:
//         day="monday"
//         break;
// }
// document.getElementById("ngay").innerHTML ="today is" + day
/////////////bai 3//////////////////////
// let number1=parseInt(prompt("nhap diem mon Physics: "))
// let number2=parseInt(prompt("nhap diem mon Chemistry: "))
// let number3=parseInt(prompt("nhap diem mon Biology: "))
// let number4=parseInt(prompt("nhap diem mon Mathematics: "))
// let number5=parseInt(prompt("nhap diem mon Computer: "))
// var average=((number1 + number2+ number3 + number4 +number5) /50) * 100;
// if (average>=90){
//     console.log("Grade A")
// }else if(average>=80){
//     console.log("Grade B")
// }else if(average>=70){
//     console.log("Grade C")
// }else if(average>=60){
//     console.log("Grade D")
// }else if(average>=40){
//     console.log("Grade E")
// }else console.log("Grade F")
///////////////bai 4//////////////
// let input1=parseInt(prompt("nhap a"))
// let input2=parseInt(prompt("nhap b"))
// let input3=parseInt(prompt("nhap c"))
// let input4=parseInt(prompt("nhap d"))
// let results=[input1,input2,input3,input4]
// results.sort(function(a, b){return b - a});
// console.log("sap xep lai tu be den lon : ",results)
// //////bai 5//////////////////////////
// let year=parseInt(prompt("nhap vao nam: "))
// if (year % 4===0 && year%100!==0/*ko chia he*/||year%400===0){
//     console.log("đây là năm nhuận")
//
// }else console.log(` năm này ${year} là năm chưa nhuận`)

//////bai 6////
// let a=parseInt(prompt("nhap canh thu 1: "))
// let b=parseInt(prompt("nhap canh thu 2: "))
// let c=parseInt(prompt("nhap canh thu 3: "))
// if (a+b>c && b+c>a && a+c>b){
//     if(((a * a === b * b + c * c) ||  (b * b === a * a + c * c) ||  (c * c === a * a + b * b))){
//         console.log("day la tam giac vuong,Right triangle !")
//     }else if((a===b) &&(b===c)){
//         console.log("day la tam giac deu,Equilateral triangle !")
//     }else if((a===b)){
//         console.log("day la tam giac can,Isosceles triangle !")
//     }else if (((a*a > b*b+c*c) || (b*b > a*a+c*c) || (c*c > a*a+b*b))){
//         console.log("day la tam giac tu,Obtuse triangle !")
//     }else console.log("đây là tam giác nhọn,Acute triangle !")
// }else console.log("Not a Triangle")

//////bai 8//////
// let a=parseInt(prompt("nhap a: "))
// let b=parseInt(prompt("nhap b: "))
// let c=parseInt(prompt("nhap c: "))
// if (a<=b && b<=c) {
//     console.log("Increasing")
// }else if (a>=b && b>=c){
//         console.log("Decreasing")
// }else console.log("Neither increasing nor decreasing order")
//////bai 9////
// let number1=parseInt(prompt("nhap so a: "))
// let characters=prompt("nhap ky tu + - * / : ")
// let number2=parseInt(prompt("nhap so b"))
//
// switch(characters){
//     case "+":
//         console.log(number1+number2)
//         break
//     case "-":
//         console.log(number1-number2)
//         break
//     case "*":
//         console.log(number1*number2)
//         break
//     case"/":
//         if (number2!==0) console.log(number1/number2)
//         else console.log("b khac 0")
//         break
//     default:
//         console.log("phép toán không hợp lệ")
// }
////////bai 10///////////////
// let year=parseInt(prompt("nhập vào năm: "))
// let month=parseInt(prompt("nhập tháng: "))
//
// switch (month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("tháng này có 31 ngày")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("tháng này có 30 ngày")
//         break
//     case 2:
//         if(year % 4===0 && year%100!==0/*ko chia het*/||year%400===0) console.log("tháng này có 29 ngày")
//         else console.log("tháng này có 28 ngày")
//         break
//     default:
//         console.log("Không có tháng này")
//         break
// }
////////////vong lap for////////////////////
// for (var i=1;i<=10;i++){
//     var product=5*i;
//     document.write("5 x"+i+"="+ product + "<br")
//////////////////////////////////////////
// for(let i=0,j=10;i<=10;i++,j--){
//     let sum=i+j;
//     document.write(i+"+"+j+"="+sum+"\n")
// }
///////////////////////////////////////
// let text="hello"
// while (text !== 'q'){
//     document.write(text + '<br />');
//     text=prompt("enter q text to print,enter to quit")
// }
//////////////////////////////////////////
// let text="hello"
// while (text !== 'q' && text !==''){
//     document.write(text + '<br />');
//     text=prompt("enter q text to print,enter to quit")
// }
//////////////////////
// let count=0
// let text=''
// while (count<100){
//     text += '<hr width="' + count + '%">';
//     count++;
// }
// document.getElementById("shape").innerHTML=text
///////////////////////////////////
// let text=''
// for(let count=0;count<50;count++){
//     text += '<hr width="' + count + '%">';
// }
// document.getElementById("shape").innerHTML=text
///////////////////////////////////////////////////
// let sum=0;
// let number;
// do{
//     number=parseInt(prompt('enter a number'))
//     sum += number;
// } while (number !== 0)
// document.write("the sum is " + sum)
///////////////////////break/////vong lap//////////////////////
// let text =''
// for (let i=0;i<5;i++){
//     if (i===3){
//         break;
//     }
//     text += 'the number is' + i + '<br/>'
// }
// document.getElementById("result").innerHTML=text
// var myArr4=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// var result=myArr4.toString()
// console.log(result)
// var a=[]
// for(let i=0;i<myArr4.length/*/3*/;i++){
//     for(let j=0;j<myArr4[i].length;j++) {
//         console.log(myArr4[i][j]) /*myArr4[0][0]=>1
//         // myArr4[0][1]=>2
//         //myArr4[1][0]=>3*/
//     }
// }
// var result=a.join()
// console.log("result ",result)
////////////////////////////////
// for ( let i=0;i<5;i++) {
//     for (let j = 0; j < 10; j++) {
//         document.write("*")
//     }
//     document.write("<br/>")
// }
//////////////viet tu 2 4 6 8 so chan/////////////////////
// let  number=''
// for (let i=0;i<10;i++) {
//     if (i % 2 !== 0) {
//         continue;
//
//     }
//     console.log(i)
// }
///////////////bai 1//////////////////////////
// var sum=0;
// var start =parseInt(prompt("nhap so ban dau"))
// var end=parseInt(prompt("nhap so ket thuc"))
// for (let i=start;i<=end;i++){
//     if (i%2===0){
//         sum+=i;
//     }
// }
// document.write(`tong cac so chan tu ${start} den ${end} la ${sum}`)
////////////////////////////////////////////////////////////
// var number=parseInt(prompt("nhap vao 1 so: "))
// var sum=1;
// for ( var i=1;i<= number ;i++){
//     sum *=i;
// }
// document.write(sum)
/////////////////////////////
// var n = parseInt(prompt("Nhập số cần tính giai thừa:"));
// var output=1;
// for (var i = 1; i <= n; i++) {
//     output*= i;
// }
// document.write(`Kết quả: ${output}`)
/////////////////////////bai 5.1//////////////////////
// let str_input = prompt("Nhập chuỗi muốn đảo ngược:");
// let str_output = '';
// for (let i = str_input.length - 1; i >= 0; i--) {
//     str_output += str_input[i];
// }
// document.write(`Kết quả: ${str_output}`)
/////////////////////////////////////////////////////
/////////////////bai 5.2////////////////////////////////

// while (true) {
//     var choose =parseInt(prompt("nhap vao 1 so , 1/Kiểm tra tính chẵn lẻ của 1 số,2/Kiểm tra số nguyên tố 3/Kiểm tra một số có chia hết cho 3 không 4/Thoát"))
//     switch (choose) {
//         case 1:
//             var number1 = parseInt(prompt("nhap: "))
//             if (number1 % 2 === 0)
//                 console.log("day la so chan")
//             else console.log(" day la so le")
//             break;
//
//         case 2:
//             var number2 = parseInt(prompt("nhap: "))
//             for (let i = 2; i < Math.sqrt(number2); i++) {
//                 if (number2 % i !== 0)
//                     console.log("day la so nguyen to")
//                 else console.log("day ko la so nguyen to")
//             }
//             break;
//
//         case 3:
//             var number3 = parseInt(prompt("nhap: "))
//             if (number3 % 3 === 0)
//                 console.log("chia het cho 3")
//             else console.log("ko chia het cho 3")
//             break;
//
//         case 4:
//             console.log("bạn đã siêu thoát")
//             break;
//         default:
//             alert("nhap sai yeu cau nhap lai");
//             continue;
//     }
//     break;
// }
///////////////////////////////


/////////////////bai 3////////////
// let array=[0,2,-4,8]
// let sum=0
// for (let i of array){
//     if (i>=0)
//         sum+=i;
// }
// document.write(sum)
///////////////////bai 4//////////
// let array=[1,3,4,6,12,5,4,9];
// for (let i of array){
//     if (i%4===0 && i%3===0) {
//         break;
//     }
//     else if (i %4===0){
//         continue;
//
//     }else console.log(i)
//
// }
/////////////////bai 6////////////////////
// var shouldExit = false;
// while(!shouldExit){
//     var choose=parseInt(prompt("menu gom co 1,2,3"))
//     switch (choose){
//         case 1:
//             var result;
//             var result2;
//             var a=parseInt(prompt("nhập chiều dài:"))
//             var b=parseInt(prompt("nhập chiều rộng"))
//             result=(a+b) *2
//            document.write(" đây là kết quả chu vi chữ nhật :",result);
//             result2=a*b;
//             console.log(" đây là kết quả diện tích chữ nhật :",result2);
//             break;
//         case 2:
//             var result3;
//             var result4;
//             var number1 =parseInt(prompt("nhập cạnh 1:"))
//             var number2=parseInt(prompt("nhập cạnh 2"))
//             var number3 =parseInt(prompt("nhap cạnh 3"))
//             // var number4=parseInt(prompt("nhập chiều cao tam giác: "))
//             result3=number1+number2+number3;
//             console.log("đây là kết quả chu vi tam giác",result3)
//             var hafp=result3/2 /*(chu vi /2)*/
//             result4=Math.sqrt(hafp*(hafp-number1)*(hafp-number2)*(hafp-number3))
//             console.log("đây là kết quả diện tích tam giác",result4)
//             break;
//         case 3:
//             var result5;
//             var number5=parseInt(prompt("nhập bán kính: "))
//             result5=2*Math.PI*number5;
//             console.log("Đây là kết quả chu vi hình tròn")
//             break;
//         case 4:
//            alert("muốn out menu bấm 5")
//             shouldExit=false
//             break;
//
//         default:
//             shouldExit=true
//             break;
//
//     }
//
// }
////////bai 7//////////////////////////////////
// let a;
// for (let number=2;number<100;number++){
//     a=true;
//     for (let i=2;i <= Math.sqrt(number);i++){
//         if(number%i===0){
//             a=false;
//             break;
//         }
//     }
//     if (a){
//         document.write(number);
//     }
// }
//////////////////////////////////////////////////
// let isPrime;
//
// for (let number = 2; number < 100; number++) {
//     isPrime = true;
//
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//
//     if (isPrime) {
//         document.write(number);
//     }
// }
//////////////////bai 8///////////////////////////////
// var shouldExit = false;
// while (!shouldExit){
//     var a=parseInt(prompt("nhập cạnh a:"))
//     var b=parseInt(prompt("nhập cạnh b:"))
//     var c=parseInt(prompt("nhập cạnh c:"))
//     if (a+b>c && b+c>a && a+c>b){
//         var s;
//         var s2;
//         var s3;
//         s=a+b+c;
//         document.write("đây là chu vi S: ",s+ '<br/>')
//         s2=s/2;
//         s3=Math.sqrt(s2*(s2-a)*(s2-b)*(s2-c))
//         document.write("đây là diện tích s:  ",s3)
//         break;
//     }else {
//         alert("đây không phải tam giác")
//     }
// }
////////////////////////////bai1:loop/////////////////////
// var n=parseInt(prompt("nhập số: "))
// var i=2;
// var shouldExit = false;
// var shouldExit2=false;
// var total="";
// while (!shouldExit){
//     if (n<2 || n>100) {
//         n=parseInt(prompt("nhập số: "))
//         alert("nhập lại")
//     }else{
//         shouldExit=true;
//
//         while(!shouldExit2) {
//             let num = i * i;
//             if (i <= n)
//             {
//                 if(num % 2 === 0) {
//                     document.write(num+" ")
//                 }
//                 i+=1;
//             }
//
//
//             else{
//
//                 shouldExit2=true;
//             }
//
//
//
//         }
//
//
//
//
//     }
//
// }
//////////bai 2////////////////////////////
// let arr=[1,2,3,4,5]
// function n(arr){
//     let max=arr[0];
//     for (i=0;i<arr.length;i++){
//         if (max<arr[i]){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// document.write(arr)
//////////////////bai 3///////////////////
