const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')
const uploader = require('../configs/cloudinary.config')

router.post('/register', ctrls.register)
router.put('/finalregister/:token', ctrls.finalRegister)
router.post('/login', ctrls.login)
router.get('/current', verifyAccessToken, ctrls.getCurrent)
router.post('/refreshtoken', ctrls.refreshAccessToken)
router.get('/logout', ctrls.logout)
router.post('/forgotpassword', ctrls.forgotPassword)
router.put('/resetpassword', ctrls.resetPassword)
router.get('/', [verifyAccessToken, isAdmin], ctrls.getUsers)
router.delete('/:uid', [verifyAccessToken, isAdmin], ctrls.deleteUser)
router.put('/current', [verifyAccessToken], uploader.single('avatar'), ctrls.updateUser)
router.put('/address', [verifyAccessToken], ctrls.updateUserAddress)
router.put('/cart', [verifyAccessToken], ctrls.updateCart)
router.delete('/remove-cart/:pid/:color', [verifyAccessToken], ctrls.removeProductInCart)
router.put('/:uid', [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin)
router.put('/wishlist/:pid', [verifyAccessToken], ctrls.updateWishList)


module.exports = router