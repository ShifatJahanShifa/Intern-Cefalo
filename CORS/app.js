const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin: ['http://127.0.0.1:5500','https://www.google.com']
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'Hello, world!'});
})

app.get('/data',(req,res)=>{
    res.json({
        name: 'shifa',
        country: 'bangladesh' 
    })
})

app.listen(5050,()=>{
    console.log('Server is running on port 5050');
})