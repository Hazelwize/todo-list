const Todo = require('../models/Todo')

module.exports = {
    getTodo: async(req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs',{todos:todoItems, left: itemsLeft})
        }
        catch(err){
            console.log(err)
        }
        
    },
    createTodo: async (req,res) => {
        console.log(req.body.todoItem)
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('todo was created')
            res.redirect('/todos')
        }
        catch(err){
            console.log(err)
        }
    },
    deleteTodo: async(req,res) =>{
        console.log(req.body.id)
        try{
            await Todo.findOneAndDelete({_id: req.body.id})
            console.log('todo was deleted')
            res.json('todo was deleted')
        }
        catch(err){
            console.log(err)
        }
    },
    markCompleted: async(req,res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.id},{completed: true})
            console.log('marked complete')
            res.json('marked complete')
        }
        catch(err){
            console.log(err)
        }
    },
    markIncomplete: async(req,res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.id},{completed: false})
            console.log('marked complete')
            res.json('marked complete')
        }
        catch(err){
            console.log(err)
        }
    }

}