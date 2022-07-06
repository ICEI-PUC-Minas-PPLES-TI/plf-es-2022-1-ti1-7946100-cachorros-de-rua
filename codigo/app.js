import { forwardGeocoding } from './geocoding.js'

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_animal'));

if(!db) {
  db = {data: []}
}

// Formata o endereço
function formatAddress(numero, rua, cidade, estado) {
  const espace = '%20'

  return numero + espace + rua.replace(' ', espace) + espace + cidade.replace(' ', espace) + espace + estado.replace(' ', espace)  + espace
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

async function insertAnimal(animal) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
      novoId = db.data[db.data.length - 1].id + 1;

    const { latitude, longitude } = await forwardGeocoding(formatAddress(animal.numero, animal.rua, animal.cidade, animal.estado))
    
    let novoAnimal = {
      "id": novoId,
      "porte": animal.porte,
      "anl": animal.anl,
      "raca": animal.raca,
      "cor": animal.cor,
      "rua" : animal.rua,
      "numero": animal.numero,
      "cidade" : animal.cidade,
      "estado": animal.estado,
      "descricao": animal.descricao,
      "coordinates" : [ longitude, latitude ]
    };

    // Insere o novo objeto no array
    db.data.push(novoAnimal);
    displayMessage("Animal inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db));
}

function updateAnimal(id, animal) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].porte = animal.porte,
    db.data[index].anl = animal.anl,
    db.data[index].raca = animal.raca,
    db.data[index].cor = animal.cor,
    db.data[index].rua = animal.rua,
    db.data[index].numero = animal.numero,
    db.data[index].cidade = animal.cidade,
    db.data[index].estado = animal.estado,
    db.data[index].descricao = animal.descricao

    displayMessage("Animal alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db));
}

function deleteAnimal(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Animal removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db));
}

export { db, insertAnimal, updateAnimal, deleteAnimal, displayMessage }