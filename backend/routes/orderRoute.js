import express from 'express'
const router = express.Router()
import {
    addOrderItems, getOrderById, 
    updatedOrderToPaid, getMyOrders,
    getOrders, updatedOrderToDeliverd
} from '../controllers/orderController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


router.route('/')
.post(protect, addOrderItems)
.get(protect, admin, getOrders)

router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updatedOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updatedOrderToDeliverd)


export default router