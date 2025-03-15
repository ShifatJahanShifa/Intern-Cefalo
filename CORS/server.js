const express=require('express');
const app=express();
const cors=require('cors');

// app.use(cors({
//     origin: 'https://www.husseinnasser.com'
// }));    

app.use(express.json());

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})

app.get('/',(req,res)=>{    
    res.json({message:'Hello, world!'});
})