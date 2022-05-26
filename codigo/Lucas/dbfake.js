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
                'message': 'Foo',
                'iconSize': [60, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-66.324462, -16.024695]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Bar',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-61.21582, -15.971891]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Baz',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.9305366, -19.9292053]
            }
        }
    ]
};