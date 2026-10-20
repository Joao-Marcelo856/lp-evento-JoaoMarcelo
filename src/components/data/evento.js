export const evento = {
    nome: 'GameJam OC 48h',
    slogan: '48 horas, um tema surpresa e o seu primeiro jogo publicado.',
    data: '6 a 8 de agosto de 2027',
    horario: 'de sexta, 19h, a domingo, 19h',
    local: 'Espaço Maker Municipal — Osvaldo Cruz/SP',
    sobre: 'Na GameJam OC, equipes de até quatro pessoas criam um jogo do zero em 48 horas, a partir de um tema revelado na abertura. Não precisa saber programar: artistas, músicos e roteiristas também fazem falta numa equipe. Mentores ficam disponíveis o tempo todo, e os jogos terminados são publicados na página do evento.',
    numeros: [
        { valor: '48h', rotulo: 'de criação' },
        { valor: '30', rotulo: 'equipes' },
        { valor: '8', rotulo: 'mentores' },
    ],
};

export const programacao = [
    { dia: 'Sex', horario: '19h', atividade: 'Abertura e revelação do tema' },
    { dia: 'Sex', horario: '20h', atividade: 'Formação das equipes' },
    { dia: 'Sáb', horario: '10h', atividade: 'Oficina relâmpago de Godot' },
    { dia: 'Sáb', horario: '15h', atividade: 'Rodada de mentoria com todas as equipes' },
    { dia: 'Dom', horario: '17h', atividade: 'Entrega dos jogos' },
    { dia: 'Dom', horario: '18h', atividade: 'Apresentações e premiação' },
];

export const mentores = [
    { nome: 'Ana Ribeiro', area: 'Programação', descricao: 'Desenvolvedora de jogos para celular há oito anos.' },
    { nome: 'Caio Matsuda', area: 'Arte 2D', descricao: 'Ilustrador especializado em pixel art e animação.' },
    { nome: 'Lia Fontes', area: 'Áudio', descricao: 'Compositora de trilhas sonoras para jogos independentes.' },
    { nome: 'Rafael Dias', area: 'Game design', descricao: 'Criador de jogos de tabuleiro e professor de game design.' },
];

export const inscricoes = [
  { titulo: 'Participante', preco: 'Gratuita', valor: 0, descricao: 'Vaga para jogar as 48h em equipe.' },
  { titulo: 'Participante com kit', preco: 'R$ 40', valor: 40, descricao: 'Vaga + camiseta + caneca do evento.' },
  { titulo: 'Visitante no domingo', preco: 'Gratuita', valor: 0, descricao: 'Só para assistir apresentações e premiação.' },
];


export const faqs = [
    { pergunta: 'Preciso ter uma equipe?', resposta: 'Não. Quem chegar sozinho entra numa equipe sexta, às 20h.' },
    { pergunta: 'Preciso levar computador?', resposta: 'Sim, cada equipe precisa de pelo menos um notebook.' },
    { pergunta: 'Tem onde descansar?', resposta: 'Sim, há uma área de descanso com colchonetes e lanche à noite.' },
];
