let bookings = [];
module.exports = {
    createBooking(req, res) {
        const booking = req.body;
        bookings.push(booking);
        return res.json({ booking })
    },
    findBookings(req, res) {
        return res.json({ bookings: bookings })
    },
    findBookingById(req, res) {
        const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
        return res.json({ booking: bookings[bookingIndex] });
    },
    updateBooking(req, res) {
        const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
        bookings[bookingIndex] = req.body;
        return res.json({ booking: bookings[bookingIndex] });
    },
    deleteBooking(req, res) {
        const bookingIndex = bookings.findIndex(booking => booking.id == req.params.id);
        bookings.splice(bookingIndex);
        return res.json({ booking: bookings });
    }
}