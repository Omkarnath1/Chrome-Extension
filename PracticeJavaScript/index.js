

              // Confirm 
// let names = confirm("what is your name");
// let Para = document.getElementById("para")
// if(names){
//     Para.textContent = "You pressed true";
// }
// else{
//     Para.textContent = "You pressed false";
// }

            // Prompt
// let names = prompt("what is your name");
// let Para = document.getElementById("para")
// if(names != null){
//     Para.textContent = `Your ${names} is good`;
// }
// else{
//     Para.textContent = "You pressed false";
// }


const item = [
    {name : 'one',   price : 1},
    {name : 'two',   price : 2},
    {name : 'three',   price : 3},
    {name : 'four',   price : 4},
    {name : 'five',   price : 5},
    {name : 'six',   price : 6},
    {name : 'seven',   price : 7}
]


// let itemsFiltered = item.filter((item) =>{
//     return item.price <= 3;
// })
// console.log(itemsFiltered);

// let itemsMap = item.map((items) =>{
//     return items.name;
// })
// console.log(itemsMap)

//    let foundItem = item.find((items)=>{
//      return items.name == "eigt"; 
//    })
//    console.log(foundItem)
//     if(foundItem){
//         console.log(foundItem)
//     }else{
//         console.log("not found");
//     }

    //  item.forEach((items) =>{
    //     console.log(items.price)
    //  })

    // const total = item.reduce((sum,item) =>{
    //      return sum + item.price
    // },0)
    // console.log(total);

    // let array = [1,2 ,3,57,54]
    // const isIt = array.includes(3);
    // console.log(isIt)


//     Asynchronious example
//  console.log("1")
//  console.log("2")
//  setTimeout(() => {
//     console.log("3")
//  }, 4000)
//  console.log("4")
//  console.log("5")

//      CallBacks

// function one (two){
//     console.log("function one complete");
//     two()
// }

// function two (){
//     console.log("function two complete");
// }
// one(two)


 //  
 let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = true;
             
                  //Promises
//  function order (time , work){
//     return new Promise ((resolve, reject)=>{
//            if (is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time) 
//            } 
//            else{
//             reject(console.log("Our shop is closed"))
//            }    
//     })

//  }

//  order(2000 , ()=> console.log(`${stocks.Fruits[0]} was selected`) )

//  .then(()=>{
//     return order(0000,work('production started'))
//   })
  
//   // step 3
//   .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
//   })
  
//   // step 4
//   .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//   })
  
//   // step 5
//   .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
//   })
  
//   // step 6
//   .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
//   })
  
//   // step 7
//   .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
//   })
  
//   // Step 8
//   .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
//   })


//   .catch(()=>{
//     console.log("Customer left")
//   })

//   .finally(()=>{
//     console.log("end of day")
//   })

//   console.log("cleaning")
//   console.log("washing")





 
       // async/await
// function time(ms) {

//     return new Promise( (resolve, reject) => {
 
//        if(is_shop_open){
//           setTimeout(resolve,ms);
//        }
 
//        else{
//           reject(console.log("Shop is closed"))
//        }
//      });
//  }
 


//   async function kitchen(){
//     try{
// 	await time(2000)
// 	console.log(`${stocks.Fruits[0]} was selected`)

// 	await time(0000)
// 	console.log("production has started")

// 	await time(2000)
// 	console.log("fruit has been chopped")

// 	await time(1000)
// 	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

// 	await time(1000)
// 	console.log("start the machine")

// 	await time(2000)
// 	console.log(`ice cream placed on ${stocks.holder[1]}`)

// 	await time(3000)
// 	console.log(`${stocks.toppings[0]} as toppings`)

// 	await time(2000)
// 	console.log("Serve Ice Cream")
//     }

//     catch(error){
// 	 console.log("customer left")
//     }
//     finally{
//         console.log("day ended, shop is closed")
//     }
// }

// kitchen();


// function makeRequest(location){
//     return new Promise((resolve, reject)=>{
//         console.log(`Making request to ${location}`)
//         if(location === 'Google'){
//             resolve('Google says hi')
//         } else{
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, reject) =>{
//         console.log('Processing Response')
//         resolve(`Extra Information + ${response}`)
//     })
// }
// makeRequest('Google').then(response => {
//     console.log("response Received")
//     return processRequest(response)
// }).then(processedResponse =>{
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })


// function addFloat(inputFloat1, inputFloat2){
//     let result = inputFloat1 + inputFloat2
//     console.log("The sum of the float values \
//     is: ",result)
//  }
//  let inputFloat1 = parseFloat(2.3)
//  let inputFloat2 = parseFloat(3.5)
     
//  console.log("The two float values are defined as ", inputFloat1 ,"and", inputFloat2)
 
//  addFloat(inputFloat1, inputFloat2)

// const myPromise = new Promise((resolve, reject) =>{
//     const error = false;
//     if(!error){
//         resolve("Promise Fullfilled")
//     }
//     else{
//         reject("Promise Rejected")
//     }
// })
// // console.log(myPromise) o/p => Promise { 'Promise Fullfilled' }

// myPromise.then((promise)=>{
//     return promise;
// }).then((newPromise)=>{
//     console.log(newPromise + " 2");
// }).catch((error) =>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Task Done")
// })

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     data.forEach(element => {
//         console.log(element)
//     });
// })

// const AwaitFunc = async () => {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users")
//    const jsonUserData = await response.json()
//    console.log(jsonUserData);
// }

// AwaitFunc() 


             // Closures
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  

             //Callbacks

//   function surnames(names , surName){
//     return fullname =  names() + " "+ surName
//   }      
//   function names() {
//     return "Good name";
//   }    

// console.log(surnames(names, "panage"))

// function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
//   }
//   console.log(add())


//   const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
//   add();
//   add();
//   console.log(add())



// 
var FinalSentence="";
var myFirstWord = "Rahul";
var mySecondWord = "honest"
var myThirdWord = "hard working"
var myFourthWord = "employee"

var FinalSentence = myFirstWord + " is a " + mySecondWord + "&" + myThirdWord +" " + myFourthWord + "."

console.log(FinalSentence)