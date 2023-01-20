const joi=require('joi');


const registerSchema=joi.object().keys({


    name:joi.string().min(5).required(),
    email:joi.string().email().required(),
    password:joi.string().min(8).required(),
    role:joi.string()
})


module.exports=registerSchema;