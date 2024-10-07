const express = require('express');
const bookingRouter = express.Router();
const bookingController = require('../controllers/booking');


bookingRouter.post('/create', bookingController.createBooking);
bookingRouter.get('/all', bookingController.findBookings);
bookingRouter.get('/:id/find', bookingController.findBookingById);
bookingRouter.put('/:id/update', bookingController.updateBooking);
bookingRouter.delete('/:id/delete', bookingController.deleteBooking);

module.exports = bookingRouter;