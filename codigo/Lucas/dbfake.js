var db = {
    dados: [
        {
            tipo: 'Cachorro',
            cor: 'vermelho',
            descricao: 'coleira preta e olhos pretos',
            imagem: 'https://placekitten.com/320/420/?1',
            porte: 'pequeno',
        }, {
            tipo: 'Gato',
            cor: 'branco',
            descricao: 'olhos vermelhos',
            imagem: 'https://placekitten.com/320/420/?2',
            porte: 'médio',
        }, {
            tipo: 'Cachorro',
            cor: 'caramelo',
            descricao: 'pelagem comprida',
            imagem: 'https://placekitten.com/320/420/?1',
            porte: 'médio',
        }, {
            tipo: 'Cachorro',
            cor: 'branco',
            descricao: 'pintas pretas',
            imagem: 'https://placekitten.com/320/420/?4',
            porte: 'grande',
        }, {
            tipo: 'Gato',
            cor: 'preto',
            descricao: 'olhos azuis e barriga branca',
            imagem: 'https://placekitten.com/320/420/?5',
            porte: 'pequeno',
        }
    ]
}
const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Gato pequeno',
                'iconSize': [60, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.935064, -19.924375]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Gato grande',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.9344931, -19.9166813]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Suricato gigante vermelho',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.9305366, -19.9292053]
            }
        }
    ]
};