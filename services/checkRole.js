require('dotenv').config();

function checkRole(req, res, next){
    if(res.locals.role == process.env.ADMIN_ROLE) {
        next()
    } else {
        res.sendStatus(401);
    }
}

module.exports = { checkRole: checkRole }