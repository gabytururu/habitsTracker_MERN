const express = require('express')
const router = express.Router()
const {getHabits, getHabit, deleteHabit, patchHabit, postHabit} = require('../controllers/controllerHabitsTracker') 

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/', postHabit)
router.delete('/:id', deleteHabit)
router.patch('/:id', patchHabit)

module.exports = router
