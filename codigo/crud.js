'use strict'

const chegada = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidadeloja').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
  
  }
  
  const pesquisarCep = async() => {
      const cep = document.getElementById('cep').value;
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const dados = await fetch(url);
      const endereco = await dados.json();
      if(endereco.hasOwnProperty('erro')){
        document.getElementById('rua').value = 'cep Invalido';
        document.getElementById('bairro').value = 'cep Invalido';
        document.getElementById('cidadeloja').value = 'cep Invalido';
        document.getElementById('estado').value = 'cep Invalido';
        document.querySelector('#salvar').disabled = true;
      }else{
        chegada(endereco);
        document.querySelector('#salvar').disabled = false;
      }
      
      
  }
  
  document.getElementById('cep')
           .addEventListener('focusout', pesquisarCep);
  
  
           const rua= document.querySelector('#rua')
           console.log(rua)
           rua.disabled = true
           
           const bairro= document.querySelector('#bairro')
           console.log(bairro)
           bairro.disabled = true
           
           const cidadeloja= document.querySelector('#cidadeloja')
           console.log(cidadeloja)
           cidadeloja.disabled = true
           
           const estado= document.querySelector('#estado')
           console.log(estado)
           estado.disabled = true
  
  
  
           var input = document.querySelector("#cep");
  input.addEventListener("keypress", function(e) {
      if(!checknumber(e)) {
        e.preventDefault();
    }
  });

var input = document.querySelector("#celularloja");
input.addEventListener("keypress", function(e) {
    if(!checknumber(e)) {
      e.preventDefault();
  }
});
var input = document.querySelector("#nomeloja");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

var input = document.querySelector("#cidadeloja");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

function checknumber(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-zA-Z]';
    if (char.match(pattern)) {
      return true;
  }
}







const openModal = () => document.getElementById('modal').classList.add('active')
const openModal2 = () => document.getElementById('modal2').classList.add('active')

const closeModal2 = () => {
    document.getElementById('modal2').classList.remove('active')
}

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_loja')) ?? []
const setLocalStorage = (dbloja) => localStorage.setItem("db_loja", JSON.stringify(dbloja))






// CRUD - create read update delete
const deleteClient = (dex) => {
    const dbloja = readClient()
    dbloja.splice(dex, 1)
    setLocalStorage(dbloja)
}

const updateClient = (dex, client) => {
    const dbloja = readClient()
    dbloja[dex] = client
    setLocalStorage(dbloja)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbloja = getLocalStorage()
    dbloja.push (client)
    setLocalStorage(dbloja)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nomeloja').dataset.dex = 'new'
}

const saveClient = () => {
    debugger
    if (isValidFields()) {
        const client = {
            nomeloja: document.getElementById('nomeloja').value,
            emailloja: document.getElementById('emailloja').value,
            celularloja: document.getElementById('celularloja').value,
            cidadeloja: document.getElementById('cidadeloja').value
        }
        const dex = document.getElementById('nomeloja').dataset.dex
        if (dex == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(dex, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, dex) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nomeloja}</td>
        <td>${client.emailloja}</td>
        <td>${client.celularloja}</td>
        <td>${client.cidadeloja}</td>
        <td>
            <button type="button" class="button green" id="edit-${dex}">Editar</button>
            <button type="button" class="button red" id="delete-${dex}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbloja = readClient()
    clearTable()
    dbloja.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nomeloja').value = client.nomeloja
    document.getElementById('emailloja').value = client.emailloja
    document.getElementById('celularloja').value = client.celularloja
    document.getElementById('cidadeloja').value = client.cidadeloja
    document.getElementById('nomeloja').dataset.dex = client.dex
}

const editClient = (dex) => {
    const client = readClient()[dex]
    client.dex = dex
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, dex] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(dex)
        } else {
            const client = readClient()[dex]
            let avisoDelete = document.querySelector('#avisoDelete')

            avisoDelete.textContent = `Deseja excluir a ONG? ${client.nomeloja}`
            openModal2()

        // APAGAR O REGISTRO
            document.getElementById('apagar').addEventListener('click', () => {
                deleteClient(dex)
                updateTable()
                closeModal2()
            })
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

// modal apagar
document.getElementById('modalClose2')
    .addEventListener('click', closeModal2)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

// modal apagar
document.getElementById('cancelar2')
    .addEventListener('click', closeModal2)




   