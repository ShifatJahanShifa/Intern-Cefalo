const express = require('express');
const app = express();
const port = 4000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');   
});


// Simulating a POST request using GET (creating a user)
app.get('/create-user', (req, res) => {
    const { name, email } = req.query;

    if (!name || !email) {
        return res.status(400).json({
            status: "error",
            message: "Name and email are required."
        });
    }

    const newUser = { name, email };
    // In a real scenario, you would save this to a database.
    res.status(200).json({
        status: "success",
        message: "User created successfully",
        data: newUser
    });
});



// Simulating a DELETE request using GET (deleting a user)
app.get('/delete-user', (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({
            status: "error",
            message: "User ID is required."
        });
    }

    // In a real scenario, you would delete the user from a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} deleted successfully.`,
        data: {}
    });
});


// Simulating a PATCH request using GET (updating user data)
app.get('/update-user', (req, res) => {
    const { id, name } = req.query;

    if (!id || !name) {
        return res.status(400).json({
            status: "error",
            message: "User ID and name are required."
        });
    }

    const updatedUser = { id, name };
    // In a real scenario, you would update the user in a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} updated successfully.`,
        data: updatedUser
    });
});


// Simulating a PUT request using GET (replacing user data)
app.get('/replace-user', (req, res) => {
    const { id, name, email } = req.query;

    if (!id || !name || !email) {
        return res.status(400).json({
            status: "error",
            message: "User ID, name, and email are required."
        });
    }

    const replacedUser = { id, name, email };
    // In a real scenario, you would replace the user's data in a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} replaced successfully.`,
        data: replacedUser
    });
});


// ------------------------- using head ----------------------  



app.head('/', (req, res) => {
    res.send('Hello World!');   
});


// Simulating a POST request using GET (creating a user)
app.head('/create-user', (req, res) => {
    const { name, email } = req.query;

    if (!name || !email) {
        return res.status(400).json({
            status: "error",
            message: "Name and email are required."
        });
    }

    const newUser = { name, email };
    // In a real scenario, you would save this to a database.
    res.status(200).json({
        status: "success",
        message: "User created successfully",
        data: newUser
    });
});



// Simulating a DELETE request using GET (deleting a user)
app.head('/delete-user', (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({
            status: "error",
            message: "User ID is required."
        });
    }

    // In a real scenario, you would delete the user from a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} deleted successfully.`,
        data: {}
    });
});


// Simulating a PATCH request using GET (updating user data)
app.head('/update-user', (req, res) => {
    const { id, name } = req.query;

    if (!id || !name) {
        return res.status(400).json({
            status: "error",
            message: "User ID and name are required."
        });
    }

    const updatedUser = { id, name };
    // In a real scenario, you would update the user in a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} updated successfully.`,
        data: updatedUser
    });
});


// Simulating a PUT request using GET (replacing user data)
app.head('/replace-user', (req, res) => {
    const { id, name, email } = req.query;

    if (!id || !name || !email) {
        return res.status(400).json({
            status: "error",
            message: "User ID, name, and email are required."
        });
    }

    const replacedUser = { id, name, email };
    // In a real scenario, you would replace the user's data in a database.
    res.status(200).json({
        status: "success",
        message: `User with ID ${id} replaced successfully.`,
        data: replacedUser
    });
});


app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
