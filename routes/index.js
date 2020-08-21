// const { route } = require('./notesRoutes')

// This file is responsible for gathering all the files and then sending them out as one //
const router = require('express').Router()

// this triggers our calls now -> only if we use /api
router.use('/api', require('./notesRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router