const Joi = require('joi');

const dataValidate = (schemas)=>{
    return (req, res, next)=>{
            const {error} = schemas.validate(req.body, {abortEarly : false})
            if(error){
                const findErr = error.details.map((msg)=>msg.message)
                res.send(findErr)
            }else{
                next()
            }
        
    }
}

module.exports = dataValidate;