const express = require('express');
const mc = require('./controllers/messages_controller')

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.get(messagesBaseUrl, mc.create);
app.post(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(3001, () => console.log('i am listening...'));