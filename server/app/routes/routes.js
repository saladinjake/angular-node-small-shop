const router = require('express').Router;
const authInterceptor = require('../middlewares/authInterceptor');


router.post('/register', (req, res) => {

})

router.post('/login', (req, res) => {

})

router.get('/test-private', authInterceptor, (req, res) => {

})
