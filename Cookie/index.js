const app=require('express')() 
app.get('/', (req, res) => {
    res.setHeader("Set-Cookie",["setfromserver=1301","jscan'tseethis=1; httponly"])
    res.sendFile(__dirname + '/index.html');
});

app.get('/path1', (req, res) => {   
    res.send("Path 1: I have sent this cookie "+req.headers.cookie);
});

app.get('/path2', (req, res) => {   
    res.send("Path 2: I have sent this cookie "+req.headers.cookie);
});

app.get('/img', (req, res) => {

    res.sendFile(__dirname + '/image-2.png');
    res.setHeader("Set-Cookie",["iamtrackingyou=1301"])
});

app.get('/steal', (req, res) => {

    res.send("I have stolen your cookie "+req.query.v);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});