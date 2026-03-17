const CalculateGrade=(num) =>{
    if (num>=90 && num<=100){
        console.log("You have scored A Grade")
    }
    else if (num>=60 && num<=89){
        console.log("You have scored B Grade")
    }
    else if (num>=50 && num<=59){
        console.log("You have scored C Grade")
    }
    else if (num>=36 && num<=49){
        console.log("You have scored D Grade")
    }
    else if (num>0 && num<=36){
        console.log("You have scored F Grade")
    }
    else{
        console.log("Invalid Input")
    }
}

console.log(CalculateGrade(99))