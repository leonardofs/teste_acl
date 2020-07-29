function authorization(roles = []) {

    return (req, res, next) => {
    
        if (roles.length && roles.includes(req.userRole)) {
            console.log('role autorizada');
            return next() 

        }else{
            console.log('role autorizada');
            return res.status(401).json({ message: 'Unauthorized role' }); 
        }
    };
}
module.exports = authorization;