//tao 1 doi tuong myInfo//
//bao gom du lieu la name , age , address *string*, getName method

let myInfo={
    name: "Huy Hoe",
    age:18,
    address:" 18 Le Trung Nghia",
    getName:function (){
        return this.name+" "+this.age
    }

}
myInfo.email="huy@gmail.com"
myInfo['position']="teacher"
//dell la //
delete myInfo.position

var mykey="address"
console.log(myInfo)
console.log((myInfo[mykey]))

function  User(firstName, lastName, avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    this.getName =function (){
        return ` ${this.firstName} ${this.lastName}` //this nay la cua getName()//
    }
}

let author=new User("Huy","Hoe"," co cai nit")
console.log(author)

User.prototype.className = "RA"
User.prototype.getClassName=function(){
    return this.className
}
console.log(User.prototype)
console.log(author.className)

// function fruit(_color,_name) {}
// fruit.prototype.color="generral_color"
// fruit.prototype.name='general_name'
// var mangoFruit=new fruit("yellow",'Mango')
// console.log(mangoFruit)
var date = new Date()
var date2 =Date()
var year=date.getFullYear()
var hours = date.getHours()
var day =date.getDate()
var days=day.toString().padStart(2, '0')
var month =date.getMonth()+1
var months=month.toString().padStart(2,'0')
console.log(`${days}/${months}/${year}`)
///////theo kieu dd/mm/yy///////////
var nameGoLang = 'goLang'
var price=1000
var s={
    nameGoLang,
    price,
    getName(){
        return nameGoLang
    }
}

console.log('s',s)
console.log(s.getName())

var fellName = 'name'
var fellPrice='price'
var s={
    [fellName]:'flutter',
    [fellPrice]:1000,
}
console.log(s['name'])
//destructuring cho array
var arrays=['js', 'flutter','react']
var [s1 ,s2,s3] =arrays
console.log(s1,s2,s3)
var courseSpread = {
    name :'js',
    price:1000,
    image:'image-address',
    children:{
        name:"reactjs"
    }
}
// var {name,...rest}=courseSpread
// console.log(name)
// console.log(rest)

var{name:parentName,children:{name}}=courseSpread
console.log("name: ",name)

//math object//
var PI=Math.PI
console.log(PI)

var random=  Math.floor(Math.random()*10)
var bonus=['10 coin','20 coin','30 coin','40 coin','50 coin']
console.log('random coin= ',bonus[ Math.floor(Math.random()*bonus.length)])
console.log(Math.min(-100,2,5,6,8))
console.log(Math.max(-100,2,3,5,8))
// console.log(random)
//////////// Rest parameter sử dụng cú pháp ... đặt truoc81 mảng hoặc object sse4 clone lại 1 new object , new array
function rest(...params){
    console.log(params)
}
rest(1,2,3,4,5,6,7,8)
//Spread operator//
var arr1=[1,2,3,4,5]
var copyArray1=[...arr1]
console.log('coppyarr1',copyArray1)

let arr2=[1,2,3,4]
let arr3=[5,6,7,8]
let concat = [...arr2,...arr3]
console.log(concat)


let obj1 ={a:1,b:2,c:3}
let copyObj1={...obj1}
console.log(copyObj1)

// let obj2={a:1,b:2,c:3}
// let copyObj2=[...obj2]
// console.log(copyObj2)
// ///bao loi
///////////////////////
// function resFunct({name,price,...rest}){
//     console.log(name)
//     console.log(price)
//     console.log(rest)
// }
// resFunct({
//     name:'js',
//     price:1000,
//     desc:"desc",
//     brand:'RA',
// })
//
//
// var defautConfig={
//     api:"https://dsadas.vn",
//     apiVersion:"v1",
//     other:"other"
// }
// var exerciseConfig={
//     ...defautConfig,
//     api: "https:sadasda.vn"
// }
// console.log(exerciseConfig)
//
// ///con tro this trong object va function
// function sayHi(){
//     console.log(`this is,${this}`)
//     console.log('this is window?',this===window)
// }
// sayHi()
//
//
// var user= {
//     firstName: "hung",
//     sayThis() {
//         function sayHi() {
//             console.log(`this is,${this}!`)
//             console.log('this is window?', this === window)
//             console.log("firstname is", this.firstName)
//         }
//
//         sayHi()
//     },
// }
// user.sayThis()
// /////// bai 1////////////////////////
// var date = new Date()
// var year =date.getFullYear()
// var  person={
//     name: "Huy",
//     year_of_birth: 2001,
//     address: "Hà Nội",
//     age: function (){
//         return year-this.year_of_birth
//     }
//
// }
//
//
// console.log(`${person.name} ${person.year_of_birth} ${person.address}`)
// console.log(`${person.name}  is ${person.age()} years old`)
// /////////////////////bai 2////////////////////////////////////
// object1 = { foo: "bar", a: 5 };
// object2 = {name: "foo", d: 10 };
// var concats = {...object2,...object1}
// console.log(concats)
// ///////////////bai 3////////////////////
// // function getLastDayOfMonth(year, month){
// //     if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
// //         return year + " la nam nhuan.";
// // }
// //////////////////bai 4/////////////////////
// var year =date.getFullYear()
// var years=parseInt(prompt("nhập vào năm sinh của bạn: "))
// var ages=year-years;
// console.log(`năm nay bạn : ${ages} tuổi`)
// ////////////////bai 5////////////////////////
// function countDown(minutes){
//     var seccond=minutes*60;
// }

///////////////////bat dong bo//////////////////////////////
// setTimeout(function (){
//     console.log(1)
// },2000)
//
// console.log(2)



///////////////////////////////////////////////
// setTimeout(function (){
//     console.log(1)
//     setTimeout(function (){
//         console.log(2)
//         setTimeout(function (){
//             console.log(3)
//             setTimeout(function (){
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)
////////////////////////////////////////////////////
// asyncFunction()
// .then(() =>Promise.resolve('successfully'))
// .then(data =>{
//     console.log(data)
// })
//////////////////////////////////////////////
//1 promise dc ss, then/catch/finnaly dc day vao queue, cx thuc thi ngay
//javascript engine hoan thanh code hien tai ( hoan thanh task synchronous)
// //nó sẽ lấy task từ queue và thực thi
// console.log('start') //sync
// setTimeout(()=>{ //async
//     console.log('setTimeout done')
// },0)
// const  promise1 = Promise.resolve()
// promise1 //async
// .then(()=>{
//     console.log('promise then 1 ok')
// })
// .then(()=>{
//     console.log('promise then 2 ok')
// })
//
// ///////////////////
// const p1 =new Promise((resolve,reject)=>{
//     resolve('success')
// }) //object contructor
// const p2 = new Promise((resolve,reject)=> {
//     reject('error')
// })
//     // p1.then(data=>{
//     //     console.log(data)
//     // })
//     // p2.catch(error=>{
//     //     console.log(error)
//     // })
// p1
//     .then(success => console.log(success))
//     .catch(error =>console.log(error))
//     .finally(()=>console.log('finally'))
///////////////////////////////////////
// const p1 =Promise.resolve(100)
// const p2 =Promise.resolve(true)
// const p3 =Promise.reject('error')
// const p4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('p4')
//     },4000)
// })
// Promise.all([p1,p2,p3,p4])
//     .then(data=>{
//         console.log('p3,p2,p1,p4',err)
//         )
//     })
//
// //catch error và callback trong end
// const resolvePromise = new Promise((resolve,reject)=>{
//     resolve('OK')
// })
// const rejectPromise = new Promise((resolve,reject)=>{
//     reject('error')
// })
// // rejectPromise
// //     .then(()=>{
// //         throw new Error('Oh no')
// //     })
// //     .catch(err=>{
// //         console.log('rejectPromise,Catch lỗi',err)
// //     })
// rejectPromise
//     .then(()=>{
//         throw  new Error('oh no')
//     },err =>{
//         console.log('rejectPromise,callback lỗi',err)
//     })
//return va ko return trong callback cua then
// const promise = new Promise((resolve, reject)=>{
//     resolve('100')
// })
// Promise
//     .then(data1=>{
//     console.log('ok 1',data1)
//     return data1*2
// })
// .then((data2)=>{
//     console.log('ok 2',data2)
// })
//     .catch ((err)=>{
//     console.log('error',err)
// })
// .finally((data)=>{
//     console.log('done')
// })
// const promise = new Promise((resolve, reject) => {
//     resolve('100');
// });
//
// promise
//     .then((data1) => {
//         console.log('ok 1', data1);
//         return data1 * 2;
//     })
//     .then((data2) => {
//         console.log('ok 2', data2);
//         return data2 * 2; // Trả về giá trị mới cho then tiếp theo
//     })
//     .catch((err) => {
//         console.log('error', err);
//     })
//     .finally(() => {
//         console.log('done');
//     });
/////////////////////////////////////////
var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let val = input.value.trim();
    if (val) {
        addTodosElement({
            text: val,
            status: 'active', // Thêm trạng thái mặc định
        });
        saveTodoList(); // Gọi hàm để lưu danh sách công việc
        input.value = '';
    }
    else{
        alert("pls input...")
    }


});

function addTodosElement(todo) {
    var li = document.createElement('li');
    li.innerHTML = `<span>${todo.text}</span>
        <i class="fa-solid fa-trash"></i>`;

    if (todo.status === 'completed') {
        li.classList.add('completed');
    }

    li.addEventListener("click", function () {
        this.classList.toggle('completed');
        saveTodoList();
    });

    li.querySelector('i').addEventListener("click", function () {
        this.parentElement.remove();
        saveTodoList();
    });

    todos.appendChild(li);
}

function saveTodoList() {
    let todoListElements = document.querySelectorAll('.todos li');
    let todoList = [];

    todoListElements.forEach(function (item) {
        let text = item.querySelector('span').textContent;
        let status = item.classList.contains('completed') ? 'completed' : 'active';
        todoList.push({ text, status });
    });

    localStorage.setItem('todolist', JSON.stringify(todoList));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todolist'));
    if (data) {
        data.forEach(function (item) {
            addTodosElement(item);
        });
    }
}

init();




// let  x=sum(5,4);
// function sum(a,b) {
//     return a+b;
// }

// function display() {
//     document.write("Hello World!");
// }