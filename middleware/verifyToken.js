function verifyToken (req,res,next){
    const token=req.headers['authorization']

    if(typeof token !== 'undefined'){
        jwt.verify(token,"myApp",(err,decoded)=>{
            if (err){
                return res.sendStatus(403)
            }
            req.appId=decoded.appId
            next()
        })
    }
    else{
        res.sendStatus(403)
    }
}