
const express = require('express'); 

const app = express(); 

const connection = require('./database/database');

const Pergunta = require('./database/Pergunta');

connection.authenticate().then(() => {
    console.log('Conectado ao banco de dados');
}).catch((error) => {
    console.log(error);
});

const bodyParser = require('body-parser'); 

app.set('view engine', 'ejs'); 
app.use(express.static('public')); 


app.use(bodyParser.urlencoded({ extended: false })); 


app.use(bodyParser.json()); 


app.get('/', (req, res) => {
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render('index', { 
            perguntas: perguntas
        }); 
    })
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar'); 
});

app.post('/savequestion', (req, res) => {
    var title = req.body.title; 
    var description = req.body.description; 

    Pergunta.create({
        titulo: title,       
        descricao: description 
    }).then(() => {
        res.redirect('/');
    });
    
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); 
});


