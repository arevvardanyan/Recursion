// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1

const factorial = function(a,fac = 0){
    if(a === 0){
        return 1
    }

    return  a *  factorial(a-1)
}

// console.log(factorial(5))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
// 1,1,2,3,5,8,13,21
const fibonacci = function(a){
    if(a < 2){
        return a
    }

    return fibonacci(a-1) + fibonacci(a-2)
}

// console.log(fibonacci(7))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3

const power = function(a,b){
    if(b === 0){
        return 1
    }

    return a * power(a,b-1)
}

// console.log(power(2,4))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4

const arraySum = function(arr,i = arr.length - 1){
    if(i === 0){
        return arr[i]
    }

    return arr[i] + arraySum(arr,i - 1)
}

// console.log(arraySum([1,2,3,4]))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5

const isPalindrome = function(str,i = str.length - 1,j = 0){//3,0, 2,1
    if(i < 0){
        return true
    }
    if(str[i] !== str[j]){
        return false
        
    }
    
    return isPalindrome(str,i-1,j+1)
}

// console.log(isPalindrome("racear"))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 6

const binarySearch = function(arr,num,i = 0){
    if(i > arr.length - 1){
        return -1
    }

    if(arr[i] === num){
        return i
    }

    return binarySearch(arr,num,i + 1)

}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
// console.log(binarySearch(sortedArray, 18))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 7
const flattenArray = function(arr,i = 0,j = 0){//3
    if(i > arr.length - 1){
        return 0
    }

    if(Array.isArray(arr[i])){
        flattenArray(arr,i +2,j +1)
        console.log(arr[i][j])
    }

    return flattenArray(arr,i+1)
}


const nestedArray = [1, [2, [3, 4], 5], 6]

// console.log(flattenArray(nestedArray))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 9

const countOccurrences = function(arr,num,i = 0,count = 0){

    if(i > arr.length - 1){
        return count
    }

    if(arr[i] === num){
        count ++
    }
    
    return countOccurrences(arr,num,i + 1,count)

}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2,6]; 
// console.log(countOccurrences(numbers, 6))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 10

const sumOfDigits = function(num,sum = 0){
    if(num < 10){
        return sum + num
    }

    let last = num % 10
    let numFloor = Math.floor(num / 10)

    return sumOfDigits(numFloor,sum + last)
}

// console.log(sumOfDigits(123))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 11

const gcd = function(a,b,i = Math.min(a,b)){
    if(a%i === 0 && b%i === 0){
        return i
    }

    return gcd(a,b,i-1)
}

// console.log(gcd(48,18))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 12

const generateCombinations = function(arr,i = 0,arr1 = []){
    if(i>arr.length){
        return arr1
    }
    for(let j = i + 1; j<arr.length;j++){
        let newArr = []
        newArr.push(arr[i],arr[j])
        arr1.push(newArr)
        
    }
    
    return generateCombinations(arr, i+1,arr1)
    
}

const inputArray = [1, 2, 3, 4]; 
// console.log(generateCombinations(inputArray));//չհասկացա թիվը ինչպես օգտագործել,դրա համար միայն 2 երկարությամբ մատրիցներով արեցի


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 12


const subsetSum = function(arr,num,i = 0){
    if(i > arr.length){
        return false
    }
    for(let j = i + 1; j<arr.length;j++){
           if(arr[i] + arr[j] === num){
            return true
           }
    }
    
    return subsetSum(arr,num, i+1)
    
}

const inputArray2 = [2,4,6,8,11]; 
console.log(subsetSum(inputArray2,10));