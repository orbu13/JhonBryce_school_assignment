const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient} = require('mongodb')
const mongoURI = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(mongoURI)
const dotenv = require('dotenv')
dotenv.config()

app.use(cors({origin:'*'}))
let db 

async function connectionToMongo(){
    try {
        await client.connect()
        db = client.db('schoolPractice')
        console.log('connected to mongodb')
    } catch (error) {
        console.log('failed to connect to mongodb')
    } 
}
connectionToMongo()

app.get('/products', async(req,res,next)=>{
    try {
        const products = await  db.collection('products').find().toArray()
        return res.json(products)
    } catch (error) {
        return res.json({message: error.message})
    }
})

app.get('/customers', async(req,res,next)=>{
    try {
        const customers = await  db.collection('customers').find().toArray()
        return res.json(customers)
    } catch (error) {
        return res.json({message: error.message})
    }
})

app.get('/orders/:status', async(req,res,next)=>{
    try {
        console.log(req.params.status)
        const orders = await  db.collection('orderStatus').find({status_name: req.params.status}).toArray()
        console.log(orders)
        return res.json(orders)
    } catch (error) {
        return res.json({message: error.message})
    }
})

app.get('/orderData', async(req,res,next)=>{
    try {
        console.log(req.params.status)
        const orders = await  db.collection('orderData').find().toArray()
        for(let order of orders){
            order.customer = await db.collection('customers').findOne({email:order.customer.email})
            order.shipper = await db.collection('shippers').findOne({company_name:order.shipper.shipper_name})
        }
        console.log(orders)
        return res.json(orders)
    } catch (error) {
        return res.json({message: error.message})
    }
})

app.get('/report', async(req,res,next)=>{
    try {
        console.log(req.params.status)
        const reports = await  db.collection('reports').find().toArray()
        console.log(reports)
        return res.json(reports)
    } catch (error) {
        return res.json({message: error.message})
    }
})

app.listen(process.env.RUNNING_ON_PORT, ()=>{
    console.log(`Running on port ${process.env.RUNNING_ON_PORT}`)
})