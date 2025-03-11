const mongoose = require('mongoose')
const Habit = require('../models/habitsModel')

//GET all habits
const getHabits = async(req, res)=>{
    // {res.json({mssg: 'GET ALL habits from tracker app'})}
    try{
        const habitsList = await Habit.find({}).sort({createdAt:-1})
        res.status(200).json(habitsList)
    }catch(err){
        res.status(400).json({err: err.message})
    }
}

//GET single habit
const getHabit = async(req, res) => {
    // {res.json({mssg: 'GET One Single habit from tracker app'})}
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Esa #ID de hábito no cumple los criterios de nuestra DB'})
    }
       
    const singleHabit = await Habit.findById(id)
    if(!singleHabit){
        return res.status(400).json({error:'No se encontraron hábitos en la DB que correspondan a ese ID'})
    }
    res.status(200).json(singleHabit)
}

//DELETE single habit
const deleteHabit = async(req, res) =>{
    //{res.json({mssg: 'DELETE One Single habit from tracker app'})}
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Esa #ID de hábito no cumple los criterios de nuestra DB'})
    }
    const singleHabit = await Habit.findOneAndDelete({_id:id})
    if(!singleHabit){
        return res.status(400).json({error:'esa #ID no parece existir en la DB'})
    }
    res.status(200).json(singleHabit)  
}

//PATCH or update single habit
const patchHabit = async(req, res) =>{
    //{res.json({mssg: 'PATCH or Update a habit'})}
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Esa #ID de hábito no cumple los criterios de nuestra DB'})
    }
    const singleHabit = await Habit.findOneAndUpdate({_id:id}, {...req.body})
    if (!singleHabit){
        return res.status(400).json({error:'esa #ID no parece existir en la DB'})
    }
    res.status(200).json(singleHabit)  
}

//POST single habit
const postHabit = async(req, res) =>{
    // {res.json({mssg: 'POST One Single habit from tracker app'})}
    const { title, trackingMethod, quantity } = req.body

    try{
        //alt version -- worksout similar but the response of this function (new Habit + .save()) is only the req.body, meanwhile, the response of the .create() function is the full document object created 
            // const habit = new Habit(req.body)
            // habit.save()
       const habit = await Habit.create({title, trackingMethod, quantity})
        res.status(200).json(habit)

    }catch(err){
        res.status(400).json({err: err.message})
    }
}

module.exports = {
    getHabits,
    getHabit,
    patchHabit,
    deleteHabit,
    postHabit,
}