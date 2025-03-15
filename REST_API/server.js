const express = require('express');
const app = express();
const port = 4000; 
const cors=require('cors');
// app.use(cors({ 
//     origin: 'https://www.husseinnasser.com' 
//     // origin: '*'
// }));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

const drinks={
    "items":[
    {
        "name": 'Coke', "price": 2.50
    },
    {
        "name": 'Pepsi', "price": 2.00
    },
    {
        "name": 'Fanta', "price": 2.00  
    }
    ]
}

app.get('/drinks', (req, res) => {
  res.json(drinks);
})


app.get('/drinks/:name', (req, res) => {
  const { name } = req.params;
  res.json(drinks.items.find(drink => drink.name === name));
})

app.post('/drinks',(req,res)=>{
    const drink = req.body;
    drinks.items.push(drink);
    console.log(drink);
    res.json(drink);
})

app.delete('/drinks/:name',(req,res)=>{
    const { name } = req.params;
    drinks.items = drinks.items.filter(drink => drink.name !== name);
    res.json({
        message: 'Drink deleted'
    });
})

app.patch('/drinks/:name',(req,res)=>{    
    const { name } = req.params;
    const { newPrice } = req.body;
    
    for (let i=0;i<drinks.items.length;i++)
    {
        if(drinks.items[i].name === name){
            drinks.items[i].price=newPrice;
            break
        }
    }
    
    res.json({message: 'Drink updated partially'});
})

app.put('/drinks/:name',(req,res)=>{  
    const { name } = req.params;
    const { newItem } = req.body;
    
    for (let i=0;i<drinks.items.length;i++)
    {
        if(drinks.items[i].name === name){
            drinks.items[i]=newItem;
            break
        }
    }
    
    res.json({message: 'Drink updated'});
})


app.get('*',(req,res)=>{
    res.json({message: "Welcome to our site"})
})


app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on ${port}`);
});
