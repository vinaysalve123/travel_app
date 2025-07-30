const validateEmail = (email)=>{
    // const regex = /^[a-z]+$/i; //i for upper & lower case

    //another method/way
    // const regex = new RegExp ('[a-z0-9]+@[a-z]+\\.[a-z]{2, 3}');  //Ex:text@text.text
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);    //return true or false
}

export default validateEmail;