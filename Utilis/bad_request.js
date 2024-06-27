module.exports.bad_request=(err,res)=> {
    res.status(400).send({
        message:"Fields are not valid",
        success:false,
        Error:err.details[0].message.replace(/\"/g ,"")
    })
}