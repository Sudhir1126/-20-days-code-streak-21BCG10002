function validateEmail(str) {
    if (str.includes('@') && str.includes('.') && str.indexOf('@') < str.lastIndexOf('.')) {
        str = str.split('@');

        if (str[0].length > 1) {
            console.log(true);

        } else {
            console.log(false);
        }
    }
    else {
        console.log(false);
    }
}
validateEmail("@gmail.com");