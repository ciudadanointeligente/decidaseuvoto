# DecidaSeuVoto
![Logo DecidaSeuVoto](https://raw.githubusercontent.com/ciudadanointeligente/decidaseuvoto/master/public/images/logo-decida.png)

Decida seu voto aqui com a gente!

Instalação
----------
```
npm install
```
Fazer rolar!
-------------
```
npm start
```
Testes
------
```
npm test
```

Mudando dados
----------------
Você pode conferir o arquivo ```banco_de_dados.js```
onde tem uma lista dos candidatos e uma lista das perguntas.
por exemplo:
```
var questions = [
    {
    id: 1,
    name: 'O trabalhador deve contribuir mais tempo do que já contribui hoje para poder se aposentar?',
    positions: [
                {label: 'Sim', extra_class: 'check', id: 1},
                {label:'Não', extra_class: 'times', id: 2},<---------Esta posição
                ]
    },
    {
        id: 2,
        name: 'Quem ganha R$ 5 mil deve pagar o mesmo imposto proporcional de quem ganha R$ 50 mil?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 3},
                    {label:'Não', extra_class: 'times', id: 4},
                    ]
    }
];
var candidatos = [{
    'name': 'Fernando Haddad',
    'description': '',
    'image': '/images/haddad.png',
    'positions': {
                    2: {source: '', description: ''}, //<----- Aqui a resposta do candidato é declarada,
                    //                                         fazendo referência à posição acima
                    4: {source: '', description: ''}
                },

}];
```
