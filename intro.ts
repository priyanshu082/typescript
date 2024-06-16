const user={name:"Priyanshu" , age:10}

console.log(user)


//type
// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createsUser(user:User){
//     return user.email
// }

// createsUser({name:"",email:"",isActive:true})


type User={
   readonly _id:string  //no one will be able to chnge this now
    name:string,
    email:string,
    isActive:boolean
    //if some field is like that not all users can have we put them as optional
    creditCard?:number //this will make it optional
}

let myUser:User={
    _id:"5849",
    name:"Priyanshu",
    email:"priyanshusfbhdis ",
    isActive:true,
}

// myUser._id="5849" //this will give error because _id is readonly
// myUser._id="8420"

//but we can chnge the email as it is read and write both by default
myUser.email="newEmail"


type cardNumber={
    cardNumber:number
}

type cardDate={
    cardDate:number
}

//combining all the types in one type
type cardDetails= cardNumber & cardDate & {
    cvv:number
}

export {}