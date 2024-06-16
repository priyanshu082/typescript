function addTwo(a:number){
return a+2;
}

addTwo(5)

function userSignUp(name:string,email:string,isPaid:boolean){}
function loginUser(name:string,email:string,isPaid:boolean=false){}

userSignUp("Priyanshu","hello",false)


//it is not showing any error if we are returning the string so we will now define fucntions type
function addThree(a:number){
    return "hello"
}

addThree(5);

function addThree2(a:number):number{
    // now if i return the string it will show error
    // return "hello"; //this is not possible
    return a+3;
}

const getHello=(a:string):string=>{
    return a
}

//some functions never returna a value
const handleErr=(msg:string) :never=>{
throw new Error(msg)

}