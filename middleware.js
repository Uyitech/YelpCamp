if (!req.isAuthenticated()) {
    req.flash('error', 'You must be signed in')
    return res.redirect('/login')
}