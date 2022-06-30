var adress = `149%20Avenida%20Caranda%C3%AD%20Belo%20Horizonte%20MG%20`; /*variavel vinda do banco de dados, contendo o endereço ja formatado */
var req = new XMLHttpRequest();
var url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?country=BR&access_token=pk.eyJ1IjoibHV0cmluZGUiLCJhIjoiY2wzbTZqdGhuMDFsZjNjcGE0emJtZWlnbyJ9.vVCzS9YnqtD0W16mslEHOA`;

     function processaDados() {
        var dados = JSON.parse (req.responseText);
        var saida = dados.features.center;
    }

    function getData() {
        req.onload = processaDados;
        req.open('GET', url, true);
        req.send();
    }
    console.log(getData());