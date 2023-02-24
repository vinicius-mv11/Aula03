var contatos = [
  { _id: 1, nome: 'Fabio Teixeira', email: 'fabio.teixeira@ifsp.edu.br' },
  { _id: 2, nome: 'Fabiano Teixeira', email: 'fabiano.teixeira@ifsp.edu.br' },
  { _id: 3, nome: 'Melissa Teixeira', email: 'melissa.teixeira@ifsp.edu.br' }
];

module.exports = function() {
  var controller = {};
  controller.listaContatos = function(req, res) {
    res.json(contatos);
  };

  controller.obtemContato = function(req, res) {
    console.log('Seleciona contato: ' + req.params.id);
    var idContato = req.params.id;
    var contato = contatos.filter((contato) => {
      return contato._id == idContato;
    })[0];
    contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
  };
  return controller;
};