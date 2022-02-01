module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota atendimento GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)  
        res.send('Você está na rota de atendimento POST')
    })    
}