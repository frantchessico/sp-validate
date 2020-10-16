
export const spValidate = {
    isEmpty (string) {
        if(string.trim() === '') {
            return true;
        } else {
            return false
        }
        }, 


    isEmail(email)  {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.match(emailRegExp)) {
        return true;
    } else {
        return false;
    }
},


isPhone(phone)  {
    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    if(phone.match(phoneRegExp)) {
        return true;
    } else {
        return false;
    }
},

isLength(string, value) {
  if(string.length < value) {
      return true
  } else {
      return false
  }
},

isPassword(password, value){
    if(password.length < value) {
        return true
    } else {
        return false
    }
},
isUndefined(string) {
    if(string == undefined) {
        return true
    } else {
        return false
    }
},

isNull(string) {
    if(string == null) {
        return true
    } else {
        return false
    }
},

isEmailVerified(emailVerified) {
    if(emailVerified === false) {
        return true
    } else {
        return false
    }
},

errors(errors, res) {
    if(Object.keys(errors).length > 0 ) {
        return res.status(400).json(errors)
    }
}
}

