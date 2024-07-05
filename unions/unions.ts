// if we are not sure about which data type is coming we generally use any
//but if we have idea about  2 3 4 type of data which could come so we use  UNION in there whihc is a better practise than using a never

let score:number | string  =44

//here it is not showing any error
score="453"

type User={
    name:string,
    age:number,
}

type Admin={
    name:string,
    id:number
}

let priyanshu : User | Admin={name:"hitesh",id:334}

// now priyanshu can be with like User or can also be assigned as Admin
priyanshu={name:"Priyanshu",age:43}
console.log(priyanshu)
//it is also not showing any issue
priyanshu={name:"Priyanshu",id:43}
console.log(priyanshu) 

const getDbId=(id:number | string) =>{
    console.log(`DB iD is ${id}`)
    // we cannot directly apply the string methods as it is treating id as a new data type that is number and string BroadcastChannel
    // but there is a way to apply 
    if(typeof id === "string"){
        console.log(id.toUpperCase())
    }
}

const number:number[]=[1,2,3]
const number2:string[]=["1","2","3"]
const number3:(string | number | boolean)[]=[1,2,3,"4",false]


export{}