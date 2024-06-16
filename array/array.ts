
// one way of defining the Array in ts
const arr:number[]=[]

arr.push(5)
arr.push(34)
console.log(arr)


//another way of  defining the array
const hero:Array<number>=[]

type User={
    name:string,
    age:number
}

const users:User[]=[]

users.push({name:"priyanshu",age:53})

//defiining 2d array
const matrix:number[][]=[]