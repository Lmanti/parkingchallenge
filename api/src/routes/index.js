const { Router } = require('express');
const businessesRouter = require('./BusinessesRouter.js')

const router = Router();

router.use('/api', businessesRouter);


module.exports = router;