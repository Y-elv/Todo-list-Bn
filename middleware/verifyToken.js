import jwt from "jsonwebtoken"
function verifyToken (req,res,next){
    const token=req.headers['x-access-token']

    if(!token){
     return res.status(403).json({message: 'Token not provided' })
    }

    jwt.verify(token, "myApp", (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        }
    
        req.userId = decoded.appId; // Assuming you're using clientID as the user identifier
        next();
      });
 
}
export default verifyToken