export type Status = 'Aberto' | 'Em andamento' | 'Resolvido'
export type Priority = 'Baixa' | 'Média' | 'Alta'

export interface Ticket {
  id: number
  title: string
  category: string
  priority: Priority
  status: Status
  requester: string
  date: string
  description: string
}