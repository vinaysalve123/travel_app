const validateName = (name)=>{
    const regex = /^[a-z]+$/i; //i for upper & lower case

    return regex.test(name);    //return true or false
}

export default validateName;