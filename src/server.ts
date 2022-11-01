import express from 'express';

const app = express();

app.get("/test", (request, response) => {
    return response.send("olá nlw")
});

app.post("/test-post", (request, response) => {
    return response.send('olá nlw metodo POST')
});

app.listen(3000, () => console.log('Server is running NLW'));