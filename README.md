# SP-Validate:

````javascript
const  firebase = require('../../config/firebase');
const spvalidate = require('sp-validate');


module.exports = {
    async store(req, res) {
        const { company, service, bType, role, numOfemployee } = req.body;
        const uid = firebase.AUTHENTICATION.currentUser.uid;
        const emailVerified = firebase.AUTHENTICATION.currentUser.emailVerified;
        console.log(emailVerified)

        let errors = {};
        if(spvalidate.isUndefined(uid)) {
            errors.uid = 'Number of employee must be valid'
        }


        if(spvalidate.isNull(uid)) {
            errors.uid = 'Number of employee must be valid'
        }

        if(spvalidate.isEmpty(company)) {
            errors.company = 'Company must  be valid';
        }
       if(spvalidate.isLength(company)) {
           errors.company = 'Your company name is too short'
       }

       if(spvalidate.isEmpty(service)) {
           errors.service = 'Service must be valid'
       }

       if(spvalidate.isEmpty(bType)) {
        errors.bType = 'typeBusiness must be valid'
    }

    if(spvalidate.isLength(bType)) {
        errors.bType = 'typeBusiness  must be valid'
    }

        if(spvalidate.isEmpty(role)) {
            errors.role = 'Role must be valid'
        }

        if(spvalidate.isEmpty(numOfemployee)) {
            errors.role = 'Number of employee must be valid'
        }

      if(spvalidate.isEmailVerified(emailVerified)) {
        errors.emailVerified = 'Please verify your email'
      }
        

        if(Object.keys(errors).length > 0 ) {
            return res.status(400).json(errors)
        }
....

    }
````