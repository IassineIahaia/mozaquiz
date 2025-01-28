// Importa o módulo Express, usado para criar o servidor web
const express = require('express'); 

// Cria uma instância da aplicação Express
const app = express(); 

// Importa o middleware body-parser para processar dados das requisições HTTP
const bodyParser = require('body-parser'); 

// Configura o motor de visualização para EJS, usado para renderizar páginas dinâmicas
app.set('view engine', 'ejs'); 

// Define a pasta "public" como o diretório para arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public')); 

// Configura o body-parser para processar dados enviados via formulário no formato URL-encoded
app.use(bodyParser.urlencoded({ extended: false })); 

// Configura o body-parser para processar requisições com corpo no formato JSON
app.use(bodyParser.json()); 

// Rota para a página inicial ("/"), renderiza o arquivo "index.ejs"
app.get('/', (req, res) => {
    res.render('index'); // Renderiza a página "index"
});

// Rota para a página "/perguntar", renderiza o arquivo "perguntar.ejs"
app.get('/perguntar', (req, res) => {
    res.render('perguntar'); // Renderiza a página "perguntar"
});

// Rota POST para "/savequestion", usada para receber dados de formulários
app.post('/savequestion', (req, res) => {
    var title = req.body.title; // Obtem o valor do campo "title" do formulário
    var description = req.body.description; // Obtem o valor do campo "description" do formulário
    res.send("Formulario Recebedo com sucesso! o tituto e: " + title + " e a descricao e: " + description + ""); // Envia uma mensagem de confirmação

});

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando ativo
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); // Loga a mensagem no console
});
