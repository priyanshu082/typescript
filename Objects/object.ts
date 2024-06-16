
const User={
    name:"John",
    age:30,
    email:"John@gmail.com",
    isActive:true,
}

function createUser({name:string,isPaid:boolean}){}

//here it is not allowed but when we pass it in another way it will accept
// createUser({name:"Priyanshu" ,isPaid:false,email:"priyanshusingh216@gmail.com"})

let usertest={name:"Priyanshu" ,isPaid:false,email:"priyanshusingh216@gmail.com"}
// now it doensnt show any issue
 createUser(usertest)


function createCourse():{name:string,price:number}{
    return { name:"React",price:5000}
}
