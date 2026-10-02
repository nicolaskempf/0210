import type { Ticket } from '../types'
import { StatCard } from '../components/StatCard'
import { TicketTable } from '../components/TicketTable'

interface DashboardProps {
  tickets: Ticket[]
  onSelect: (ticket: Ticket) => void
  onNew: () => void
}

export function Dashboard({ tickets, onSelect, onNew }: DashboardProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Início</h2>
        <p className="mt-1 text-gray-500">Resumo dos chamados de suporte.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total" value="24" note="Chamados cadastrados" icon="" />
        <StatCard label="Abertos" value="8" note="Aguardando atendimento" icon="" />
        <StatCard label="Em andamento" value="10" note="Sendo atendidos" icon="" />
        <StatCard label="Resolvidos" value="6" note="Finalizados" icon="" />
      </div>

      <button onClick={onNew} className="btn-primary sm:hidden">Novo chamado</button>

      <TicketTable tickets={tickets} onSelect={onSelect} />
    </div>
  )
}