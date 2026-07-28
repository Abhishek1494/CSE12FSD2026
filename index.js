//console.log("Hello, World!");
//var a=34;
//if(a>10){
   //// console.log("a is greater than 10");
//}
//console.log("This is a test message.");

//const sum=(a,b)=>{return a+b};
//console.log(sum(5,10));
 //const data=function(msg){
   // return msg;
 //}
 //console.log(data("This is a test message."));


 //(()=>{
    //console.log("This is an IIFE function");
 //})();

 //function login(msg,error)
    // if(error){
     //   console.log("Error: "+error);
//}else{
    //    console.log("Message: "+msg);
    // }


//function loginHandler(username,password,callback){
   // if(username==="admin" && password==="admin"){
   //     callback("Login successful",null);
   // }else{
   //     callback(null,"Invalid username or password");
  //  }
//}
//loginHandler("admin","admin",login);


// console.log('one')
// for(i=0;i<1000000;i++)
// {
//    console.log('two')
// }
// console.log('three')

// setTimeout(()=>{
//     console.log('two')
//     setTimeout(()=>{
//         console.log('three')
//         setTimeout(()=>{
//           console.log('four')
//          setTimeout(()=>{
//          console.log('five')
//     },1000)
//    },1000)
//     },1000)
// },1000)

const mypromise=new Promise((resolve,reject)=>{
   const username ="Abhishek";
   const password ="123";
   if(username==="Abhishek" && password==="1234"){
       resolve("Login successful");
   }else{
       reject("Invalid username or password");
   }
})

// mypromise.then((message)=>{
//     console.log(message);
// }  ).catch((message)=>{
//     console.log(message);
// }).finally(()=>{
//     console.log("This is finally block");
// })

async function handleData(){
   try{
      const result = await mypromise;
      console.log(result);
      console.log("This is after await");
   }
   catch(error){
      console.log(error)
   }
   finally{
      console.log("This is finally block");
   }
}
handleData();