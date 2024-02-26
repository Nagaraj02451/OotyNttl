const {newPayment} = require('../../controller/phonepe/paymentController');
const express = require('express');
const router = express();

router.post('/formdata', newPayment);

module.exports = router;