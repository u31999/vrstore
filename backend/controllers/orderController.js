import expressAsyncHandler from "express-async-handler"
import Order from '../models/orderModels.js'


// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = expressAsyncHandler( async (req, res) => {
    const {orderItems, paymentMethod, itemsPrice,
            taxPrice, shippingAddress, totalPrice} = req.body

            if(orderItems && orderItems.length === 0) {
                res.status(400)
                throw new Error('No order items')
                return
            } else {
                const order = new Order({
                    orderItems, 
                    user: req.user._id,
                    paymentMethod, 
                    itemsPrice,
                    taxPrice, 
                    shippingAddress, 
                    totalPrice
                })

                const createdOrder = await order.save()
                
                res.status(201).json(createdOrder)
            }
})


// @desc Get order by ID
// @route POST /api/orders/:id
// @access Private

const getOrderById = expressAsyncHandler( async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc Update order to paid
// @route POST /api/orders/:id/pay
// @access Private

const updatedOrderToPaid = expressAsyncHandler( async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


// @desc Get logged in user orders
// @route POST /api/orders/myorders
// @access Private

const getMyOrders = expressAsyncHandler( async (req, res) => {
    const order = await Order.find({user: req.user._id})

    res.json(order)
})

// @desc all orders
// @route POST /api/orders/myorders
// @access Private/Admin

const getOrders = expressAsyncHandler( async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')

    res.json(orders)
})

// @desc Update order to delivered
// @route POST /api/orders/:id/deliver
// @access Private/Admin

const updatedOrderToDeliverd = expressAsyncHandler( async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.isDeleverd = !order.isDeleverd
        if(order.isDeleverd) {
            order.deleverdAt = Date.now()
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


export {addOrderItems, getOrderById, updatedOrderToPaid, 
    getMyOrders, getOrders, updatedOrderToDeliverd}