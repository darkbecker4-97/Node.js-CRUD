//Importar Express ->
const express = require('express');

const server = express();

//Função para o express mostrar o JSON ->
server.use(express.json());

const filmes = ['O 3º Homem ', 'Fugindo do Inferno', ' Viver', 'Chinatown', 'O Labirinto do Fauno', 'Meu Amigo Totoro', 'Incêndios', 'Ran', 'Julgamento em Nuremberg', 'Em Busca do Ouro', 'O Segredo dos seus Olhos', 'Divertida Mente', 'O Castelo Animado', 'Sindicato de Ladrões', 'A Ponte do Rio Kwai', 'O Sétimo Selo', 'O Quarto de Jack', 'Jogos, Trapaças e Dois Canos Fumegantes', 'A Mulher Faz o Homem', 'Uma Mente Brilhante', 'Cassino', 'Blade Runner, o Caçador de Androides', 'O Homem Elefante', 'V de Vingança', 'O Lobo de Wall Street']

//Rota para retornar um filme ->
server.get('/filmes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(filmes[index]);
});


//Rota para retornar TODOS os filme ->
server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

//Adicionar um novo filme ->
server.post('/filmes', (req, res) => {
    const { name } = req.body;
    filmes.push(name);
    const { filme } = req.body;
    filmes.push(filme);

    return res.json(filmes);
});

//Atualizar Filme ->
server.put('/filmes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes[index] = name;

    return res.json(filmes);
});

//Deletar Filme ->
server.delete('/filmes/:index', (req, res) => {
    const { index } = req.params;

    filmes.splice(index, 1);
    return res.json({ message: "O Filme foi Deletado!!" });
});



//Porta para rodar o projeto ->
server.listen(3000);
