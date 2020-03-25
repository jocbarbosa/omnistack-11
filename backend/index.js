const express = require('express');

const app = express();

app.use(express.json());


app.post('/users', (request, response) => {
    const params = request.body;

    console.log(params);

    return response.json({
        message: 'Hello world'
    });
});
app.listen(3333);