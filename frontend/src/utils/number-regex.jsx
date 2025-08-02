const validateNumber = (number)=>{
    const regex = /^[5-9]\d{9}$/; 

    return regex.test(number);    //return true or false
}

export default validateNumber;