const express = require('express');
const app = express();

const phonebookEntries = [
        { 
            "id": 1,
            "name": "Arto Hellas", 
            "number": "040-123456"
        },
        { 
            "id": 2,
            "name": "Ada Lovelace", 
            "number": "39-44-5323523"
        },
        { 
            "id": 3,
            "name": "Dan Abramov", 
            "number": "12-43-234345"
        },
        { 
            "id": 4,
            "name": "Mary Poppendieck", 
            "number": "39-23-6423122"
        }
];

app.get('/api/persons', (req, res) => {
    /**
     * GET request handler for retrieving all phonebook entries.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    res.json(phonebookEntries);
});

//Route for getting the info of the phonebook
app.get('/info', (req, res) => {
    /**
     * GET request handler for retrieving the info of the phonebook.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    const date = new Date();
    res.send(`<p>Phonebook has info for ${phonebookEntries.length} people</p><p>${date}</p>`);
});


const port = 3001;
app.listen(port, () => {
    /**
     * Starts the server and listens on the specified port.
     * @param {number} port - The port number to listen on.
     */
    console.log(`Server is running on port ${port}`);
});
