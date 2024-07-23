// // //callback function

// // //once task  is completed then the callback function will be called


// // function greeting(name,callback)//passing callback as an parameter
// // {
// //     console.log("Hello"+ name);
// //     callback();
// // }

// // //callback function 
// // function welcome(){
// //     console.log("Welcome!!!")
// // }


// // greeting('Ashish',welcome)


// //async callback function



// function printname(name,callback){
//     console.log("Hey,There! "+ name);
//     setTimeout(function(){
//         console.log("printing info for " + name)
//         callback("call me")
//     },1000)
// }

// //callback function

// function displaymsg(mesg){
//     console.log(mesg)
// }   

// printname("Ashish ", displaymsg)



function getuserdata(userid,callback){

    setTimeout(function(){
        const users = {
            1 : {id : 1,name:"Ashish"},
            2 : {id : 2,name : "abc"}
        };
        const user = users[userid];
        if(user){
            callback(null,user)
        }
        else{
            callback("user not found.." ,null)
        }
    },2000)
}


//callback function

function handleuserdata(error,user){
    if(error){
        console.log("Error : " + error)
    }
    else{
        console.log("User : " +user)
    }
}


getuserdata(1,handleuserdata);