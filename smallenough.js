// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
    counter = 0
    for(i=0; i<=a.length-1; i++){
        if(a[i] <= limit == true){
            counter++
        } else {
            console.log(`${false}\nSome or all the elements in the array [${a}] are greater than ${limit}`)
            break
        }
    }
    if(counter == a.length){
        console.log(`${true}\nSome or all the elements in the array [${a}] are less than or equal to ${limit}`)
    }
}
smallEnough([9,1,5,2,5,10,4,5], 5)
console.log('========')
smallEnough([3,11,5,8,12,10,9,7,7], 12)