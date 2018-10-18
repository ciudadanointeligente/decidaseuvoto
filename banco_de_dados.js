var haddade = {
    'name': 'Fernando Haddad',
    'description': '',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fernando_Haddad_Prefeito_2016.jpg/800px-Fernando_Haddad_Prefeito_2016.jpg',
    'positions': {2: {source: 'http://google.com', description: 'Perrito'}, 
                  4: {source: 'http://globo.com', description: 'Gatito'}, 
                  6: {source: '', description: ''}, 
                  7: {source: '', description: ''}, 
                  9: {source: '', description: ''}, 
                  11: {source: '', description: ''}, 
                  14: {source: '', description: ''}, 
                  16: {source: '', description: ''}, 
                  18: {source: '', description: ''}, 
                  19: {source: '', description: ''}, 
                  22: {source: '', description: ''}, 
                  23: {source: '', description: ''}, 
                  25: {source: '', description: ''}, 
                  28: {source: '', description: ''}
                },

};
var outro = {
    'name': 'Jair Bolsonaro',
    'description': '',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Jair_Bolsonaro_Medico_Militar_no_SUS_%28cropped%29.jpg',
    'positions': {1: {source: '', description: ''}, 
                  3: {source: '', description: ''}, 
                  5: {source: '', description: ''}, 
                  8: {source: '', description: ''}, 
                  10: {source: '', description: ''}, 
                  12: {source: '', description: ''}, 
                  13: {source: '', description: ''}, 
                  15: {source: '', description: ''}, 
                  17: {source: '', description: ''}, 
                  20: {source: '', description: ''}, 
                  21: {source: '', description: ''}, 
                  24: {source: '', description: ''}, 
                  26: {source: '', description: ''}, 
                  27: {source: '', description: ''}
              },

};


var questions = [
    {
    id: 1, 
    name: 'Você concorda com as alterações realizadas na CLT e defende que a terceirização possa ocorrer em todas as atividades das empresas?',
    positions: [
                {label: 'Sim', id: 1},// Outro
                {label:'Não', id: 2},// Haddade
                ]
    },
    {
        id: 2, 
        name: 'Você acredita que os trabalhadores devem contribuir mais tempo do que contribuem hoje para se aposentar?',
        positions: [
                    {label: 'Sim', id: 3},// Outro
                    {label:'Não', id: 4},// Haddade
                    ]
    },
    {
        id: 3, 
        name: 'Você concorda que devemos começar a cobrar impostos dos lucros de empresários e das grandes heranças e isentar o imposto de renda de quem ganha até cinco salários mínimos?',
        positions: [
                    {label: 'Sim', id: 5},// Outro
                    {label:'Não', id: 6},// Haddade
                    ]
    },
    {
        id: 4, 
        name: 'Você acha que o Estado deve fazer maiores investimentos na saúde pública, mantendo o acesso ao SUS público e gratuito?',
        positions: [
                    {label: 'Sim', id: 7},// Haddade
                    {label:'Não', id: 8},// Outro
                    ]
    },
    {
        id: 5, 
        name: 'Você defende o direito das pessoas LGBT constituírem uma família e terem sua união civil reconhecida pelo Estado?',
        positions: [
                    {label: 'Sim', id: 9},// Haddade
                    {label:'Não', id: 10},// Outro
                    ]
    },
    {
        id: 6, 
        name: 'Você é a favor da igualdade salarial entre homens e mulheres que ocupem o mesmo cargo?',
        positions: [
                    {label: 'Sim', id: 11},// Haddade
                    {label:'Não', id: 12},// Outro
                    ]
    },
    {
        id: 7, 
        name: 'O consumo de maconha deve ser tratado como crime?',
        positions: [
                    {label: 'Sim', id: 13},// Outro
                    {label:'Não', id: 14},// Haddade
                    ]
    },
    {
        id: 8, 
        name: 'Você acha que o Brasil deve sair do Conselho de Direitos Humanos da Organização das Nações Unidas (ONU)?',
        positions: [
                    {label: 'Sim', id: 15},// Outro
                    {label:'Não', id: 16},// Haddade
                    ]
    },
    {
        id: 9, 
        name: 'Você é a favor de acabar com ministérios como o da Ciência, Tecnologia e Inovação, do Meio Ambiente e da Cultura?',
        positions: [
                    {label: 'Sim', id: 17},// Outro
                    {label:'Não', id: 18},// Haddade
                    ]
    },
    {
        id: 10, 
        name: 'Você considera que participação da sociedade é importante para a tomada de decisões do governo?',
        positions: [
                    {label: 'Sim', id: 19},// Haddade
                    {label:'Não', id: 20},// Outro
                    ]
    },
    {
        id: 11, 
        name: 'Você acredita que a tortura é um método eticamente aceitável?',
        positions: [
                    {label: 'Sim', id: 21},// Outro
                    {label:'Não', id: 22},// Haddade
                    ]
    },
    {
        id: 12, 
        name: 'Você considera importante ter experiência prévia na administração pública antes de assumir um cargo executivo?',
        positions: [
                    {label: 'Sim', id: 23},// Haddade
                    {label:'Não', id: 24},// Outro
                    ]
    },
    {
        id: 13, 
        name: 'Você concorda que devemos aumentar os recursos na educação para melhorar a formação dos professores e permitir o ensino integral gratuito?',
        positions: [
                    {label: 'Sim', id: 25},// Haddade
                    {label:'Não', id: 26},// Outro
                    ]
    },
    {
        id: 14, 
        name: 'Você acha que o Brasil deve congelar os investimentos em saúde e educação até 2037?',
        positions: [
                    {label: 'Sim', id: 27},// Outro
                    {label:'Não', id: 28},// Haddade
                    ]
    }
];
module.exports = {
    candidatos: [haddade, outro],
    questions: questions,
};