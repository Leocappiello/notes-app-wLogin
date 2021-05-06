module.exports = {

    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next()
        } 
        return res.redirect('/signin')
    },

    isNotLoggedIn(req, res, next) {
        if(!req.isAuthenticated()){
            return next()
        }
        return res.redirect('/profile')
    }
    //https://youtu.be/qJ5R9WTW0_E?t=12624
}