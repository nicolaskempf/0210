import type { Ticket } from '../types'

export const tickets: Ticket[] = [
  {
    id: 1048,
    title: 'Computador não liga',
    category: 'Hardware',
    priority: 'Alta',
    status: 'Aberto',
    requester: 'Ana Souza',
    date: '02/10/2026',
    description: 'O computador do setor financeiro não apresenta imagem ao ligar.',
  },
  {
    id: 1047,
    title: 'Acesso ao sistema bloqueado',
    category: 'Acesso',
    priority: 'Média',
    status: 'Em andamento',
    requester: 'Lucas Lima',
    date: '02/10/2026',
    description: 'Usuário precisa recuperar o acesso ao sistema interno.',
  },
  {
    id: 1046,
    title: 'Impressora sem papel',
    category: 'Impressão',
    priority: 'Baixa',
    status: 'Resolvido',
    requester: 'Mariana Alves',
    date: '01/10/2026',
    description: 'Impressora do atendimento estava sem papel.',
  },
  {
    id: 1045,
    title: 'Internet lenta',
    category: 'Rede',
    priority: 'Média',
    status: 'Em andamento',
    requester: 'Pedro Henrique',
    date: '01/10/2026',
    description: 'Conexão apresenta lentidão durante o período da tarde.',
  },
]