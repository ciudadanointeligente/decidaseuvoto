var haddade = {
    'name': 'Fernando Haddad',
    'description': '',
    'image': '/images/haddad.png',
    'positions': {
                    2: {source: '', description: ''},
                    4: {source: '', description: ''},
                    5: {source: '', description: ''},
                    7: {source: '', description: ''},
                    9: {source: '', description: ''},
                    11: {source: '', description: ''},
                    13: {source: '', description: ''},
                    15: {source: '', description: ''},
                    17: {source: '', description: ''},
                    19: {source: '', description: ''},
                },

};
var outro = {
    'name': 'Jair Bolsonaro',
    'description': '',
    'image': '/images/bolsonaro.png',
    'positions': {
                1: {source: '', description: ''},
                3: {source: '', description: ''},
                6: {source: '', description: ''},
                8: {source: '', description: ''},
                10: {source: '', description: ''},
                12: {source: '', description: ''},
                14: {source: '', description: ''},
                16: {source: '', description: ''},
                18: {source: '', description: ''},
                20: {source: '', description: ''},
              },

};


var questions = [
    {
    id: 1,
    name: 'O trabalhador deve contribuir mais tempo do que já contribui hoje para poder se aposentar?',
    positions: [
                {label: 'Sim', extra_class: 'check', id: 1},// Outro
                {label:'Não', extra_class: 'times', id: 2},// Haddade
                ]
    },
    {
        id: 2,
        name: 'Quem ganha R$ 5 mil deve pagar proporcionalmente o mesmo imposto de quem ganha R$ 5 milhões?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 3},// Outro
                    {label:'Não', extra_class: 'times', id: 4},// Haddade
                    ]
    },
    {
        id: 3,
        name: 'O Estado deve investir mais na saúde pública para garantir o acesso gratuito e universal a todos os cidadãos?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 5},// Haddade
                    {label:'Não', extra_class: 'times', id: 6},// Outro
                    ]
    },
    {
        id: 4,
        name: 'As pessoas LGBTI+ devem ter os mesmos direitos de todos os outros cidadãos?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 7},// Haddade
                    {label:'Não', extra_class: 'times', id: 8},// Outro
                    ]
    },
    {
        id: 5,
        name: 'Você é a favor da igualdade salarial entre homens e mulheres que ocupem o mesmo cargo?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 9},// Haddade
                    {label:'Não', extra_class: 'times', id: 10},// Outro
                    ]
    },
    {
        id: 6,
        name: 'Você apoia a valorização do salário mínimo?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 11},// Haddade
                    {label:'Não', extra_class: 'times', id: 12},// Outro
                    ]
    },
    {
        id: 7,
        name: ' O Brasil deve participar do Conselho de Direitos Humanos da ONU?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 13},// Haddade
                    {label:'Não', extra_class: 'times', id: 14},// Outro
                    ]
    },
    {
        id: 8,
        name: 'O Brasil deve expandir a geração de energias renováveis (ex: solar, eólica, biomassa)?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 15},// Haddade
                    {label:'Não', extra_class: 'times', id: 16},// Outro
                    ]
    },
    {
        id: 9,
        name: 'O governo deve ouvir a sociedade em seu processo de tomada de decisão?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 17},// Haddade
                    {label:'Não', extra_class: 'times', id: 18},// Outro
                    ]
    },
    {
        id: 10,
        name: 'O Brasil deve ampliar seus investimentos em educação ao longo dos próximos anos?',
        positions: [
                    {label: 'Sim', extra_class: 'check', id: 19},// Haddade
                    {label:'Não', extra_class: 'times', id: 20},// Outro
                    ]
    }
];
module.exports = {
    candidatos: [outro, haddade],
    questions: questions,
};
