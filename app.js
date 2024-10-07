const express = require('express');
const app = express();
const PORT = 3000;
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger/swagger.yml");


const bookingRouter = require('./routes/booking');

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
    return res.json({ msg: 'Swagger API Documentation Example' });
});
app.use('/bookings', bookingRouter)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});