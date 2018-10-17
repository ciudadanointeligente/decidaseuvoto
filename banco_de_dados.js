var haddade = {
    'name': 'Fernando Haddad',
    'description': '',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fernando_Haddad_Prefeito_2016.jpg/800px-Fernando_Haddad_Prefeito_2016.jpg',
    positions: [],

};
var outro = {
    'name': 'Jair Bolsonaro',
    'description': '',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Jair_Bolsonaro_Medico_Militar_no_SUS_%28cropped%29.jpg',
    positions: [],

};


var questions = [
    {
    id: 1, 
    name: 'Você concorda com as alterações realizadas na CLT e defende que a terceirização possa ocorrer em todas as atividades das empresas?',
    positions: [
                {label: 'Sim', id: 1},
                {label:'Nao', id: 2}
                ]
    },
    {
        id: 2, 
        name: 'Você acredita que os trabalhadores devem contribuir mais tempo do que contribuem hoje para se aposentar?',
        positions: [
                    {label: 'Sim', id: 3},
                    {label:'Nao', id: 4}
                    ]
    },
    {
        id: 3, 
        name: 'Você concorda que devemos começar a cobrar impostos dos lucros de empresários e das grandes heranças e isentar o imposto de renda de quem ganha até cinco salários mínimos?',
        positions: [
                    {label: 'Sim', id: 5},
                    {label:'Nao', id: 6}
                    ]
    },
    {
        id: 4, 
        name: 'Você acha que o Estado deve fazer maiores investimentos na saúde pública, mantendo o acesso ao SUS público e gratuito?',
        positions: [
                    {label: 'Sim', id: 7},
                    {label:'Nao', id: 8}
                    ]
    },
    {
        id: 5, 
        name: 'Você defende o direito das pessoas LGBT constituírem uma família e terem sua união civil reconhecida pelo Estado?',
        positions: [
                    {label: 'Sim', id: 9},
                    {label:'Nao', id: 10}
                    ]
    },
    {
        id: 6, 
        name: 'Você é a favor da igualdade salarial entre homens e mulheres que ocupem o mesmo cargo?',
        positions: [
                    {label: 'Sim', id: 11},
                    {label:'Nao', id: 12}
                    ]
    },
    {
        id: 7, 
        name: 'O consumo de maconha deve ser tratado como crime?',
        positions: [
                    {label: 'Sim', id: 13},
                    {label:'Nao', id: 14}
                    ]
    },
    {
        id: 8, 
        name: 'Você acha que o Brasil deve sair do Conselho de Direitos Humanos da Organização das Nações Unidas (ONU)?',
        positions: [
                    {label: 'Sim', id: 15},
                    {label:'Nao', id: 16}
                    ]
    },
    {
        id: 9, 
        name: 'Você é a favor de acabar com ministérios como o da Ciência, Tecnologia e Inovação, do Meio Ambiente e da Cultura?',
        positions: [
                    {label: 'Sim', id: 17},
                    {label:'Nao', id: 18}
                    ]
    },
    {
        id: 10, 
        name: 'Você considera que participação da sociedade é importante para a tomada de decisões do governo?',
        positions: [
                    {label: 'Sim', id: 19},
                    {label:'Nao', id: 20}
                    ]
    },
    {
        id: 11, 
        name: 'Você acredita que a tortura é um método eticamente aceitável?',
        positions: [
                    {label: 'Sim', id: 21},
                    {label:'Nao', id: 22}
                    ]
    },
    {
        id: 12, 
        name: 'Você considera importante ter experiência prévia na administração pública antes de assumir um cargo executivo?',
        positions: [
                    {label: 'Sim', id: 23},
                    {label:'Nao', id: 24}
                    ]
    },
    {
        id: 13, 
        name: 'Você concorda que devemos aumentar os recursos na educação para melhorar a formação dos professores e permitir o ensino integral gratuito?',
        positions: [
                    {label: 'Sim', id: 25},
                    {label:'Nao', id: 26}
                    ]
    },
    {
        id: 14, 
        name: 'Você acha que o Brasil deve congelar os investimentos em saúde e educação até 2037?',
        positions: [
                    {label: 'Sim', id: 27},
                    {label:'Nao', id: 28}
                    ]
    }
];
module.exports = {
    candidatos: [haddade, outro],
    questions: questions,
};