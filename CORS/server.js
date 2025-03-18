const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET','POST'],
}));    

app.use(express.json());

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})

app.get('/',(req,res)=>{    
    res.json({message:'Hello, world!'});
})

app.get('/data',(req,res)=>{
    res.json({
        name: 'shifa',
        country: 'bangladesh' 
    })
})

app.put('/data',(req,res)=>{
    res.json({
        name: 'shifa',
        country: 'bangladesh' 
    })
})