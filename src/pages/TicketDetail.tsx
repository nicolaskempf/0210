import type { Ticket } from '../types'
import { StatusBadge } from '../components/StatusBadge'

interface TicketDetailProps {
  ticket: Ticket
  onBack: () => void
}

export function TicketDetail({ ticket, onBack }: TicketDetailProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <button onClick={onBack} className="text-sm font-semibold text-indigo-600">← Voltar para chamados</button>
      <div className="card p-6">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Chamado #{ticket.id}</p>
            <h2 className="mt-1 text-2xl font-bold">{ticket.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{ticket.category} · aberto em {ticket.date}</p>
          </div>
          <StatusBadge value={ticket.status} />
        </div>
        <div className="grid gap-4 py-5 sm:grid-cols-2">
          <div><p className="text-xs uppercase text-slate-400">Solicitante</p><p className="mt-1 font-semibold">{ticket.requester}</p></div>
          <div><p className="text-xs uppercase text-slate-400">Prioridade</p><div className="mt-1"><StatusBadge value={ticket.priority} /></div></div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold">Descrição</p>
          <p className="mt-2 leading-7 text-slate-600">{ticket.description}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={() => alert('Status alterado para Em andamento (simulado).')}>Assumir chamado</button>
          <button className="btn-secondary" onClick={() => alert('Chamado marcado como resolvido (simulado).')}>Marcar como resolvido</button>
        </div>
      </div>
    </div>
  )
}